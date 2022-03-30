const { check, validationResult } = require('express-validator');

const generateclienteValidators = () => [
    check('name').notEmpty().isLength({max:50}).withMessage("Invalid name"),
    check('lastname').notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').notEmpty().isLength({min:10, max:50}).isNumeric().withMessage("Invalid phone (10 numbers)"),
    check('address').notEmpty().isLength({max:150}).withMessage("Invalid address"),
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
]

const updateclienteValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id"),
    check('name').notEmpty().isLength({max:50}).withMessage("Invalid name"),
    check('lastname').notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').notEmpty().isLength({min:10, max:50}).isNumeric().withMessage("Invalid phone (10 numbers)"),
    check('address').notEmpty().isLength({max:150}).withMessage("Invalid address"),
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