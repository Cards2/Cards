const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const UserInteractions = require("../models/userInteraction");
const ProjectData = require("../models/Project");
const passport = require("../config/passport");

// Posts Signup info of user
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      req.login(user, function(err, result) {
        res.status(201).json(user);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// OP
// Posts projectdata
router.post("/projectdata", (req, res, next) => {
  console.log(res.data);
  console.log(req.body);
  ProjectData.create(req.body)
    .then(projectInfo => {
      // console.log(projectInfo);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// need to use isAuth for getting the data of the current PROJECT
router.get("/one-project-query", isAuth, (req, res, next) => {
  ProjectData.findOne({ _id: req.user._id })
    .then(currentProject => {
      res.status(200).json({ currentProject });
    })
    .catch(err => res.status(500).json({ err }));
});

// MUST TEST
router.post("/project-update", (req, res, next) => {
  ProjectData.update(req.body)
    .then(projectInfo => {})
    .catch(err => {
      res.status(500).json({ err });
    });
});

// creates projectinteraction with current user ID upon login
router.post("/projectInteraction", (req, res, next) => {
  ProjectInteractions.create(req.body)
    .then(projectInter => res.status(200).json({ projectInter }))
    .catch(err => {
      res.status(500).json({ err });
    });
});

// gets user's project interaction data from BEND
router.get("/project-interaction-query", isAuth, (req, res, next) => {
  ProjectInteractions.findOne({ _id: req.user._id })
    .then(currProjInt => {
      res.status(200).json({ currProjInt });
    })
    .catch(err => res.status(500).json({ err }));
});

// pushes user Id to 'requested' array.
router.post("/invite-to-project", isAuth, (req, res, next) => {
  console.log(req.body);
  ProjectInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $addToSet: { requestedInvite: req.body.requestedInvite } }
  )
    .then(sendingproj => {
      res.json(sendingproj);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  ProjectInteractions.findOneAndUpdate(
    { _id: req.body.requestedInvite },
    { $addToSet: { pendingInvite: req.body._id } }
  )
    .then(sendingproj => {
      res.json(sendingproj);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// DELETE: Updates project pending cards and target's requested cards array
router.post("/delete-proj-invite", isAuth, (req, res, next) => {
  console.log(req.body);
  ProjectInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $pull: { pendingInvite: req.body.pendingInvite } }
  )
    .then(deletingInvite => {
      res.json(deletingInvite);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  ProjectInteractions.findOneAndUpdate(
    { _id: req.body.pendingInvite },
    { $pull: { requestedCards: req.body._id } }
  )
    .then(deletingcard => {
      res.json(deletingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// SHOULD an immediate acceptanme mean both people have card into avaialble?
// Line 188 automatic friending
router.post("/accept-proj-invite", isAuth, (req, res, next) => {
  console.log(req.body);
  ProjectInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $pull: { pendingCards: req.body.acceptedInvite } }
  )
    .then(acceptingInvite => {
      res.json(acceptingInvite);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  ProjectInteractions.findOneAndUpdate(
    { _id: req.body.acceptedInvite },
    { $$addToSet: { acceptedInvite: req.body._id } }
  )
    .then(acceptingInvite => {
      res.json(acceptingInvite);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  ProjectInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $addToSet: { acceptedInvite: req.body.acceptedInvite } }
  )
    .then(acceptingInvite => {
      res.json(acceptingInvite);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  ProjectInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $pull: { requestedInvite: req.body.acceptedInvite } }
  )
    .then(acceptingInvite => {
      res.json(acceptingInvite);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

//return await service.get('/is-logged-in');
router.get("/is-logged-in", (req, res, next) => {
  res.json(req.user);
});

// Logsout login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  const { user } = req;
  res.status(200).json(user);
});

// Logsout
router.get("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: "Logged out" });
});

// OP
// Gets email from currently signed in user
router.get("/profile", isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }));
});

// OP
// Posts 'profile information" using form "userData"
router.post("/userdata", (req, res, next) => {
  UserData.create(req.body)
    .then(userInfo => res.status(200).json({ userInfo }))
    .catch(err => {
      res.status(500).json({ err });
    });
});

// OP
// creates userinteraction with current user ID upon login
router.post("/userInteraction", (req, res, next) => {
  UserInteractions.create(req.body)
    .then(userInter => res.status(200).json({ userInter }))
    .catch(err => {
      res.status(500).json({ err });
    });
});

// OP
// gets all user interaction data from BEND
router.get("/user-interaction-query", isAuth, (req, res, next) => {
  UserInteractions.findOne({ _id: req.user._id })
    .then(currUserInt => {
      res.status(200).json({ currUserInt });
    })
    .catch(err => res.status(500).json({ err }));
});

// OP
// pushes user Id to 'requested' array.
router.post("/send-my-card", isAuth, (req, res, next) => {
  console.log(req.body);
  UserInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $addToSet: { requestedCards: req.body.requestedCards } }
  )
    .then(sendingcard => {
      res.json(sendingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  UserInteractions.findOneAndUpdate(
    { _id: req.body.requestedCards },
    { $addToSet: { pendingCards: req.body._id } }
  )
    .then(sendingcard => {
      res.json(sendingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// OP
// DELETE: Updates user pending cards and target's requested cards array
router.post("/delete-card-send", isAuth, (req, res, next) => {
  console.log(req.body);
  UserInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $pull: { pendingCards: req.body.pendingCards } }
  )
    .then(deletingcard => {
      res.json(deletingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  UserInteractions.findOneAndUpdate(
    { _id: req.body.pendingCards },
    { $pull: { requestedCards: req.body._id } }
  )
    .then(deletingcard => {
      res.json(deletingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// SHOULD an immediate acceptanme mean both people have card into avaialble?
// w/ Automatic 2 way friending
router.post("/accept-card-send", isAuth, (req, res, next) => {
  console.log(req.body);
  UserInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $pull: { pendingCards: req.body.acceptedCards } }
  )
    .then(acceptingcard => {
      res.json(acceptingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  UserInteractions.findOneAndUpdate(
    { _id: req.body._id },
    { $addToSet: { acceptedCards: req.body.acceptedCards } }
  )
    .then(acceptingcard => {
      res.json(acceptingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  UserInteractions.findOneAndUpdate(
    { _id: req.body.acceptedCards },
    { $$pull: { requestedCards: req.body._id } }
  )
    .then(acceptingcard => {
      res.json(acceptingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
  UserInteractions.findOneAndUpdate(
    { _id: req.body.acceptedCards },
    { $addToSet: { acceptedCards: req.body._id } }
  )
    .then(acceptingcard => {
      res.json(acceptingcard);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// OP
//  requests all users to search component
router.get("/userquery", (req, res, next) => {
  // console.log(req.user)
  UserData.find({ _id: { $ne: req.user._id } }) //$ne excludes a specific field from the search. here we are passing the current user ID to avoid search
    .then(allUsers => {
      res.status(200).json({ allUsers });
    })
    .catch(err => res.status(500).json({ err }));
});

// OP
// need to use isAuth for getting the data of the current user
router.get("/one-user-query", isAuth, (req, res, next) => {
  UserData.findOne({ _id: req.user._id }) //use req.user instead of req.body if using isAuth
    .then(currentUser => {
      res.status(200).json({ currentUser });
    })
    .catch(err => res.status(500).json({ err }));
});

// OP
router.post("/profile-update", (req, res, next) => {
  UserData.findOneAndUpdate({ _id: req.user._id }, req.body)
    .then(userInfo => {})
    .catch(err => {
      res.status(500).json({ err });
    });
  User.findOneAndUpdate({ _id: req.user._id }, req.body)
    .then(userInfo => {})
    .catch(err => {
      res.status(500).json({ err });
    });
});

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
