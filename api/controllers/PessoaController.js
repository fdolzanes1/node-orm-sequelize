const db = require('../models')

class PessoaController {
  static async listAll(req, res) {
    try {
      const listaPessoas = await db.Pessoas.findAll();
      return res.status(200).json( {listaPessoas} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }
}

module.exports = PessoaController;
