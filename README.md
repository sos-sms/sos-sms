# sos-sms

![npm](https://img.shields.io/npm/dw/sos-sms.svg) [![Build Status][travis-image]][travis-url]

Send error messages via Twilio with ease!

This npm package is designed to be used in conjunction with a backend to provide data persistence. Find the corresponding backend project here (it's free and open source but you will have to set it up yourself): https://github.com/401-Team-Awesome/sos-sms-server

Contributors: [Carl Olson](https://github.com/colson10), [Cara Ottmar](https://github.com/cottmar), [Sarah Bixler](https://github.com/sarasaurus), [Zachary Schumpert](https://github.com/buphnezz)

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the npm registry. Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install sos-sms
```
You will need to include a configuration or process environment variable that holds your backend api url. Name the variable ```SOS_SMS_API``` so that it will look like 
```
SOS_SMS_API=http://example-backend-api.com
```
## Example

sossms(errorCode, userID, message);

```js
const userID = '1234567'
const errorCode = '500'
const message = 'Red Alert!'

sossms(errorCode, userID, message);
```

The ```userID``` is a unique code that a user will receive after creating an account. 

## License

[MIT](LICENSE)



[downloads-image]: https://img.shields.io/npm/dw/sos-sms.svg 
[travis-image]: https://travis-ci.org/colson10/sos-sms.svg?branch=master
[travis-url]: https://travis-ci.org/colson10/sos-sms

