const { check, validationResult } = require('express-validator');

const generateautoValidators = () => [
    check('Marca').notEmpty().isLength({max:45}).withMessage("Invalid Marca"),
    check('ano').notEmpty().isNumeric({max:20}).withMessage("Invalid ano"),
    check('precio').notEmpty().isLength({max:30}).withMessage("Invalid precio"),
    check('descripcion').notEmpty().isLength({max:100}).withMessage("Invalid descripcion"),
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
]

const updateautoValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
    check('Marca').notEmpty().isLength({max:50}).withMessage("Invalid alias"),
    check('ano').notEmpty().isLength({max:20}).withMessage("Invalid auto"),
    check('precio').notEmpty().isLength({max:30}).withMessage("Invalid predcio"),
    check('discrepcion').notEmpty().isLength({max:100}).withMessage("Invalid discrepcion"),
]

const reporter = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({
            "success" : false,
            "code" : 404,
            "message" : errors,
            "data" : []
        });
    }
    next();
}

module.exports = {
    add:[
        generateautoValidators(),
        reporter
    ],
    id:[
        generateIdValidators(),
        reporter
    ],
    update :[
        updateautoValidators(),
        reporter
    ]
}