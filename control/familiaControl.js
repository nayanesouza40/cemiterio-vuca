/**
 * control/thingControl.js
 * Controller da tabela "familia" do banco de dados.
 */

// Importa conector do banco de dados.
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "familia" do banco de dados.
const familiaControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM familia");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM familia WHERE id = ?", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },


  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { sobrenome, cemiterio_id } = req.body;
      const sql = "INSERT INTO familia (sobrenome, cemiterio_id) VALUES (?, ?)";
      const [rows] = await conn.query(sql, [sobrenome, cemiterio_id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  

  // apaga um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "DELETE FROM familia WHERE id = ?;"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }

  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { sobrenome, cemiterio_id } = req.body;
      const { id } = req.params;
      const sql = "UPDATE familia SET sobrenome = ?, cemiterio_id = ? WHERE id = ?"
      const [rows] = await conn.query(sql, [sobrenome, cemiterio_id,  id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = familiaControl;

/**
 * By Luferat 2023
 * MIT Licensed
 */