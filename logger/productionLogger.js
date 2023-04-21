
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;


const myFormat = printf(({ level, message, timestamp }) => {
    return `[${level}] ${timestamp} ${message}`;
});

const productionLogger = () =>{

    return createLogger({
        level: 'info',
        format: combine(timestamp({format: "DD-MM-YYYY HH:mm:ss"}),myFormat),
        transports: [
            new transports.Console(),
            new transports.File({filename:"myLogs.log"})
        ],
    });


}

module.exports = productionLogger;