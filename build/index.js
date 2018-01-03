'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Please provide your api key , secret and upload preset . Find those data in your cloudinary console .
 */
var Cloudinary = function () {
  function Cloudinary(cloudName, api_key, api_secret, upload_preset) {
    (0, _classCallCheck3.default)(this, Cloudinary);


    // Class based value inheritance
    this.api_key = api_key;
    this.api_secret = api_secret;
    this.upload_preset = upload_preset;
    this.cloudName = cloudName;

    this.imageUploader = this.imageUploader.bind(this);
    this.audioUploader = this.audioUploader.bind(this);
    this.videoUploader = this.videoUploader.bind(this);
    this.about = this.about.bind(this);
  }

  /**
   * This will upload an image file . Please use an uploader like multer or React-Dropzone for this.
   * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
   */


  (0, _createClass3.default)(Cloudinary, [{
    key: 'imageUploader',
    value: function imageUploader(file) {

      // Uploading to cloudinary
      var image = file;

      var url = 'https://api.cloudinary.com/v1_1/' + this.cloudName + '/image/upload';
      var timeStamp = Date.now() / 1000;
      var STR = 'timestamp=' + timeStamp + '&upload_preset=' + this.upload_preset + this.api_secret;
      var signature = (0, _sha2.default)(STR);

      var params = {
        'api_key': this.api_key,
        'timestamp': timeStamp,
        'upload_preset': this.upload_preset,
        'signature': signature,
        'file': image

        // Make request to cloudinary !!!
      };var req = _superagent2.default.post(url);
      (0, _keys2.default)(params).forEach(function (key) {
        req.field(key, params[key]);
      });

      var response = req.end(function (err, resp) {
        return resp.body;
      });

      return response;
    }

    /**
     * This will upload a mp4 fil . Please use an uploader like multer or React-Dropzone for this.
     * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
     */

  }, {
    key: 'videoUploader',
    value: function videoUploader(file) {

      // Uploading to cloudinary
      var image = file;

      var url = 'https://api.cloudinary.com/v1_1/' + this.cloudName + '/video/upload';
      var timeStamp = Date.now() / 1000;
      var STR = 'timestamp=' + timeStamp + '&upload_preset=' + this.upload_preset + this.api_secret;
      var signature = (0, _sha2.default)(STR);

      var params = {
        'api_key': this.api_key,
        'timestamp': timeStamp,
        'upload_preset': this.upload_preset,
        'signature': signature,
        'file': image

        // Make request to cloudinary !!!
      };var req = _superagent2.default.post(url);
      (0, _keys2.default)(params).forEach(function (key) {
        req.field(key, params[key]);
      });

      var response = req.end(function (err, resp) {
        return resp.body;
      });

      return response;
    }

    /**
     * This will upload a mp3 file . Please use an uploader like multer or React-Dropzone for this.
     * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
     */

  }, {
    key: 'audioUploader',
    value: function audioUploader(file) {

      // Uploading to cloudinary
      var image = file;

      var url = 'https://api.cloudinary.com/v1_1/' + this.cloudName + '/video/upload';
      var timeStamp = Date.now() / 1000;
      var STR = 'timestamp=' + timeStamp + '&upload_preset=' + this.upload_preset + this.api_secret;
      var signature = (0, _sha2.default)(STR);

      var params = {
        'api_key': this.api_key,
        'timestamp': timeStamp,
        'upload_preset': this.upload_preset,
        'signature': signature,
        'file': image

        // Make request to cloudinary !!!
      };var req = _superagent2.default.post(url);
      (0, _keys2.default)(params).forEach(function (key) {
        req.field(key, params[key]);
      });

      var response = req.end(function (err, resp) {
        return resp.body;
      });

      return response;
    }
  }, {
    key: 'about',
    value: function about() {
      return 'Clodinary direct call API .';
    }
  }]);
  return Cloudinary;
}();

module.exports = Cloudinary;