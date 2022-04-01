const express = require("express");
const router = express.Router();
const autosController = require('../controllers/autosController');
const autoValidator = require("../validations/autoValidator");
const jwtToken = require("../validations/jwtValidation");

router.get('/auto',jwtToken.ValidateToken, autosController.getauto);
router.get('/autos', jwtToken.ValidateToken,autosController.getautos);
router.post('/auto',autoValidator.add, autosController.postauto);
router.put('/auto',autoValidator.update, autosController.putauto);
router.delete('/auto',autoValidator.id, autosController.deleteauto);

module.exports = router;