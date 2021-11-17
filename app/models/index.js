const config = require('../../config/secret');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.MYSQL_DATABASE_URL);

require('./comment')(sequelize);
(async () => {
    await sequelize.sync();
})();
module.exports = sequelize