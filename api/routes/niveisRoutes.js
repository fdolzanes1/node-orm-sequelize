const { Router } = require('express'); 
const router = Router();
const niveisController = require('../controllers/NiveisController');

router
  .get('/niveis', niveisController.listAll)
  .get('/niveis/:id', niveisController.listById)
  .post('/niveis', niveisController.create)
  .put('/niveis/:id', niveisController.update)
  .delete('/niveis/:id', niveisController.delete);

module.exports = router;