'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
      food_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: {
                  args: [1, 140],
                  msg: "not a good length dude"
              }
          },
      },
      eaten: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
      },
  });
  Food.associate = function(models) {
    // associations can be defined here
  };
  return Food;
};