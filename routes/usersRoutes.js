//import les controlleurs
import { ListUsers,AjouterUser } from "../controllers/users.js"; 
import { Router } from "express";
//importer la fonction d'express

const router=Router()
//Definir les routes correspondants a chaque conroller
router.get('/',ListUsers)
      .post('/',AjouterUser)
export default router