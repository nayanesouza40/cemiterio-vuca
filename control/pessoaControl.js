/**
 * control/thingControl.js
 * Controller da tabela "pessoa" do banco de dados.
 */

// Importa conector do banco de dados.
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "pessoa" do banco de dados.
const pessoaControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM pessoa");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM pessoa WHERE id = ?", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },


  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { cpf, nome, data_nascimento, data_morte, cemiterio_id, tumulo_id, texto_ob } = req.body;
      const sql = "INSERT INTO pessoa (cpf, nome, data_nascimento, data_morte, cemiterio_id, tumulo_id, texto_ob) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const [rows] = await conn.query(sql, [cpf, nome, data_nascimento, data_morte, cemiterio_id, tumulo_id, texto_ob]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // apaga um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "DELETE FROM pessoa WHERE id = ?;"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }

  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { cpf, nome, data_nascimento, data_morte, cemiterio_id, tumulo_id, texto_ob } = req.body;
      const { id } = req.params;
      const sql = "UPDATE pessoa SET cpf = ?, nome = ?, data_nascimento = ?, data_morte = ?, cemiterio_id = ?, tumulo_id = ?, texto_ob = ? WHERE id = ?"
      const [rows] = await conn.query(sql, [cpf, nome, data_nascimento, data_morte, cemiterio_id, tumulo_id, texto_ob,  id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = pessoaControl;

/**
 * By Luferat 2023
 * MIT Licensed
 */