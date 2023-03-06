

// Importa conector do banco de dados.
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "cemiterio" do banco de dados.
const cemiterioControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM cemiterio");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM cemiterio WHERE id = ?", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },


  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { nome, endereço } = req.body;
      const sql = "INSERT INTO cemiterio (nome, endereço) VALUES (?, ?)";
      const [rows] = await conn.query(sql, [nome, endereço]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // apaga um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "DELETE FROM cemiterio WHERE id = ?;"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }

  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { nome, endereço } = req.body;
      const { id } = req.params;
      const sql = "UPDATE cemiterio SET nome = ?, endereço = ? WHERE id = ?";
      const [rows] = await conn.query(sql, [nome, endereço, id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = cemiterioControl;

