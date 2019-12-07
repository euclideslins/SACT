'use strict';
module.exports = (sequelize, DataTypes) => {
  const Criterion = sequelize.define('Criterion', {
    name: DataTypes.STRING,
    rate: DataTypes.DOUBLE
  }, {});
  Criterion.associate = function (models) {
    Criterion.belongsToMany(models.Section, {
      through: 'SectionCriteria',
      as: 'sections',
      foreignKey: 'CriterionId'
    })
  };
  return Criterion;
};