const { Router } = require('express'); 
const router = Router();
const pessoaController = require('../controllers/PessoaController');

router
  .get('/pessoas', pessoaController.listAll)
  .get('/pessoas/:id', pessoaController.listById)
  .get('/pessoas/:estudante_id/matricula/:matricula_id', pessoaController.getMatricula)
  .post('/pessoas', pessoaController.create)
  .put('/pessoas/:id', pessoaController.update)
  .delete('/pessoas/:id', pessoaController.delete);

module.exports = router;