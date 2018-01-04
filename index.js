const superagent = require('superagent');
const sha1 = require('sha1');

/**
 * @namespace
 * @property { String } cloudName - Please provide cloud name from the cloudinary console .
 */
const cloudinary_direcy = {
  cloudName: undefined,
  upload_preset: undefined,
  api_key: undefined,
  api_secret: undefined,

   /**
   * This will upload any image file . Please use an uploader like multer or React-Dropzone for this.
   * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
   * @param {Requester~requestCallback} fn - The callback recieves the response .
   */
  imageUploader(file, fn){
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

    req.end((err, resp)=> {
      return fn(resp.body);
    });

  },

  /**
   * This will upload a mp4 file . Please use an uploader like multer or React-Dropzone for this.
   * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
   * @param {Requester~requestCallback} fn - The callback recieves the response .
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

    req.end((err, resp)=> {
      return fn(resp.body);
    });

  },

   /**
   * This will upload a mp3 file . Please use an uploader like multer or React-Dropzone for this.
   * @param {Object} file The file object provided by an http/multipart handler . Such as React-Dropzone
   * @param {Requester~requestCallback} fn - The callback recieves the response .
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

    req.end((err, resp)=> {
      return fn(resp.body);
    });

  }

}

module.exports = cloudinary_direcy;
