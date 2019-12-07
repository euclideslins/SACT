const { Project } = require("../models")
const Sequelize = require('sequelize');
const Operation = Sequelize.Op;


module.exports = {
    Index(req, res) {
        Project.findAll()
            .then(projects => res.json(projects))
            .catch(err => res.status(500).send({ "error": err }));
    },


    store(req, res) {
        const project = { ...req.body };

        Project.create(project)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send({ "error": err }));

    },

    delete(req, res) {
        const { id } = req.params;

        Project.destroy({
            where: {
                id
            }
        })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err));

    },



    async update(req, res) {
        const { id } = req.params;

        try {
            const { ...data } = req.body;

            project = await Project.findOne({
                where: {
                    id
                }
            })
            
            project.update(data);

            return res.status(204).send();

        } catch (err) {
            return res.status(500).send({ "error": err });
        }
    },


    show(req, res) {
        let checkId = false;
        const {id} = req.params;

        if (!isNaN(id)) checkId = true;

        if (checkId) {
            Project.findOne({
                where: { id }
            })
                .then(project => res.json(project))
                .catch(err => res.status(500).send(err));
        }
        else {
            Project.findAll({
                where: {
                    name: { [Operation.like]: `%${id}%` }
                }
            })
                .then(projects => res.json(projects))
                .catch(err => res.status(500).send(err));
        }
    }

}