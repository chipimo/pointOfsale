"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("./files/path");
var jsonfile = require('jsonfile');
var fs = require('fs-extra');
var uuidv4 = require('uuid/v4');
var obj;
var user = { User: [] };
var file = path_1.getUserPath + 'user.json';
function checkfile(file) {
    try {
        fs.ensureFileSync(file);
        fs.writeJsonSync(file, user, function (err) {
            if (err)
                return console.error(err);
        });
    }
    catch (err) {
        console.error(err);
    }
}
try {
    obj = jsonfile.readFileSync(file);
}
catch (error) {
    checkfile(file);
    obj = jsonfile.readFileSync(file);
}
var UserReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case 'NEW_REG':
            var oldfile = jsonfile.readFileSync(file);
            oldfile.User.push(action.payload);
            fs.writeJsonSync(file, oldfile, function (err) {
                if (err)
                    return console.error(err);
            });
            obj = jsonfile.readFileSync(file);
            return obj;
        case 'differentServer':
            var oldfile = jsonfile.readFileSync(file);
            fs.writeJsonSync(file, user, function (err) {
                if (err)
                    return console.error(err);
            });
        default:
            return obj;
    }
};
exports.default = UserReducer;
//# sourceMappingURL=User.js.map