import database from "../connexion.js";
import { DataTypes } from 'sequelize'
//Modèle de la table departments
const Roles = database.define( 'Roles',{ 
rolesId: { type: DataTypes.INTEGER, allowNull: false },
nom: { type: DataTypes.STRING, allowNull: false }

},
{ timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
)
export default Roles