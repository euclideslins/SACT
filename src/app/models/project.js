'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    course: DataTypes.STRING,
    class: DataTypes.STRING,
    members: DataTypes.STRING,
    obs: DataTypes.TEXT
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};