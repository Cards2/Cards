const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
const UserInteractions = require("../models/userInteraction")
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


// Posts projectdata
router.post("/projectdata", (req, res, next) => {
  // console.log(res.data);
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
  ProjectData.findOne({ userID: req.user._id }) 
    .then(currentProject => {
      res.status(200).json({ currentProject });
    })
    .catch(err => res.status(500).json({ err }));
});

router.post("/project-update", (req, res, next) => {
  ProjectData.update(req.body)
    .then(projectInfo => {})
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

// Gets email from currently signed in user
router.get("/profile", isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }));
});

  // Posts 'profile information" using form "userData"
router.post("/userdata", (req, res, next) => {
  UserData.create(req.body)
    .then(userInfo => res.status(200).json({ userInfo }))
    .catch(err => {
      res.status(500).json({ err });
    });
});


// posts userinteraction with current user ID upon login
router.post("/userInteraction", (req, res, next) => {
  UserInteractions.create(req.body)
    .then(userInter => res.status(200).json({ userInter }))
    .catch(err => {
      res.status(500).json({ err });
    });
});


// gets all user interaction data from 
router.get("/user-interaction-query", isAuth, (req, res, next) => {
  UserInteractions.findOne({ userID: req.user._id }) 
    .then(currUserInt => {
      res.status(200).json({ currUserInt });
    })
    .catch(err => res.status(500).json({ err }));
});




// adds to userData sent requests. Must also add to user's received info
router.post("/send-my-card", isAuth, (req,res,next) => {
  console.log(req.user)
  console.log(req.body)
  UserInteractions.findOneAndUpdate({ userID: req.user }, )
  .then(sendingcard =>{})    
  .catch(err => {
    // console.log(err)
    res.status(500).json({ err });
  });
})
  // tryna fix this shiiiitttttt







//  requests all users to search component
router.get("/userquery", (req, res, next) => {
  UserData.find(req.body)
    .then(allUsers => {
      res.status(200).json({ allUsers });
    })
    .catch(err => res.status(500).json({ err }));
});

// need to use isAuth for getting the data of the current user because
router.get("/one-user-query", isAuth, (req, res, next) => {
  UserData.findOne({ userID: req.user._id }) //use req.user instead of req.body if using isAuth
    .then(currentUser => {
      res.status(200).json({ currentUser });
    })
    .catch(err => res.status(500).json({ err }));
});

router.post("/profile-update", (req, res, next) => {
  UserData.update(req.body)
    .then(userInfo => {})
    .catch(err => {
      // console.log(err)
      res.status(500).json({ err });
    });
});

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
