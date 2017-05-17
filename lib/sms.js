var Promise   = require('bluebird')
  , config    = require('config')
  , _         = require('lodash')
  , urljoin   = require('url-join')
  , rp        = require('request-promise')
  ;

class SMS {
  constructor(options = {}) {
    this.bearer = options.bearer;
  }

  send(json) {
    return Promise
            .resolve(rp.post({
                url     : urljoin(config.get('services.url'), 'api/sms')
              , headers : { 'authorization' : this.bearer }
              , method  : 'POST'
              , json
            }));
  }
}

module.exports = SMS;