const Sequelize = require('sequelize');

const { Criterion } = require('../models');

module.exports = {
    index(req, res) {
        Criterion.findAll()
            .then(criteria => res.json(criteria))
            .catch(err => res.status(500).send({ "error": err }));
    },
    store(req, res) {
        const criterion = { ...req.body };

        Criterion.create(criterion)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send({ "error": err }));

    },
    show(req, res) {

    },
    update(req, res) {

    },
    delete(req, res) {

    }
}