const {body} = requiere('express-validator');

const peliculaValidation = [
    body('titulo')
        .notEmpty()
        .withMessage('El titulo es obligatorio'),
    body('autor')
        .notEmpty()
        .withMessage('El autor es obligatorio'),
    body('año')
        .notEmpty()
        .withMessage('El año es obligatorio')
        .isLength({min: 4})
        .withMessage('El año debe tener 4 caracteres')
        .isNumeric()
        .withMessage('El año debe ser numérico'),
    body('fotoPortada')
        .notEmpty()
        .withMessage('Debes poner un link para la portada'),
    body('duracion')
        .notEmpty()
        .withMessage('La duración es obligatoria'),
]

module.exports = peliculaValidation;