CREATE DATABASE ondes_du_coeur;

USE ondes_du_coeur;

CREATE TABLE  utilisateurs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255)NOT NULL,
    date_inscription TIMES DEFAULT CURRENT_TIMESTAMP

);