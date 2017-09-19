/**
 * Module dependencies
 * @private
 */
const request = require('superagent');
const debug = require('debug')('yeu.ai');

/**
 * Module variables
 * @private
 */

const hostname = 'nlp.yeu.ai';
const endpoint = '/api/v1';
const version = '0.9';

/**
 * Module exports
 * @public
 */

module.exports = Application;

class Application {

    constructor(clientAccessToken, options) {
        // override default options
        this.options = Object.assign({
            hostname: hostname,
            endpoint: endpoint,
            version: version,
            secure: true,
            lang: 'vi',
            requestSource: 'node'
        }, options);

        // client access_token
        this.clientAccessToken = clientAccessToken;
    }

    _headers() {
        return {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.clientAccessToken,
            'api-request-source': this.requestSource
        }
    }

    word_tokenize(text) {
        return new Promise((resolve, reject) => {
            let url = `https://${this.options.hostname}/${this.options.endpoint}/tok`;
            request.post(url)
                .set(_headers())
                .query({
                    text: text
                })
                .end((err, res) => {
                    if (!err) {
                        resolve(res.body)
                    } else {
                        reject(err)
                    }
                })
        })
    }
}