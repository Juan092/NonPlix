import {Sequelize} from 'sequelize';
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Peliculas = db.define('peliculas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    autor: {
        type: DataTypes.STRING,
    },

    duracion: {
        type:DataTypes.INTEGER,
    },

    año: {
        type: DataTypes.INTEGER,
    },

    fotoportada: {
        type: DataTypes.STRING,
    },
})

export default Peliculas;

(async() => {
    await db.sync();
}) ();
