require('dotenv').config();

const config = {
    MYSQL_DB_NAME: process.env.MYSQL_DB_NAME,
    MYSQL_DATABASE_URL: process.env.MYSQL_DATABASE_URL,
    MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
    MYSQL_DB_USER: process.env.MYSQL_DB_USER,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
};

module.exports = config;
