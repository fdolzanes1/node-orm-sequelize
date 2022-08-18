const { Router } = require('express'); 
const router = Router();
const pessoaController = require('../controllers/PessoaController');

router.get('/pessoas', pessoaController.listAll);
router.get('/pessoas/:id', pessoaController.listById);

module.exports = router;