'use strict';

import superagent from 'superagent';

const apiURL = 'https://sos-sms.herokuapp.com';

module.exports = (error, userID, message) => {
  return superagent.post(`${apiURL}/api/messages/${userID}`)
    .send({ error, message })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
