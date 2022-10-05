const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');
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
module.exports = router;
