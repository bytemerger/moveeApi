const config = require('../../config/secret');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.MYSQL_DATABASE_URL);

(async () => {
    await sequelize.sync({ force: true });
})();
require('./comment')(sequelize);
module.exports = sequelize