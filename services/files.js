const express = require('express');
const config = require('../config/index.js');
const files = require('../handlers/files');
const fileupload = require('express-fileupload');
var jwt = require('express-jwt');
var api = express();


api.use(
    jwt(
        {secret: config.getConfig('jwt').key}
    )
)

api.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

api.post('/api/v1/upload/', files.UploadFile);
api.get('/api/v1/upload/:filename', files.DownloadFile);

api.listen(8083, err =>{
    if(err){
        console.log('could not start server');
        console.log(err);
        return;
    }
    console.log('server started successfully on port 8083');
});