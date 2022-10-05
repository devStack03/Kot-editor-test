const path = require('path')
const fs = require('fs')
const { isArray } = require('util')

const FILE_NAME = 'db.json'
var obj = {
  table: [],
}
const addDataToJsonFile = (newData, callback) => {
  // if (!(Array.isArray(newData))) {
  //   callback('error', null);
  //   return;
  // }
  // ...
  fs.readFile(FILE_NAME, 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      obj = JSON.parse(data)
      console.log(newData);
      console.log(obj.table);
      const matchedElement = obj.table.filter((element) => parseInt(element.id) === parseInt(newData.id));
      console.log(matchedElement);
      if (matchedElement && matchedElement.length > 0) {
        const index = obj.table.indexOf(matchedElement[0]);
        matchedElement[0].translate = newData.text;
        obj.table[index] = matchedElement[0];
      } else {
        obj.table.push(newData);
      }      
      const json = JSON.stringify(obj)
      fs.writeFile(FILE_NAME, json, 'utf-8', function writeFileCallback(err) {
        if (err) callback(err, null)
        else callback(null, obj)
      })
    }
  })
}
exports.addDataToJsonFile = addDataToJsonFile

const getDataFromJsonFile = (callback) => {
  if (fs.existsSync(FILE_NAME)) {
    fs.readFile(FILE_NAME, 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
        callback(err, null)
      } else {
        obj = JSON.parse(data)
        callback(null, obj)
      }
    })
  } else {
    fs.writeFileSync(FILE_NAME, JSON.stringify(obj))
  }
}
exports.getDataFromJsonFile = getDataFromJsonFile
