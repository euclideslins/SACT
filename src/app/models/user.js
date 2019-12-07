'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    occupationArea: DataTypes.STRING,
    evaluatedPrjs: DataTypes.STRING,
    institution: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});


  Section.associate = function (models) {
    Section.belongsToMany(models.Project, {
      through: 'user_projects',
      as: 'projects',
      foreignKey: 'userId'
    })
  };


  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};