const developmentLogger = require("../logger/developmentLogger");

const productionLogger = require("../logger/productionLogger");

let logger = null;

if(process.env.NODE_ENV === "development"){
    logger = developmentLogger()
}

if(process.env.NODE_ENV === "production"){
    logger = productionLogger()
}

module.exports = logger;