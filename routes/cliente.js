const express = require("express");
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const clienteValidator = require('../validations/clienteValidator');
const jwtToken = require("../validations/jwtValidation");

router.get('/cliente', jwtToken.ValidateToken, clientesController.getcliente);
router.get('/clientes', jwtToken.ValidateToken, clientesController.getclientes);
router.post('/cliente' , jwtToken.ValidateToken, clienteValidator.add, clientesController.postcliente);
router.post('/login', jwtToken.ValidateToken, clienteValidator.id,clientesController.getLogin);
router.put('/cliente', jwtToken.ValidateToken, clienteValidator.update, clientesController.putcliente);
router.delete('/cliente', jwtToken.ValidateToken, clienteValidator.id , clientesController.deletecliente);

module.exports = router;