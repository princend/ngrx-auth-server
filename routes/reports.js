//
//
// File name : reports.js
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

var express = require('express');
var router = express.Router();


var reportService = require('../servicies/reports.service');

/* get report */
router.get('/', (req, res) =>  {

  reportService.getReports()
               .then(result => {
                 res.json({ success: true, payload: result});
               })
               .catch(err => {
                 res.status(400).send(err);
               })
})
