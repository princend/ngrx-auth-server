//
//
// File name : reports.js
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

var express = require('express');
var router = express.Router();


var reportService = require('../services/reports.service');

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

router.post('/addReport', (req, res) => {
  reportService.addReport(req)
  .then(result => {
    res.json({ success: true, payload: result});
  })
  .catch(err => {
    res.status(400).send(err);
  })
})


module.exports = router;
