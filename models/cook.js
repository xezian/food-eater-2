'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cook = sequelize.define('Cook', {
    cook_name: DataTypes.STRING
  }, {});
  Cook.associate = function(models) {
    Cook.hasMany(models.Food, {
      onDelete: "cascade"
    });
  };
  return Cook;
};