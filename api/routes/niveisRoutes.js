const { Router } = require('express'); 
const router = Router();
const niveisController = require('../controllers/NiveisController');

router.get('/niveis', niveisController.listAll);
router.get('/niveis/:id', niveisController.listById);
router.post('/niveis', niveisController.create);

module.exports = router;