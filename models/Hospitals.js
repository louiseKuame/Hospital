import database from "../connexion.js";
import { DataTypes } from 'sequelize'
//Modèle de la table departments
const Hospitals = database.define( 'Hospitaldepartements',{
hospitalsID: { type: DataTypes.INTEGER, allowNull: false }, 
nom: { type: DataTypes.STRING, allowNull: false },
address: { type: DataTypes.STRING, allowNull: false },
createdby: { type: DataTypes.INTEGER, allowNull: false }





},
{ timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
)
export default Hospitals 