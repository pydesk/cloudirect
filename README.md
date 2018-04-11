## Cloudirect - cloudinary direct caller for uploading files .
[![npm](https://img.shields.io/npm/v/npm.svg)]() [![npm](https://img.shields.io/npm/l/express.svg)]()
[![Build Status](https://travis-ci.org/pacifio/cloudirect.svg?branch=master)](https://travis-ci.org/pacifio/cloudirect)

## What is this thing ?
A cloudinary direct call API utility which can help you upload images , videos and audio file . More options will be added in the future along with support and examples for multiple frameworks .

The package was created to simplify the process of uploading file to cloudinary. You can upload image, video / .mp4 and audio / .mp3 files via this .

This package can even work with multiple platforms . You can use Express js in the backend and use cloudinary-direct to upload packages , requires Multer middleware . You can use React-Dropzone in the frontend .

## Install
Installing this package is very easy , it has very few dependency .
### Install with yarn .
<code> yarn add cloudinary-direct </code>
### Install with npm .
<code> npm i cloudinary-direct --save</code>

## How to use ?

It has four properties for authentication .
<code>cloudName</code> Which you can find in your cloudinary console / dashboard
<code>api_key</code> Which you can find in your cloudinary console / dashboard . For uploading file .
<code>api_secret</code> Which you can also find in your cloudinary console / dashboard . For uploading file .
<code>upload_preset</code> Which you can find in your cloudinary settings .

## Example for auth
```javascript
const Cloud = require("cloudinary-direct");
Cloud.config({
  cloudName: "your_cloudname",
  api_key: "your_api_key",
  api_secret: "your_api_secret"
})
```

## Functions
Here are the functions that will provide you the power to upload files of different types.
```javascript
// file[0] was retrieved from React DropZone , req.files fro express.js
// For image uploading
Cloud.imageUploader(file[0], (resp)=> {
  const imageURL = resp.secure_url;
  // Save that url in the database
});

// For audio / .mp3 file uploading
Cloud.audioUploader(file[0], (resp)=> {
  const audioURL = resp.secure_url;
  // Save that url in the database
})

// For video / .mp4 file uploading
Cloud.videoUploader(file[0], (resp)=> {
  const videoURL = resp.secure_url;
  // Save that url in the database
})
```

You can choose which file to upload . This package will upload your file but it can't handle http/multipart . So you need to use [React-Dropzone](https://react-dropzone.js.org) for react . The examples are shown in them . There is also a HOC -> High Order Component , you can use that as well .

## Image Uploading :

## Express js and multer:
Here is an example with express js and multer . Multer is the mostly used for uploading files and handling all the http/multipart . Here is an example express and multer with cloudinary direct :

```javascript
const express = require("express");
const multer = require("multer");
const Cloud = require("cloudinary-direct");

const app = express();

const storage = multer.diskStorage({
  destination: './userUploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
}).single('userImage');

app.post('/photo/upload', function(req, res){
  upload(req, res, function(){
    Cloud.config({
      cloudName: "your_cloudname",
      api_key: "your_api_key",
      api_secret: "your_api_secret",
      upload_preset: "your_upload_preset"
    });
    Cloud.express.uploadViaMulter(req, function(result){
      console.log(result.url);
    })
  })
})

```

## React js with react dropzone

Here is an example with React . Cloudniary direct can be used both in frontend frameworks and backend frameworks . I am using react dropzone for handling upload .

## Note that upload_preset is needed for frontend usage .

```jsx
import React from 'react';
import Cloud from 'cloudniary-direct';
import DropZone from 'react-dropzone';

class Sender extends React.Component{
  constructor(){
    super();
    this.handler = this.handler.bind(this);
  }
  handler(file){
    Cloud.config({
      cloudName: "your_cloudname",
      api_key: "your_api_key",
      api_secret: "your_api_secret",
      upload_preset: "your_upload_preset"
    })
    Cloud.imageUploader(file[0], (resp)=> {
      const imageURL = resp.secure_url;
      // Save that url in the database
    })
  }
  render(){
    return (
      <div>
        <DropZone onDrop={this.handler} />
      </div>
    )
  }
}

```

More support will come in the future . I will try to implement features like async await for more faster and better response .
