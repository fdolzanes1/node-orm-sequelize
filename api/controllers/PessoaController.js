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

  static async listById(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await db.Pessoas.findOne({ 
        where: {
          id: Number(id)
        } 
      });
      return res.status(200).json( {pessoa} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async create(req, res) {
    const novaPessoa = req.body;
    try {
      const pessoaCriada = await db.Pessoas.create(novaPessoa);
      return res.status(201).json( {pessoaCriada} );
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const pessoa = req.body;
    try {
      await db.Pessoas.update(
        pessoa,{ 
          where : { 
            id: Number(id)
          }
        }
      )
      const pessoaAtualizado = await db.Pessoas.findOne({ 
        where: {
          id: Number(id)
        } 
      });
      return res.status(200).json({
        mensagem:"Pessoa Atualizada com Sucesso",
        pessoaAtualizado
      });
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await db.Pessoas.destroy({ 
        where : { 
          id: Number(id)
        }
      })
      return res.status(200).json({
        mensagem:"Pessoa Excluida com Sucesso",
      });
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }

  static async getMatricula(req, res) {
    const {estudante_id, matricula_id} = req.params;
    try {
      const matricula = await db.Matriculas.findOne({where: {id:Number(matricula_id), estudante_id:Number(estudante_id)}})
      return res.status(200).json({
        mensagem: matricula,
      });
    } catch (err) {
      return res.status(500).json( {"error": err} );
    }
  }
}

module.exports = PessoaController;
