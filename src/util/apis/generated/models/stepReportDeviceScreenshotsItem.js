/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the StepReportDeviceScreenshotsItem class.
 * @constructor
 * @member {string} [id]
 * 
 * @member {string} [deviceSnapshotId]
 * 
 * @member {array} [stacktrace]
 * 
 * @member {array} [crashData]
 * 
 * @member {string} [status]
 * 
 * @member {string} [title]
 * 
 * @member {object} [screenshot]
 * 
 * @member {object} [screenshot.urls]
 * 
 * @member {string} [screenshot.urls.original]
 * 
 * @member {string} [screenshot.urls.small]
 * 
 * @member {string} [screenshot.urls.medium]
 * 
 * @member {string} [screenshot.urls.large]
 * 
 * @member {number} [screenshot.rotation]
 * 
 * @member {boolean} [screenshot.landscape]
 * 
 * @member {string} [logFile]
 * 
 * @member {string} [appiumLogFile]
 * 
 */
function StepReportDeviceScreenshotsItem() {
}

/**
 * Defines the metadata of StepReportDeviceScreenshotsItem
 *
 * @returns {object} metadata of StepReportDeviceScreenshotsItem
 *
 */
StepReportDeviceScreenshotsItem.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StepReport_deviceScreenshotsItem',
    type: {
      name: 'Composite',
      className: 'StepReportDeviceScreenshotsItem',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        deviceSnapshotId: {
          required: false,
          serializedName: 'device_snapshot_id',
          type: {
            name: 'String'
          }
        },
        stacktrace: {
          required: false,
          serializedName: 'stacktrace',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        crashData: {
          required: false,
          serializedName: 'crash_data',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        title: {
          required: false,
          serializedName: 'title',
          type: {
            name: 'String'
          }
        },
        screenshot: {
          required: false,
          serializedName: 'screenshot',
          type: {
            name: 'Composite',
            className: 'StepReportDeviceScreenshotsItemScreenshot'
          }
        },
        logFile: {
          required: false,
          serializedName: 'log_file',
          type: {
            name: 'String'
          }
        },
        appiumLogFile: {
          required: false,
          serializedName: 'appium_log_file',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = StepReportDeviceScreenshotsItem;
