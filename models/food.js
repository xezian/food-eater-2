'use strict';
module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    food_name: DataTypes.STRING,
    eaten: DataTypes.BOOLEAN,
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