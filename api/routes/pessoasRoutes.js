const { Router } = require('express'); 
const router = Router();
const pessoaController = require('../controllers/PessoaController');

router
  .get('/pessoas', pessoaController.listAll)
  .get('/pessoas/:id', pessoaController.listById)
  .get('/pessoas/:estudante_id/matricula/', pessoaController.listAllMatriculas)
  .get('/pessoas/:estudante_id/matricula/:matricula_id', pessoaController.getMatricula)
  .post('/pessoas', pessoaController.create)
  .post('/pessoas/:estudante_id/matricula/', pessoaController.createMatricula)
  .put('/pessoas/:id', pessoaController.update)
  .put('/pessoas/:estudante_id/matricula/:matricula_id', pessoaController.updateMatricula)
  .delete('/pessoas/:id', pessoaController.delete);

module.exports = router;