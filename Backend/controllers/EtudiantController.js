const Etudiant = require("../models/EtudiantModel");

exports.create = (req, res) => {
  Etudiant.createEtudiant(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Etudiant ajouté", id: result.insertId });
  });
};

exports.getAll = (req, res) => {
  Etudiant.getAllEtudiants((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.remove = (req, res) => {
  Etudiant.deleteEtudiant(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Etudiant supprimé" });
  });
};