## Cloudirect
[![npm](https://img.shields.io/npm/v/npm.svg)]() [![npm](https://img.shields.io/npm/l/express.svg)]()
[![Build Status](https://travis-ci.org/pacifio/cloudirect.svg?branch=master)](https://travis-ci.org/pacifio/cloudirect)

## What is this thing ?
A cloudinary direct call API utility which can help you upload images , videos and audio file .

The package was created to simplify the process of uploading file to cloudinary. You can upload image, video / .mp4 and audio / .mp3 files via this .

This package can even work with multiple platforms . You can use Express js in the backend and use cloudinary-direct to upload packages , requires Multer middleware . You can use React-Dropzone in the frontend .

## Install
Installing this package is very easy because the package has very few dependency .
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
const Cloud = require('cloudniary-direct');
Cloud.cloudName = "your_cloud_name_from_cloudinary";
Cloud.api_key = "your_api_key_from_cloudinary";
Cloud.api_secret = "your_api_secret_from_cloudinary";
Cloud.upload_preset = "your_upload_preset_from_cloudinary";
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
Here is an example with React . We will show how to upload an Image .
#### Don't mind the highlighting . JSX highlighting is in beta . I think .
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
    Cloud.cloudName = "your_cloud_name_from_cloudinary";
    Cloud.api_key = "your_api_key_from_cloudinary";
    Cloud.api_secret = "your_api_secret_from_cloudinary";
    Cloud.upload_preset = "your_upload_preset_from_cloudinary";
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
## For audio files :
For uploading audio files with react-dropzone , use this :
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
    Cloud.cloudName = "your_cloud_name_from_cloudinary";
    Cloud.api_key = "your_api_key_from_cloudinary";
    Cloud.api_secret = "your_api_secret_from_cloudinary";
    Cloud.upload_preset = "your_upload_preset_from_cloudinary";
    Cloud.audioUploader(file[0], (resp)=> {
      const audioURL = resp.secure_url;
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

## Uploading videos :
Same here . Just change with 'videoUploader' function :
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
    Cloud.cloudName = "your_cloud_name_from_cloudinary";
    Cloud.api_key = "your_api_key_from_cloudinary";
    Cloud.api_secret = "your_api_secret_from_cloudinary";
    Cloud.upload_preset = "your_upload_preset_from_cloudinary";
    Cloud.videoUploader(file[0], (resp)=> {
      const videoURL = resp.secure_url;
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
