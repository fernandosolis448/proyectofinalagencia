const express = require("express");
const router = express.Router();
const validacionsController = require('../controllers/validacionsController');
const validacionValidator = require("../validations/validacionValidator");
router.get('/validacion',validacionValidator.id, validacionsController.getvalidacion);
router.get('/validacions', validacionsController.getvalidacions);
router.post('/validacion',validacionValidator.add, validacionsController.postvalidacion);
router.put('/validacion',validacionValidator.update, validacionsController.putvalidacion);
router.delete('/validacion',validacionValidator.id, validacionsController.deletevalidacion);
router.get('/validacion', validacionsController.getvalidacionBycliente);

module.exports = router;