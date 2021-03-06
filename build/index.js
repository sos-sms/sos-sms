'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (error, userID, message) {
  return _superagent2.default.post(process.env.SOS_SMS_API + '/api/messages/' + userID).send({ error: error, message: message }).then(function (data) {
    return data;
  });
};

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }