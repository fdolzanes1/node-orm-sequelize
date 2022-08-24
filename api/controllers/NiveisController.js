const db = require('../models')

class NiveisController {
  static async listAll(req, res) {
    try {
      const listaNiveis = await db.Niveis.findAll();
      return res.status(200).json( {listaNiveis} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async listById(req, res) {
    const { id } = req.params;
    try {
      const nivel = await db.Niveis.findOne({ 
        where: {
          id: Number(id)
        } 
      });
      return res.status(200).json( {nivel} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async create(req, res) {
    const novoNiveis = req.body;
    try {
      const nivelCriado = await db.Niveis.create(novoNiveis);
      return res.status(201).json( {nivelCriado} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const nivel = req.body;
    try {
      await db.Niveis.update(
        nivel,{ 
          where : { 
            id: Number(id)
          }
        }
      )
      const nivelAtualizado = await db.Niveis.findOne({ 
        where: {
          id: Number(id)
        } 
      });
      return res.status(200).json({
        mensagem:"Nivel Atualizada com Sucesso",
        nivelAtualizado
      });
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await db.Niveis.destroy({ 
        where : { 
          id: Number(id)
        }
      })
      return res.status(200).json({
        mensagem:"Nivel Excluida com Sucesso",
      });
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

}

module.exports = NiveisController;