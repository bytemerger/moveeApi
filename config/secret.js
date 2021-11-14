require('dotenv').config();

const config = {
    MYSQL_DB_NAME: process.env.MYSQL_DB_NAME,
    MYSQL_DATABASE_URL: process.env.MYSQL_DATABASE_URL,
    MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
    MYSQL_DB_USER: process.env.MYSQL_DB_USER,
};

export default config;
