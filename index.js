(function(){
  'use string';
})();

const superagent = require('superagent');
const sha1 = require('sha1');
const cloudinary = require("cloudinary");

const config = {
  cloudName: undefined,
  upload_preset: undefined,
  api_key: undefined,
  api_secret: undefined,
}

const main = {
  cloudName: undefined,
  upload_preset: undefined,
  api_key: undefined,
  api_secret: undefined,

  configAPI(cloudName, upload_preset, api_key, api_secret){

    if (cloudName == undefined || api_key == undefined || api_secret == undefined) {
      throw new Error("Please specify all the parameters");
    }

    // Universal usage
    config.cloudName = cloudName;
    config.upload_preset = upload_preset;
    config.api_key = api_key;
    config.api_secret = api_secret;

    this.cloudName = cloudName;
    this.upload_preset = upload_preset;
    this.api_key = api_key;
    this.api_secret = api_secret;

  },

  config({ cloudName,upload_preset,  api_key, api_secret }){

    if (cloudName == undefined || api_key == undefined || api_secret == undefined) {
      throw new Error("Please specify all the parameters");
    }

    // Universal usage
    config.cloudName = cloudName;
    config.upload_preset = upload_preset;
    config.api_key = api_key;
    config.api_secret = api_secret;

    this.cloudName = cloudName;
    this.upload_preset = upload_preset;
    this.api_key = api_key;
    this.api_secret = api_secret;

  },

   /**
   * This will upload any image file . Please use an uploader like multer or React-Dropzone for this.
   * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
   */
  imageUploader(file){
    const image = file;

    const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;
    const timeStamp = Date.now() / 1000;
    const STR = `timestamp=${timeStamp}&upload_preset=${this.upload_preset}${this.api_secret}`;
    const signature = sha1(STR);

    const params = {
      'api_key': this.api_key,
      'timestamp': timeStamp,
      'upload_preset': this.upload_preset,
      'signature': signature,
      'file': image
    }

    // Make request to cloudinary !!!
    const req = superagent.post(url);
    Object.keys(params)
      .forEach(key => {
        req.field(key, params[key]);
      });

    const response = req.end((err, resp)=> {
      return resp.body;
    });

    return response;
  },

  /**
   * This will upload a mp4 file . Please use an uploader like multer or React-Dropzone for this.
   * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
   */
  videoUploader(file){
    // Uploading to cloudinary
    const image = file;

    const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/video/upload`;
    const timeStamp = Date.now() / 1000;
    const STR = `timestamp=${timeStamp}&upload_preset=${this.upload_preset}${this.api_secret}`;
    const signature = sha1(STR);

    const params = {
      'api_key': this.api_key,
      'timestamp': timeStamp,
      'upload_preset': this.upload_preset,
      'signature': signature,
      'file': image
    }

    // Make request to cloudinary !!!
    const req = superagent.post(url);
    Object.keys(params)
      .forEach(key => {
        req.field(key, params[key]);
      });

    const response = req.end((err, resp)=> {
      return resp.body;
    });

    return response;

  },

   /**
   * This will upload a mp3 file . Please use an uploader like multer or React-Dropzone for this.
   * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
   */
  audioUploader(file){

    // Uploading to cloudinary
    const image = file;

    const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/video/upload`;
    const timeStamp = Date.now() / 1000;
    const STR = `timestamp=${timeStamp}&upload_preset=${this.upload_preset}${this.api_secret}`;
    const signature = sha1(STR);

    const params = {
      'api_key': this.api_key,
      'timestamp': timeStamp,
      'upload_preset': this.upload_preset,
      'signature': signature,
      'file': image
    }

    // Make request to cloudinary !!!
    const req = superagent.post(url);
    Object.keys(params)
      .forEach(key => {
        req.field(key, params[key]);
      });

    const response = req.end((err, resp)=> {
      return resp.body;
    });

    return response;

  },

  /**
   * Handlers for express js
   */
  express: {

    /**
     * Upload a file via passing the file path . Use multer as http/multipart handler
     * @param {String} filePath specify filepath via multer
     * @param {Function} cb A callback after uploading
     */
    upload(filePath, cb){
      cloudinary.config({
        cloudName: config.cloudName,
        api_key: config.api_key,
        api_secret: config.api_secret
      });
      cloudinary.uploader.upload(filePath, cb);
    },

    /**
     * Upload a file via passing the req object from expressjs
     * @param {Object} req specify req from express route handler
     * @param {Function} cb A callback after uploading
     */
    uploadViaMulter(req, cb){
      cloudinary.config({
        cloud_name: config.cloudName,
        api_key: config.api_key,
        api_secret: config.api_secret
      });

      cloudinary.uploader.upload(req.file.path, cb);
    },

    /**
     * Upload a file and then return the url back
     * @param {String} filepath specify filepath via multer
     */
    uploadAndReturn(filepath){
      cloudinary.config({
        cloudName: config.cloudName,
        api_key: config.api_key,
        api_secret: config.api_secret
      });
      return cloudinary.uploader.upload(file, function (result){
        return result.url;
      })
    },

    /**
     * Upload a file via multer and then return the url back
     * @param {Object} req req from express route handler
     */
    uploadViaMulterAndReturn(req){
      cloudinary.config({
        cloudName: config.cloudName,
        api_key: config.api_key,
        api_secret: config.api_secret
      });
      return cloudinary.uploader.upload(rea.file.path, function (result){
        return result.url;
      })
    }

  }

}

// Export everything
module.exports = main;
