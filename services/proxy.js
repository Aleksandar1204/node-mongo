const express = require('express');
const proxy = require('http-proxy');

var api = express();
var apiProxy = proxy.createProxyServer();

api.all('/api/v1/auth/*', (req, res) =>{
    apiProxy.web(req, res, {targer: 'http://localhost:8081'});

});

api.all('/api/v1/files/*', (req, res) =>{
    apiProxy.web(req, res, {targer: 'http://localhost:8083'});

});

api.all('/api/v1/filmovi/*', (req, res) =>{
    apiProxy.web(req, res, {targer: 'http://localhost:8080'});

});

api.all('/*', (req,res)=>{
    res.status(404).send('Not Found!')
});

api.listen(proces.env.PORT, err =>{
    if(err){
        console.log('could not start server');
        console.log(err);
        return;
    }
    console.log('server started successfully on port');
});