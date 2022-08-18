const { Router } = require('express'); 
const router = Router();
const pessoaController = require('../controllers/PessoaController');

router.get('/pessoas', pessoaController.listAll);

module.exports = router;