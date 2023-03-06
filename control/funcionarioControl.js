/**
 * control/thingControl.js
 * Controller da tabela "familia" do banco de dados.
 */

// Importa conector do banco de dados.
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "funcionario" do banco de dados.
const funcionarioControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM funcionario");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM funcionario WHERE id = ?", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },


  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { nome, cargo, cemiterio_id } = req.body;
      const sql = "INSERT INTO funcionario (nome, cargo, cemiterio_id) VALUES (?, ?, ?)";
      const [rows] = await conn.query(sql, [nome, cargo, cemiterio_id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // apaga um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "DELETE FROM funcionario WHERE id = ?;"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }

  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { nome, cargo, cemiterio_id } = req.body;
      const { id } = req.params;
      const sql = "UPDATE funcionario SET nome = ?, cargo = ?, cemiterio_id = ? WHERE id = ?"
      const [rows] = await conn.query(sql, [nome, cargo, cemiterio_id,  id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = funcionarioControl;

/**
 * By Luferat 2023
 * MIT Licensed
 */