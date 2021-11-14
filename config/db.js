const config = require('./secret');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.MYSQL_DATABASE_URL);

await sequelize.sync({ force: true });
export default sequelize;