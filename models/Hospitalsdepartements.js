import database from "../connexion.js";
import { DataTypes } from 'sequelize'
//Modèle de la table departments
const Hospitalsdepartements = database.define( 'Hospitaldepartements',{ 
departementsID: { type: DataTypes.INTEGER, allowNull: false },
hospitalsID: { type: DataTypes.INTEGER, allowNull: false },
price: { type: DataTypes.INTEGER, allowNull: false }




},
{ timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
)
export default Hospitalsdepartements 