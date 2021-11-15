const config = require('./secret');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.MYSQL_DATABASE_URL);
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

(async () => {
    await sequelize.sync({ force: true });
})();
module.export = sequelize;