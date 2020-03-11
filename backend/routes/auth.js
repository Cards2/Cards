const express = require("express");
const router = express.Router();
const User = require("../models/User");
const UserData = require("../models/userData");
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

// Posts userData from form
router.post('/userdata', (req, res, next) => {
  // console.log(res.data)
    UserData.create(req.body)
      .then((userInfo) => { 
        // console.log(userInfo)
      })
      .catch((err) => { 
        // console.log(err)
        res.status(500).json({ err })
      });
  });
router.get('/profileCall', (req, res, next) => {
  UserData.findOne({'userId':'value'}).then(res => {
    console.log(res.body);
  })
})

router.get('/userquery', (req, res, next) => {
    User.find(req.body)
    .then((allUsers) => {
      // console.log( allUsers ) 
      res.status(200).json({ allUsers })} )
    .catch((err) => res.status(500).json({ err }));
    });


router.post("/projectdata", (req, res, next) => {
  console.log(res.data);
  ProjectData.create(req.body)
    .then(projectInfo => {
      console.log(projectInfo);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

//return await service.get('/is-logged-in');
router.get('/is-logged-in', (req, res, next) => {  
    res.json(req.user)
    })

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    const { user } = req;
    res.status(200).json(user);
  });

router.get('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ msg: 'Logged out' });
  });

router.get("/profile", isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
  });

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
