'use strict';
module.exports = (sequelize, DataTypes) => {
    const ProjectCriteria = sequelize.define('ProjectCriteria', {
        rate: DataTypes.DOUBLE,
    }, {
        freezeTableName: true
    });

    ProjectCriteria.associate = function (models) {

    };
    return ProjectCriteria;
};