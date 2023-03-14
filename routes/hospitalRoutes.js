//import les controlleurs
import { ListHospitals,AjouterHospitals } from "../controllers/hospitals"; 
import { Router } from "express";
//importer la fonction d'express

const router=Router()
//Definir les routes correspondants a chaque conroller
router.get('/',ListHospitals)
      .post('/',AjouterHospitals)
export default router