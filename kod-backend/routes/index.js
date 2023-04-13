const express = require('express');
const axios = require("axios");

const router = express.Router();
const utils = require('../utils/utils');

const BASE_URL = 'http://44.203.214.220:7000';
const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', (req, res, next) => {
  utils.getDataFromJsonFile(function (err, obj) {
    if (err) res.json({status: 0, message: 'error', data: null})
    console.log(obj);
    res.json({status: 1, data: obj.table});
  })
});

router.post('/add', (req, res, next) => {
  const inputData = {
    id: req.body.id,
    text: req.body.text,
    translate: req.body.text
  };
  utils.addDataToJsonFile(inputData, function (err, obj) {
    if (err) res.json({status: 0, message: 'error', data: null});
    res.json({status: 1, data: obj.table});
  });
  
})
router.post('/login', async (req, res, next) => {
  const inputData = {
    username: req.body.username,
    password: req.body.password,
    tId: req.body.tId
  };
  let response = await httpClient.post(`${BASE_URL}/login`, inputData);
  res.json(response);
  
})
router.post('/credits', async (req, res, next) => {
  const inputData = {
    token: req.body.token,
  };
  let response = await httpClient.post(`${BASE_URL}/credits`, inputData);
  res.json(response);
  
})
router.post('/getSettings', async (req, res, next) => {
  const inputData = {
    token: req.body.token,
  };
  let response = await httpClient.post(`${BASE_URL}/getSettings`, inputData);
  res.json(response);
  
})
router.post('/logs', async (req, res, next) => {
  const inputData = {
    token: req.body.token,
    userId: req.body.userId,
  };
  let response = await httpClient.post(`${BASE_URL}/logs`, inputData);
  res.json(response);
  
})
router.post('/updateSettings', async (req, res, next) => {
  const inputData = {
    token: req.body.token,
    userId: req.body.userId,
    settings: req.body.settings
  };
  let response = await httpClient.post(`${BASE_URL}/updateSettings`, inputData);
  res.json(response);
  
})
module.exports = router;
