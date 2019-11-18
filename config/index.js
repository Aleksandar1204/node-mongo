const fs = require('fs')

var conf = null;
const configFile = './config.json'

const getConfig = (section) =>{
    if(conf == null){
        if(fs.existsSync(configFile)){
        var json = fs.readFileSync(configFile);
        conf = JSON.parse(json);
        }else {
            console.error('could not find config file!');
        }
    }
    return conf[section];
}

module.exports = {
    getConfig
}