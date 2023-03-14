//import les controlleurs
import { ListHospitalsDepartements,AjouterHospitalsDepartements } from "../controllers/hospitalsdepartements.js"; 
import { Router } from "express";
//importer la fonction d'express

const router=Router()
//Definir les routes correspondants a chaque conroller
router.get('/',ListHospitalsDepartements)
      .post('/',AjouterHospitalsDepartements)
export default router