/*
  todo.js -- Router for the ToDoList
*/
const express = require('express');
const router = express.Router();
const Superhero = require('../models/super')


/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
}

// get the value associated to the key
router.get('/',
  isLoggedIn,
  async (req, res, next) => {
      res.locals.superheros = await Superhero.find({ownerid:req.user._id})
      res.render('superhero');
});

/* add the value in the body to the list associated to the key */
router.post('/',
  isLoggedIn,
  async (req, res, next) => {
      const superhero = new Superhero(
        {name:req.body.name,
         ability:req.body.ability,
         age:req.body.age,
         ownerid: req.user._id
        })
      await superhero.save();
      res.redirect('/superhero')
});

module.exports = router;
