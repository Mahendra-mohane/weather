const winston = require('winston');
require("winston-mongodb")

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'weather-app-backend' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.MongoDB({db:process.env.MONGODB_URI})
  ],
});
module.exports=logger
