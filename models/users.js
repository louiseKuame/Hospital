import database from "../connexion.js";
import { DataTypes } from 'sequelize'
//Modèle de la table departments
const Users = database.define( 'Users',{ 
usersID: { type: DataTypes.INTEGER, allowNull: false },
nom: { type: DataTypes.STRING, allowNull: false },
prenom: { type: DataTypes.STRING, allowNull: false },
photo: { type: DataTypes.STRING, allowNull: false },
telephone: { type: DataTypes.STRING, allowNull: false },
email: { type: DataTypes.STRING, allowNull: false },
mot_de_pass: { type: DataTypes.STRING, allowNull: false },
rolesID: { type: DataTypes.INTEGER, allowNull: false }



},
{ timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
)
export default Users