//
//
// File name : users.js
// Created by: Jerry Hsieh @ 2018-01-03
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var userService = require('../services/users.service');

const SECRET = 'JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

/* user authenticate */
router.post('/authenticate', (req, res) => {
  let username = req.body.username.toLowerCase();
  let password = req.body.password.toLowerCase();


  userService.authenticate(username, password)
             .then((result)  => {
               if (result) {
                 let token = jwt.sign({ username: username}, SECRET, {'expiresIn': '1h'} );
                 res.json({ success: true, payload: token});
               } else {
                 res.json({ success: false, payload: 'please check username and password'});
               }
             })
             .catch(err => {
               res.status(400).send(err);
             })
})




module.exports = router;
