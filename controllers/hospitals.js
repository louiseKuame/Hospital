import Hospitals from "../models/Hospitals.js";


//la liste de tous les Hospitals
export const ListHospitals=async(req,res)=>{
    try {
        const result = await Hospitals.findAll()
        res.status(200).json({ data: result })
        } catch (error) {
        res.status(404).json({ message: error.message })
        }
        
}
export const AjouterHospitals=async(req,res)=>{
    //recuperer les infos provenant de la forme du Hospitals
    const{hospitalsID, nom, address, createdby}=req.body
//creer un objet role a inserer dans la table Hospitals
const nouvelHospitals= {hospitalsID, nom, address, createdby }

try {
    //insersion du nouveau Hospitals
    const resultat=await Hospitals.create(nouvelHospitals)
    res.status(200).json({message:'Hospitals ajoute avec succes '})
console.log("reslutat de l<ajout",resultat);

} catch (error) {
    res.status(400).json({message: error.message})
}

}