const User = require("../models");
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
            console.log("funfou man");
        } catch (error) {
            return res.status(500).send(error);
        }
        User.findOne()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err));
    },

    async show(req, res) {
        let checkId = false;
        const userData = req.params.data;

        if (!isNaN(userData)) checkId = true;

        if (checkId) {
            User.findOne({
                where: { id: userData }
            })
                .then(user => res.json(user))
                .catch(err => res.status(500).send(err));
        }
        else {
            User.findAll({
                where: {
                    nome: { [Operation.like]: `%${userData}%` }
                }
            })
                .then(users => res.json(users))
                .catch(err => res.status(500).send(err));
        }
    },
    async update(req, res) {
        const userId = req.params.data;
        const user = { ...req.body };

        try {
            let resultFromDB = await User.findAll({
                where: {
                    nome: user.name
                }
            });
        } catch (error) {
            return res.status(400).send(error);
        }

        User.findOne({
            where: {
                id: userId
            }
        }).then(resultFromDB => {
            if (resultFromDB) {
                resultFromDB.update({
                    ...user,
                })
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(500).send(err));
            }
        })

    },

    async delete(req, res) {
        const userId = req.params.data;

        try {
            const resultFromDB = await User.findOne({
                where: {
                    id: userId
                }
            })


        } catch (error) {
            return res.status(500).send(error);
        }

        User.destroy({
            where: { id: userId }
        })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err));
    }



}