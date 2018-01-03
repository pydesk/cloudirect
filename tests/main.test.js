const assert = require('chai').assert;
const Cloudinary = require('../build/index');

describe('App', ()=> {
  it('should not raise Error', ()=> {
    const app = new Cloudinary('test', '12345', '12345', 'test');
  })
});
