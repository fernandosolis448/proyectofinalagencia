const { check, validationResult } = require('express-validator');

const generatevalidacionValidators = () => [
    check('cliente_id').notEmpty().isNumeric().withMessage("Invalid cliente_id"),
    check('auto_id').notEmpty().isNumeric().withMessage("Invalid auto_id"),
    check('date').notEmpty().isDate().withMessage("invalid fecha")
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
]

const updatevalidacionValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
    check('cliente_id').notEmpty().isNumeric().withMessage("Invalid cliente_id"),
    check('auto_id').notEmpty().isNumeric().withMessage("Invalid auto_id"),
    check('date').notEmpty().isDate("date").withMessage("invalid fecha")
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
        generatevalidacionValidators(),
        reporter
    ],
    id:[
        generateIdValidators(),
        reporter
    ],
    update :[
        updatevalidacionValidators(),
        reporter
    ]
}