const { check, validationResult } = require('express-validator');

const generateclienteValidators = () => [
    check('nombre').notEmpty().isLength({max:34}).withMessage("Invalid nombre"),
    check('primer apellido').notEmpty().isLength({max:50}).withMessage("Invalid primer apellido"),
    check('segundo apellido').notEmpty().isLength({max:50}).withMessage("Invalid segundo apellido"),
    check('direccion').notEmpty().isLength({max:150}).withMessage("Invalid direccion"),
    check('edad').notEmpty().isNumeric({max:150}).withMessage("Invalid edad"),
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
]

const updateclienteValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
    check('nombre').notEmpty().isLength({max:34}).withMessage("Invalid nombre"),
    check('primer apellido').notEmpty().isLength({max:50}).withMessage("Invalid primer apellido"),
    check('segundo apellido').notEmpty().isLength({max:50}).withMessage("Invalid segundo apellido"),
    check('direccion').notEmpty().isLength({max:150}).withMessage("Invalid direccion"),
    check('edad').notEmpty().isNumeric({max:150}).withMessage("Invalid edad"),
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
        generateclienteValidators(),
        reporter
    ],
    id:[
        generateIdValidators(),
        reporter
    ],
    update :[
        updateclienteValidators(),
        reporter
    ]
}