const express = require('express');
const router = express.Router();
const { Doctors } = require('../models');

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctors.findAll();
        res.json(doctors);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Creer un nouveau docteur
router.post('/', async (req, res) => {
    try {
        const doctor = await Doctors.create(req.body);
        res.json(doctor);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Get docteurr par ID
router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctors.findByPk(req.params.id);
        if (doctor) {
            res.json(doctor);
        } else {
            res.status(404).send('Doctor not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Mettre a jour un doctor specifique par ID
router.put('/:id', async (req, res) => {
    try {
        const [numRowsUpdated, [updatedDoctor]] = await Doctors.update(req.body, {
            where: { doctorsID: req.params.id },
            returning: true,
        });
        if (numRowsUpdated) {
            res.json(updatedDoctor);
        } else {
            res.status(404).send('Doctor not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// supprimer un doctor par ID
router.delete('/:id', async (req, res) => {
    try {
        const numRowsDeleted = await Doctors.destroy({
            where: { doctorsID: req.params.id },
        });
        if (numRowsDeleted) {
            res.send('Doctor deleted successfully');
        } else {
            res.status(404).send('Doctor not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

