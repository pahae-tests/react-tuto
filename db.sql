CREATE DATABASE IF NOT EXISTS school;

USE school;

CREATE TABLE Etudiants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    filliere VARCHAR(150) NOT NULL
);

INSERT INTO Etudiants (nom, prenom, filliere) VALUES
('El Amrani', 'Mohamed', 'RSI'),
('Alaoui', 'Fatima', 'IRISTI'),
('Benjelloun', 'Youssef', 'IMI'),
('Mansouri', 'Khadija', 'RSI');