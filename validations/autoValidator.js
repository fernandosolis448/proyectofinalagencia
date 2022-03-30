const { check, validationResult } = require('express-validator');

const generateautoValidators = () => [
    check('alias').notEmpty().isLength({max:50}).withMessage("Invalid alias"),
    check('type').notEmpty().isIn(['DOG','CAT']).withMessage("Invalid pet"),
    check('color').notEmpty().isLength({max:50}).withMessage("Invalid color"),
    check('notes').notEmpty().isLength({max:150}).withMessage("Invalid notes"),
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
]

const updateautoValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
    check('alias').notEmpty().isLength({max:50}).withMessage("Invalid alias"),
    check('type').notEmpty().isIn(['DOG','CAT']).withMessage("Invalid pet"),
    check('color').notEmpty().isLength({max:50}).withMessage("Invalid color"),
    check('notes').notEmpty().isLength({max:150}).withMessage("Invalid notes"),
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