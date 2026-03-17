const db = require("../config/db");

exports.createEtudiant = (data, callback) => {
  const sql = "INSERT INTO Etudiants (nom, prenom, filliere) VALUES (?, ?, ?)";
  db.query(sql, [data.nom, data.prenom, data.filliere], callback);
};

exports.getAllEtudiants = (callback) => {
  db.query("SELECT * FROM Etudiants", callback);
};

exports.deleteEtudiant = (id, callback) => {
  db.query("DELETE FROM Etudiants WHERE id = ?", [id], callback);
};  