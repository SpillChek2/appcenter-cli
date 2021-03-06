/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ExternalStoreRequest class.
 * @constructor
 * ExternalStoreRequest
 *
 * @member {string} [type] store Type. Possible values include: 'googleplay',
 * 'intune', 'windows', 'apple'
 * 
 * @member {string} [name] name of the store. In case of googleplay, windows
 * and Apple store this is fixed to Production.
 * 
 * @member {string} [track] track of the store. Can be production, alpha &
 * beta for googleplay. Can be production, testflight-internal &
 * testflight-external for Apple Store. Can be production for Windows Store.
 * Possible values include: 'production', 'alpha', 'beta',
 * 'testflight-internal', 'testflight-external'
 * 
 * @member {object} [intuneDetails]
 * 
 * @member {object} [intuneDetails.secretJson]
 * 
 * @member {string} [intuneDetails.secretJson.idToken] the id token of user
 * 
 * @member {string} [intuneDetails.secretJson.refreshToken] the refresh token
 * for user
 * 
 * @member {string} [intuneDetails.secretJson.refreshTokenExpiry] the expiry
 * of refresh token
 * 
 * @member {object} [intuneDetails.targetAudience]
 * 
 * @member {string} [intuneDetails.targetAudience.name] display name for the
 * target audience/group
 * 
 * @member {object} [intuneDetails.appCategory]
 * 
 * @member {string} [intuneDetails.appCategory.name] display name for the app
 * category
 * 
 * @member {string} [intuneDetails.tenantId] tenant id of the intune store
 * 
 * @member {object} [windowsDetails]
 * 
 * @member {object} [windowsDetails.secretJson]
 * 
 * @member {string} [windowsDetails.secretJson.idToken] the id token of user
 * 
 * @member {string} [windowsDetails.secretJson.refreshToken] the refresh token
 * for user
 * 
 * @member {string} [windowsDetails.secretJson.refreshTokenExpiry] the expiry
 * of refresh token
 * 
 * @member {string} [windowsDetails.tenantId] tenant id the user account
 * belongs to
 * 
 * @member {string} [serviceConnectionId] Id for the shared service
 * connection. In case of Apple AppStore, this connection will be used to
 * create and connect to the Apple AppStore in Mobile Center.
 * 
 */
function ExternalStoreRequest() {
}

/**
 * Defines the metadata of ExternalStoreRequest
 *
 * @returns {object} metadata of ExternalStoreRequest
 *
 */
ExternalStoreRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExternalStoreRequest',
    type: {
      name: 'Composite',
      className: 'ExternalStoreRequest',
      modelProperties: {
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        track: {
          required: false,
          serializedName: 'track',
          type: {
            name: 'String'
          }
        },
        intuneDetails: {
          required: false,
          serializedName: 'intune_details',
          type: {
            name: 'Composite',
            className: 'IntuneStoreRequest'
          }
        },
        windowsDetails: {
          required: false,
          serializedName: 'windows_details',
          type: {
            name: 'Composite',
            className: 'WindowsStoreRequest'
          }
        },
        serviceConnectionId: {
          required: false,
          serializedName: 'service_connection_id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ExternalStoreRequest;
