import Peliculas from "../src/database/models/pelicula.js";

export const getPeliculas = async (req, res) =>
{
    try{
        const response = await Peliculas.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPeliculaById = async (req, res) =>
{
    try{
        const response = await Peliculas.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPelicula = async (req, res) => {
    try {
        await Peliculas.create(req.body);
        res.status(201).json({msg: "Pelicula creada con éxito"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePelicula = async (req, res) => {
    try {
        await Peliculas.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Película actualizada con éxito"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePelicula = async (req, res) => {
    try {
        await Peliculas.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Película eliminada con éxito"});
    } catch (error) {
        console.log(error.message);
    }
}
