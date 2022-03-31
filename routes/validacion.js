const express = require("express");
const router = express.Router();
const validacionsController = require('../controllers/validacionsController');
const validacionValidator = require("../validations/validacionValidator");
router.get('/validacion',validacionsController.getvalidacion);
router.get('/validacions', validacionsController.getvalidacions);
router.get('/validacion', validacionsController.getvalidacionBycliente);
router.post('/validacion',validacionValidator.add, validacionsController.postvalidacion);
router.put('/validacion',validacionValidator.update, validacionsController.putvalidacion);
router.delete('/validacion',validacionValidator.id, validacionsController.deletevalidacion);


module.exports = router;