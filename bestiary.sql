﻿DROP DATABASE IF EXISTS bestiary;

CREATE DATABASE bestiary CHARACTER SET utf8 COLLATE utf8_bin;
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
    name VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE skill(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    path VARCHAR(50) NOT NULL,
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

CREATE TABLE `health` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `effect` text NOT NULL
);

INSERT INTO health (`name`, effect) VALUES
('Aveuglé', "-5 en Init, en attaque, et en DEF. -10 en attaque à distances."),
('Affaibli', "Doit utiliser un D12 au lieu du D20."),
('Etourdi', "Aucune action n'est possible, -5 DEF."),
('Immobilisé', "Pas de déplacement et utilise un D12 au lieu du D20."),
('Paralysé', "Aucune action n'est possible, en cas d'attaque subit elle touche automatiquement en critique."),
('Ralenti', "Une seule action par tour (action de mouvement ou action d'attaque)."),
('Renversé', "-5 en attaque et en DEF, nécessite une action de mouvement pour se relever."),
('Surpris', "Pas d'action et -5 en DEF au premier tour de combat.");

INSERT INTO family(label) VALUES('Ancien'),('Animal'),('Démon'),('Dinosaures'),('Dragon'),('Elémentaire'),('Golem'),('Humain'),('Hydre'),('Peau verte'),('Titan');

INSERT INTO type(label) VALUES('Animal'),('Dragonoïde'),('Goblinoïde'),('Humanoïde'),('Hybride'),('Insectoïde'),('Non-vivant');

INSERT INTO size(label) VALUES('Minuscule'),('Très petit'),('Petit'),('Moyen'),('Grand'),('Enorme'),('Colossale'),('Titanesque');

INSERT INTO creature(`name`,description,nc,stats,attack,family_id,type_id,size_id)
VALUES("Ankheg","L\'ankheg est une horrible créature souterraine qui ressemble au croisement d'un crustacé et d'un insecte géant. Son crops est muni d'une épaisse carapace de chitine et de six pattes, sa tête est pourvue de 2 énormes mandibules. Il mesure environ 3 mètres pour 400 Kg.","3","+6,+1,+6,-4,+2,-4,16,30,17","Mandibules +8 DM 2d6+6+1d6 acide",2,6,5);

INSERT INTO environment(name) VALUES('Désert'),('Fôret'),('Grotte'),('Grotte profonde'),('Montagne'),('Océan');

INSERT INTO crea_env(creature_id,environment_id,rate,quantity) VALUES
(1,3,"1","1d2"),
(1,4,"0-7","1d4");

INSERT INTO ability(name, effect, `limit`) VALUES
("Jet d'acide", "Une fois par combat, la créature peut cracher un jet d'acide à une distance de 10 mètres. Il inflige 4d6 DM et la cible peut faire un test de DEX difficulté 12 pour ne subir que la moitié des DM.", 1),
("Creuser", "Au pris d'une action limité, la créature est capable de creuser sur une profondeur de 10 mètres par tour. Il peut utiliser sa capacité embuscade pour surgir su sol et attaquer.", 1);

INSERT INTO skill(name, path, rank, effect, `limit`) VALUES
("Embuscade", "Voie du prédateur", 1, "Au premier tour de combat, si l'environnement permet à la créature de se dissimuler, la cible doit faire un test de SAG difficulté [15 + Mod. DEX] ou être Surpris. Si elle attaque aveec succès une cible Surprise, la créature inflige +1d6 DM et toute créature dont la FOR est inferieur à la sienne est Renversée. La créatureobtient un bonus de +5 au jet de discrétion et en Initiative.", 0);

INSERT INTO crea_skill(creature_id, skill_id) VALUES
(1, 1);

INSERT INTO crea_ability(creature_id, ability_id) VALUES
(1,1),
(1,2);

DELIMITER $$
CREATE PROCEDURE encounter_table(env_id INT(11))
BEGIN
	SELECT c.id, c.name, p.rate, p.quantity FROM creature c, crea_env p 
	WHERE c.id = p.creature_id AND p.environment_id = env_id;
END$$

DELIMITER ;