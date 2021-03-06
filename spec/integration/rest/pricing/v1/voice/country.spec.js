'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Country', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.pricing.v1.voice
                                     .countries.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://pricing.twilio.com/v1/Voice/Countries';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v1/Voice/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.voice
                                     .countries.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'countries': [],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.voice
                                     .countries.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.pricing.v1.voice
                                     .countries('US').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {isoCountry: 'US'};
      var url = _.template('https://pricing.twilio.com/v1/Voice/Countries/<%= isoCountry %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'country': 'United States',
          'inbound_call_prices': [
              {
                  'current_price': '0.0085',
                  'number_type': 'local',
                  'base_price': '0.0085'
              },
              {
                  'current_price': '0.022',
                  'number_type': 'toll free',
                  'base_price': '0.022'
              }
          ],
          'iso_country': 'US',
          'outbound_prefix_prices': [
              {
                  'prefixes': [
                      '1907'
                  ],
                  'current_price': '0.090',
                  'friendly_name': 'Programmable Outbound Minute - United States - Alaska',
                  'base_price': '0.090'
              }
          ],
          'price_unit': 'USD',
          'url': 'https://pricing.twilio.com/v1/Voice/Countries/US'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.voice
                                     .countries('US').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

