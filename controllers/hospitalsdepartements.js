import Hospitalsdepartements from "../models/Hospitalsdepartements.js";


//la liste de tous les HospitalsDepartements
export const ListHospitalsDepartements=async(req,res)=>{
    try {
        const result = await Hospitalsdepartements.findAll()
        res.status(200).json({ data: result })
        } catch (error) {
        res.status(404).json({ message: error.message })
        }
        
}
export const AjouterHospitalsDepartements=async(req,res)=>{
    //recuperer les infos provenant de la forme du HospitalsDepartements
    const{ departementsID,hospitalsID, price}=req.body
//creer un objet role a inserer dans la table HospitalsDepartements
const nouvelHospitalsDepartement= {departementsID,hospitalsID, price }

try {
    //insersion du nouveau HospitalsDepartements
    const resultat=await HospitalsDepartements.create(nouvelHospitalsDepartement)
    res.status(200).json({message:'HospitalsDepartement ajoute avec succes '})
console.log("reslutat de l<ajout",resultat);

} catch (error) {
    res.status(400).json({message: error.message})
}

}
