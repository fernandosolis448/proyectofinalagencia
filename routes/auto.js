const express = require("express");
const router = express.Router();
const autosController = require('../controllers/autosController');
const autoValidator = require("../validations/autoValidator");
router.get('/auto',autosController.getauto);
router.get('/autos', autosController.getautos);
router.post('/auto',autoValidator.add, autosController.postauto);
router.put('/auto',autoValidator.update, autosController.putauto);
router.delete('/auto',autoValidator.id, autosController.deleteauto);

module.exports = router;