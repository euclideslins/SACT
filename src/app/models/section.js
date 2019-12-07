'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    name: DataTypes.STRING
  }, {});
  Section.associate = function (models) {
    Section.belongsToMany(models.Criterion, {
      through: 'SectionCriteria',
      as: 'criteria',
      foreignKey: 'SectionId'
    })
  };
  return Section;
};