'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cook = sequelize.define('Cook', {
    cook_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 15]
      }
    },
  }, {});
  Cook.associate = function(models) {
    Cook.hasMany(models.Food, {
      // this should make a deletion cleaner down the line, but I have not added any option to delete
      onDelete: "cascade"
    });
  };
  return Cook;
};