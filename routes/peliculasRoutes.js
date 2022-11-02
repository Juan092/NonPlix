import express from 'express';
import {getPeliculas, getPeliculaById, createPelicula, deletePelicula, updatePelicula} from "../controllers/peliculasController.js";

const router = express.Router();

router.get('/peliculas', getPeliculas);
router.get('/peliculas/:id', getPeliculaById);
router.post('/peliculas', createPelicula);
router.patch('/peliculas/:id', updatePelicula);
router.delete('/peliculas/:id', deletePelicula);

export default router;