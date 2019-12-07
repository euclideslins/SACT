'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    course: DataTypes.STRING,
    class: DataTypes.STRING,
    members: DataTypes.STRING,
    obs: DataTypes.TEXT
  }, {});


  Section.associate = function (models) {
    Section.belongsToMany(models.User, {
      through: 'user_projects',
      as: 'user',
      foreignKey: 'projectId'
    })
  };
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};