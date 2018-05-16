'use strict';

const apiURL = 'https://sos-sms.herokuapp.com';

const sossms = (error, userID, message) => {
  return superagent.post(`${apiURL}/api/messages/${userID}`)
    .send({ error, message })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export default sossms;
