-- SET UP SCHEMA HERE
CREATE DATABASE IF NOT EXISTS `badmovies`;
CREATE TABLE IF NOT EXISTS `badmovies`.`favorites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `poster_path` VARCHAR(256) NULL,
  `title` VARCHAR(256) NULL,
  `release_date` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB