# sos-sms

![npm](https://img.shields.io/npm/dw/sos-sms.svg) [![Build Status][travis-image]][travis-url]

Send error messages via Twilio with ease!

Contributors: [Carl Olson](https://github.com/colson10), [Cara Ottmar](https://github.com/cottmar), [Sarah Bixler](https://github.com/sarasaurus), [Zachary Schumpert](https://github.com/buphnezz)

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the npm registry. Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install sos-sms
```

## Example

sossms(errorCode, userID, message);

```js
const userID = '1234567'
const errorCode = '500'
const message = 'Red Alert!'

sossms(errorCode, userID, message);
```

The ```userID``` is a unique code that a user will receive after registering an account. 

## License

[MIT](LICENSE)



[downloads-image]: https://img.shields.io/npm/dw/sos-sms.svg 
[travis-image]: https://travis-ci.org/colson10/sos-sms.svg?branch=master
[travis-url]: https://travis-ci.org/colson10/sos-sms

