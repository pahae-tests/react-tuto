const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school"
});

db.connect((err) => {
  if (err) {
    console.error("Erreur connexion DB :", err);
  } else {
    console.log("Connecté à MySQL");
  }
});

module.exports = db;