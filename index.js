'use strict';

import superagent from 'superagent';

export default function (error, userID, message) {
  return superagent.post(`${process.env.SOS_SMS_API}/api/messages/${userID}`)
    .send({ error, message })
    .then((data) => {
      return data;
    });
}
