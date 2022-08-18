const { Router } = require('express'); 
const router = Router();
const pessoaController = require('../controllers/PessoaController');

router.get('/pessoas', pessoaController.listAll);
router.get('/pessoas/:id', pessoaController.listById);
router.post('/pessoas', pessoaController.create);
router.put('/pessoas/:id', pessoaController.update);
router.delete('/pessoas/:id', pessoaController.delete);

module.exports = router;