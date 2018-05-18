'use strict';

import superagent from 'superagent';

const apiURL = 'https://sos-sms.herokuapp.com';

export default function (error, userID, message) {
  return superagent.post(`${apiURL}/api/messages/${userID}`)
    .send({ error, message })
    .then((data) => {
      return data;
    });
}
