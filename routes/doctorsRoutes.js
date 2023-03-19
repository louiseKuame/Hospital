const express = require('express');
const router = express.Router();

const doctorsController = require('../controllers/doctors');

// Route pour récupérer tous les médecins
router.get('/doctors', doctorsController.getDoctors);

// Route pour créer un nouveau médecin
router.post('/doctors', doctorsController.createDoctor);

// Route pour récupérer un médecin par ID
router.get('/doctors/:id', doctorsController.getDoctorById);

// Route pour mettre à jour un médecin
router.put('/doctors/:id', doctorsController.updateDoctor);

// Route pour supprimer un médecin
router.delete('/doctors/:id', doctorsController.deleteDoctor);

module.exports = router;
