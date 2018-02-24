'use strict';
module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // allows a string length of no less than 2, no more than 100
        len: [2, 100]
      },
    },
    cook_name: DataTypes.STRING,
    eaten: {
      type: DataTypes.BOOLEAN,
      default: false,
    }
  }, {});
  Food.associate = function(models) {
    Food.belongsTo(models.Cook, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Food;
};