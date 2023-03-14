import Users from "../models/Users.js";


//la liste de tous les utilisateurs
export const ListUsers=async(req,res)=>{
    try {
        const result = await Users.findAll()
        res.status(200).json({ data: result })
        } catch (error) {
        res.status(404).json({ message: error.message })
        }
        
}
export const AjouterUser=async(req,res)=>{
    //recuperer les infos provenant de la forme de l'utilisateur
    const{ usersID,nom,prenom,photo,telephone,email,mot_de_pass}=req.body
//creer un objet utilisateur a inserer dans la table users
const nouvelUser= { usersID,nom,prenom,photo,telephone,email,mot_de_pass}

try {
    //insersion du nouvel utilisateur
    const resultat=await Users.create(nouvelUser)
    res.status(200).json({message:'Utilisateur ajoute avec succes '})
console.log("reslutat de l<ajout",resultat);

} catch (error) {
    res.status(400).json({message: error.message})
}

}
