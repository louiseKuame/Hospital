//import les controlleurs
import { ListRoles, AjouterRoles } from "../controllers/roles.js";
import { Router } from "express";
//importer la fonction d'express

const router = Router()
//Definir les routes correspondants a chaque controller
router.get('/', ListRoles)
    .post('/', AjouterRoles)
export default router