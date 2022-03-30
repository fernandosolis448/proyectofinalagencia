const express = require("express");
const router = express.Router();
const validacionsController = require('../controllers/adoptionsController');
const adoptionValidator = require("../validations/adoptionValidator");
router.get('/validacion',validacionValidator.id, validacionsController.getvalidacion);
router.get('/validacions', validacionsController.getvalidacions);
router.post('/validacion',validacionValidator.add, validacionsController.postvalidacion);
router.put('/validacion',validacionValidator.update, validacionsController.putvalidacion);
router.delete('/validacion',validacionValidator.id, validacionsController.deletevalidacion);
router.get('/validacion', validacionsController.getvalidacionByUser);

module.exports = router;