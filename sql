CREATE DATABASE ondes_du_coeur;

USE ondes_du_coeur;


CREATE TABLE utilisateurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    password VARCHAR (255) NOT NULL

) ;