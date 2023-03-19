const Departements = require('../models/departements');

// Créer un nouveau département
exports.createDepartement = async (req, res) => {
    try {
        const { nom, createdby } = req.body;
        const departement = await Departements.create({
            nom,
            createdby,
        });
        res.status(201).json(departement);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

// Récupérer tous les départements
exports.getDepartements = async (req, res) => {
    try {
        const departements = await Departements.findAll();
        res.status(200).json(departements);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

// Récupérer un département par ID
exports.getDepartementById = async (req, res) => {
    try {
        const departement = await Departements.findByPk(req.params.id);
        if (!departement) {
            return res.status(404).send('Département introuvable');
        }
        res.status(200).json(departement);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

// Mettre à jour un département
exports.updateDepartement = async (req, res) => {
    try {
        const { nom, createdby } = req.body;
        const departement = await Departements.findByPk(req.params.id);
        if (!departement) {
            return res.status(404).send('Département introuvable');
        }
        await departement.update({
            nom,
            createdby,
        });
        res.status(200).json(departement);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

// Supprimer un département
exports.deleteDepartement = async (req, res) => {
    try {
        const departement = await Departements.findByPk(req.params.id);
        if (!departement) {
            return res.status(404).send('Département introuvable');
        }
        await departement.destroy();
        res.status(200).json({ message: 'Département supprimé avec succès' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};
