import Roles from "../models/Roles.js";


//la liste de tous les roles
export const ListRoles=async(req,res)=>{
    try {
        const result = await Roles.findAll()
        res.status(200).json({ data: result })
        } catch (error) {
        res.status(404).json({ message: error.message })
        }
        
}
export const AjouterRoles=async(req,res)=>{
    //recuperer les infos provenant de la forme du role
    const{ rolesID, nom}=req.body
//creer un objet role a inserer dans la table Roles
const nouvelRole= {rolesID, nom }

try {
    //insersion du nouveau role
    const resultat=await Roles.create(nouvelRole)
    res.status(200).json({message:'Role ajoute avec succes '})
console.log("reslutat de l<ajout",resultat);

} catch (error) {
    res.status(400).json({message: error.message})
}

}
