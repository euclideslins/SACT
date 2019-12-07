const Project = require("../models")
const Sequelize = require('sequelize');
const Operation = Sequelize.Op;


module.exports = {
    Index(req, res){
        Project.findAll()
        .then(projects => res.json(projects))
        .catch(err => res.status(500).send(err))
    },


    store(req, res){
        try {
            console.log("funfou");
        } catch (error) {
            return res.status(400).send(error);
        }
        Project.create(projects)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err));
    },

    delete(req, res){
        const projectId = req.params.data;
        try {
            const result = Project.findOne({
                where: {
                    id:projectId
                }
            })
        } catch (error) {
            return res.status(500).send(error);        
        }

        Project.destroy({
            where:{
                id:projectId    
          }
        })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err));

    },



    async update(req, res){
        const project = {... req.body};
        const projectId = req.params.data;

        try {
            let result = await Project.findAll({
                where: {
                    nome: Project.name
                }
            });
        } catch (error) {
            
        }

        Project.findOne({
            where: {
                id: projectId
            }
        }).then(result => {
            if (result) {
                result.update({
                    ...project,
                })
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(500).send(err));
            }
        })
    },


    show(req,res){
        let checkId = false;
        const projectData = req.params.data;

        if (!isNaN(projectData)) checkId = true;

        if (checkId) {
            City.findOne({
                where: { id: projectData }
            })
                .then(project => res.json(project))
                .catch(err => res.status(500).send(err));
        }
        else {
            Project.findAll({
                where: {
                    nome: { [Operation.like]: `%${projectData}%` }
                }
            })
                .then(projects => res.json(projects))
                .catch(err => res.status(500).send(err));
        }
    }

}