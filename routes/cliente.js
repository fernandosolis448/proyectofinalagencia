const express = require("express");
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const clienteValidator = require('../validations/clienteValidator');
const jwtToken = require("../validations/jwtValidation");

router.get('/cliente', jwtToken.ValidateToken, clientesController.getcliente);
router.get('/clientes', jwtToken.ValidateToken, clientesController.getclientes);
router.post('/cliente' , clienteValidator.add, clientesController.postcliente);
router.post('/login',  clienteValidator.id,clientesController.getLogin);
router.put('/cliente', clienteValidator.update, clientesController.putcliente);
router.delete('/cliente', clienteValidator.id , clientesController.deletecliente);

module.exports = router;