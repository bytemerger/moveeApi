const redis = require("redis");
const promisify = require('util').promisify;
const config = require('./secret');
const Sequelize = require('sequelize');

const client = redis.createClient({
  host: config.REDIS_HOST,
  port: config.REDIS_PORT
});
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


const sequelize = new Sequelize(config.MYSQL_DATABASE_URL);
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/* (async () => {
    await sequelize.sync({ force: true });
})(); */
module.exports = {
  sequelize,
  getAsync,
  setAsync
};