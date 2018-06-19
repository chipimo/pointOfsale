var jsonfile = require('jsonfile');
const fs = require('fs-extra');
import { getCompanyDatafilePath } from './file/path';

var Filename = 'companyFiles';
var Folderpath = getCompanyDatafilePath + 'detials';
var Filepath = Folderpath + '/' + Filename + '.json';
var obj = {};
const uuidv5 = require('uuid/v5');
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

var defaultData = {
  name: null,
  id: uuidv5('Please_change_this', MY_NAMESPACE),
  api_key: null,
  password: null,
  website: null,
  email: null,
  contact_number: null,
  country: null,
};

function EnsureFile(file) {
  try {
    obj = jsonfile.readFileSync(file);
  } catch (error) {
    jsonfile.writeFile(file, defaultData, function(err) {
      if (err) {
      }
    });
  }
}

EnsureFile(Filepath);

const DetialsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_REGComp':
      var objfile = jsonfile.readFileSync(Filepath);
      objfile.name = action.user.company;
      objfile.id = action.user.id;
      objfile.api_key = action.user.api_key;
      objfile.password = action.user.password;
      objfile.email = action.user.email;
      objfile.contact_number = action.user.contact_number;
      objfile.website = action.user.website;

      jsonfile.writeFile(Filepath, objfile, function(err) {});
      return obj;

    default:
      return obj;
  }
};

export default DetialsReducer;
