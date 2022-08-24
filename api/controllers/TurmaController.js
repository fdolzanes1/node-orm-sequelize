const db = require('../models')

class TurmaController {
  static async listAll(req, res) {
    try {
      const listaTurmas = await db.Turmas.findAll();
      return res.status(200).json( {listaTurmas} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async listById(req, res) {
    const { id } = req.params;
    try {
      const turma = await db.Turmas.findOne({ 
        where: {
          id: Number(id)
        } 
      });
      return res.status(200).json( {turma} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async create(req, res) {
    const novaTurma = req.body;
    try {
      const turmaCriada = await db.Turmas.create(novaTurma);
      return res.status(201).json( {turmaCriada} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const turma = req.body;
    try {
      await db.Turmas.update(
        turma,{ 
          where : { 
            id: Number(id)
          }
        }
      )
      const turmaAtualizado = await db.Turmas.findOne({ 
        where: {
          id: Number(id)
        } 
      });
      return res.status(200).json({
        mensagem:"Turma Atualizada com Sucesso",
        turmaAtualizado
      });
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await db.Turmas.destroy({ 
        where : { 
          id: Number(id)
        }
      })
      return res.status(200).json({
        mensagem:"Turma Excluida com Sucesso",
      });
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }
}

module.exports = TurmaController;
