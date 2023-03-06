/**
 * control/thingControl.js
 * Controller da tabela "tumulo" do banco de dados.
 */

// Importa conector do banco de dados.
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "tumulo" do banco de dados.
const tumuloControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM tumulo");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM tumulo WHERE id = ?", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },


  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { numero, familia_id } = req.body;
      const sql = "INSERT INTO tumulo (numero, familia_id) VALUES (?, ?)";
      const [rows] = await conn.query(sql, [numero, familia_id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // apaga um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "DELETE FROM tumulo WHERE id = ?;"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }

  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { numero, familia_id } = req.body;
      const { id } = req.params;
      const sql = "UPDATE tumulo SET numero = ?, familia_id = ? WHERE id = ?"
      const [rows] = await conn.query(sql, [numero, familia_id,  id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = tumuloControl;

/**
 * By Luferat 2023
 * MIT Licensed
 */