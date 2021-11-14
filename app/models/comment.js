const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Comment = sequelize.define('Comment', {
    // Model attributes are defined here
    IP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commenter: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: true,
    updatedAt:false
  });

  export default Comment