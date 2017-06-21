var Promise   = require('bluebird')
  , config    = require('config')
  , _         = require('lodash')
  , urljoin   = require('url-join')
  , rp        = require('request-promise')
  ;

class Email {
  constructor(options = {}) {
    this.bearer = options.bearer;
  }

  send(json) {
    return rp
            .post({
                url     : urljoin(config.get('services.url'), 'api/email')
              , headers : { 'authorization' : this.bearer }
              , method  : 'POST'
              , json
            })
            .promise();
  }
}

module.exports = Email;
