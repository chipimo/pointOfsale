import { getUserPath } from './files/path';
let jsonfile = require('jsonfile');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');

let obj;
const user = { User: [] };
let file = getUserPath + 'user.json';

function checkfile(file) {
  try {
    fs.ensureFileSync(file);
    fs.writeJsonSync(file, user, err => {
      if (err) return console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
}

try {
  obj = jsonfile.readFileSync(file);
} catch (error) {
  checkfile(file);
  obj = jsonfile.readFileSync(file);
}
const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_REG':
      var oldfile = jsonfile.readFileSync(file);
      oldfile.User.push(action.payload);
      fs.writeJsonSync(file, oldfile, err => {
        if (err) return console.error(err);
      });
      obj = jsonfile.readFileSync(file);
      return obj;
    case 'differentServer':
      var oldfile = jsonfile.readFileSync(file);
      fs.writeJsonSync(file, user, err => {
        if (err) return console.error(err);
      });
    default:
      return obj;
  }
};

export default UserReducer;
