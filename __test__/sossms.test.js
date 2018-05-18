'use strict';

import sossms from '../index';

describe('Testing deployed api', () => {
  // testing with valid private USER_ID
  test('should return a 200 status with valid USER_ID', () => {
    return sossms(1000, process.env.USER_ID, 'Successfully texted!')
      .then((response) => {
        expect(response.status).toEqual(200);
      });
  });

  // testing with invalid USER_ID
  test('should return 500 if USER_ID is invalid', () => {
    return sossms(999, process.env.INVALID, 'No text sent...')
      .then(Promise.reject)
      .catch((err) => {
        expect(err.status).toEqual(500);
      });
  });
});
