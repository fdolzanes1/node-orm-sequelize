const { Router } = require('express'); 
const router = Router();
const pessoaController = require('../controllers/PessoaController');

router
  .get('/pessoas', pessoaController.listAll)
  .get('/pessoas/:id', pessoaController.listById)
  .post('/pessoas', pessoaController.create)
  .put('/pessoas/:id', pessoaController.update)
  .delete('/pessoas/:id', pessoaController.delete);

module.exports = router;