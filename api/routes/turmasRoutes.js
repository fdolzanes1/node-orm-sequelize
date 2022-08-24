const { Router } = require('express'); 
const router = Router();
const turmaController = require('../controllers/TurmaController');

router
  .get('/turmas', turmaController.listAll)
  .get('/turmas/:id', turmaController.listById)
  .post('/turmas', turmaController.create)
  .put('/turmas/:id', turmaController.update)
  .delete('/turmas/:id', turmaController.delete);

module.exports = router;