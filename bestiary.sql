CREATE DATABASE IF NOT EXISTS bestiary;
USE bestiary;

DROP TABLE IF EXISTS crea_skill;
DROP TABLE IF EXISTS crea_ability;
DROP TABLE IF EXISTS crea_env;
DROP TABLE IF EXISTS creature;
DROP TABLE IF EXISTS size;
DROP TABLE IF EXISTS `type`;
DROP TABLE IF EXISTS family;
DROP TABLE IF EXISTS environment;
DROP TABLE IF EXISTS skill;
DROP TABLE IF EXISTS ability;


CREATE TABLE size(
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(10) NOT NULL
);

CREATE TABLE `type`(
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(20) NOT NULL
);

CREATE TABLE family(
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(20) NOT NULL
);

CREATE TABLE environment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE skill(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    path VARCHAR(25) NOT NULL,
    rank INT NOT NULL,
    `limit` TINYINT NOT NULL,
    effect TEXT NOT NULL
);

CREATE TABLE ability(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    `limit` TINYINT NOT NULL,
    effect TEXT NOT NULL
);

CREATE TABLE creature(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    nc VARCHAR(10) NOT NULL,
    stats VARCHAR(35) NOT NULL,
    attack VARCHAR(256) NOT NULL,
    boss_rank INT NOT NULL DEFAULT(0),
    family_id INT NOT NULL,
    type_id INT NOT NULL,
    size_id INT NOt NULL,
    FOREIGN KEY (family_id) REFERENCES family(id),
    FOREIGN KEY (type_id) REFERENCES type(id),
    FOREIGN KEY (size_id) REFERENCES size(id)
);

CREATE TABLE crea_skill(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    creature_id BIGINT NOT NULL,
    skill_id INT NOT NULL,
    FOREIGN KEY (creature_id) REFERENCES creature(id),
    FOREIGN KEY (skill_id) REFERENCES skill(id)
);

CREATE TABLE crea_ability(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    creature_id BIGINT NOT NULL,
    ability_id INT NOT NULL,
    FOREIGN KEY (creature_id) REFERENCES creature(id),
    FOREIGN KEY (ability_id) REFERENCES ability(id)
);

CREATE TABLE crea_env(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    creature_id BIGINT NOT NULL,
    environment_id INT NOT NULL,
    rate VARCHAR(10) NOT NULL,
    quantity VARCHAR(10) NOT NULL,
    FOREIGN KEY (creature_id) REFERENCES creature(id),
    FOREIGN KEY (environment_id) REFERENCES environment(id)
);

INSERT INTO family(label) VALUES('Ancien'),('Animal'),('Démon'),('Dinosaures'),('Dragon'),('Elémentaire'),('Golem'),('Humain'),('Hydre'),('Peau verte'),('Titan');

INSERT INTO type(label) VALUES('Animal'),('Dragonoïde'),('Goblinoïde'),('Humanoïde'),('Hybride'),('Insectoïde'),('Non-vivant');

INSERT INTO size(label) VALUES('Minuscule'),('Très petit'),('Petit'),('Moyen'),('Grand'),('Enorme'),('Colossale'),('Titanesque');