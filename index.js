var config  = require('config')
  , Email   = require('./lib/email')
  , SMS     = require('./lib/sms')
  , Phone   = require('./lib/phone')
  ;

class SDK {
  constructor(options = {}) {
    let { bearer } = options;

    this.email = new Email({ bearer });
    this.sms = new SMS({ bearer });
    this.phone = new Phone({ bearer });
  }
}

module.exports = {
  sdk : (...args) => new SDK(...args);
}
