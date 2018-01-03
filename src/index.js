import superagent from 'superagent';
import sha1 from 'sha1';

/**
 * Please provide your api key , secret and upload preset . Find those data in your cloudinary console .
 */
class Cloudinary{

  constructor(cloudName, api_key, api_secret, upload_preset){

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
  imageUploader(file){

    // Uploading to cloudinary
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

  }

  /**
   * This will upload a mp4 fil . Please use an uploader like multer or React-Dropzone for this.
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

  }

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

  }

  about(){
    return 'Clodinary direct call API .';
  }

}

module.exports = Cloudinary;
