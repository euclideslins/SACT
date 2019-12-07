'use strict';
module.exports = (sequelize, DataTypes) => {
  const Criterion = sequelize.define('Criterion', {
    name: DataTypes.STRING,
    rate: DataTypes.DOUBLE
  }, {});
  Criterion.associate = function(models) {
    // associations can be defined here
  };
  return Criterion;
};