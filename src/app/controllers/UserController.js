const { User, Project } = require('../models');
const Sequelize = require('sequelize');
const Operation = Sequelize.Op;

module.exports = {

    Index(req,res){
        User.findAll()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err));
    },

    store(req, res){
        try {
            const { project, ...data } = req.body;

            const user = await User.create(data);

            if (project && project.length > 0) {
                user.setProject(project);
            }

            return res.status(200).send({ user });

        } catch (err) {
            return res.status(500).send({ "error": err });
        }
    },

    show(req, res) {
        User.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Project,
                    as: 'project',
                    through: { attributes: [] }
                }
            ]
        })
            .then(user => res.json(user))
            .catch(err => res.status(500).send({ "error": err }));
    },

    async update(req, res) {
        const { id } = req.params;

        try {
            const { project, ...data } = req.body;

            user = await User.findOne({
                where: {
                    id
                }
            })
            
            user.update(data);

            if (project && project.length > 0) {
                user.setProject(project);
            }
            return res.status(204).send();

        } catch (err) {
            return res.status(500).send({ "error": err });
        }
    },

    async delete(req, res) {
        const {id} = req.params.data;

        User.destroy({
            where: { id }
        })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err));
    }



}