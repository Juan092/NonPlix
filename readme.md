# Servicio de streaming NonPlix (Documentación)

## _¿Cómo instalar los módulos necesarios?_
El proyecto está construido con las dependencias de Node.js
Al iniciaizarlo, abrir una terminal dentro del repositorio principal e ingresar:
```sh
npm install 
```

Las dependencias de nuestro archivo serán instaladas con la última versión trabajada. Una vez hecho esto, dentro del mismo repositorio:
```sh
nodemon index
```
Para correrlo.

## _Estructura del proyecto_ (En desarrollo)

## _Controllers_ (En desarrollo)
Esta misma cuenta con todos los controladores del sistema CRUD. Se enlistan cada uno de los archivos:
- peliculasController.js:
  Cuenta con la función de lectura de canciones. Ella realiza un mapeo con el método findAll() proporcionado por el archivo JSON en nuestra base de datos.

La función de "getPeliculaById", realiza una petición a nuestra instancia para mostrar la película por número ID.

```sh
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
```

Continuando con el desarrollo del CRUD, el método de "createPelicula", realiza una petición a nuestra instancia para agregar una pelicula a la base de datos. Antes, del proceso, verifica que no existan errores.

```sh
export const createPelicula = async (req, res) => {
    try {
        await Peliculas.create(req.body);
        res.status(201).json({msg: "Pelicula creada con éxito"});
    } catch (error) {
        console.log(error.message);
    }
}
```
## _FRONT-END_ (En desarrollo)