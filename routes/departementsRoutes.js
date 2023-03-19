const express = require('express');
const router = express.Router();

const departementsController = require('../controllers/departements');

// Route pour créer un nouveau département
router.post('/departements', departementsController.createDepartement);

// Route pour récupérer tous les départements
router.get('/departements', departementsController.getDepartements);

// Route pour récupérer un département par ID
router.get('/departements/:id', departementsController.getDepartementById);

// Route pour mettre à jour un département
router.put('/departements/:id', departementsController.updateDepartement);

// Route pour supprimer un département
router.delete('/departements/:id', departementsController.deleteDepartement);

module.exports = router;
