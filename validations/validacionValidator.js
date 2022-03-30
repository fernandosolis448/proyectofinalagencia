const { check, validationResult } = require('express-validator');

const generatevalidacionValidators = () => [
    check('user_id').notEmpty().isNumeric().withMessage("Invalid user_id"),
    check('pet_id').notEmpty().isNumeric().withMessage("Invalid pet_id"),
    check('date').notEmpty().isDate().withMessage("invalid date")
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
]

const updatevalidacionValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
    check('user_id').notEmpty().isNumeric().withMessage("Invalid id"),
    check('pet_id').notEmpty().isNumeric().withMessage("Invalid id"),
    check('date').notEmpty().withMessage(" date").isDate().withMessage("invalid date")
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