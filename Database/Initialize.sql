ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
CREATE DATABASE IF NOT EXISTS MediGo;
CREATE TABLE IF NOT EXISTS `MediGO`.`Answers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fever` TINYINT NOT NULL,
  `dryCough` TINYINT NOT NULL,
  `tiredness` TINYINT NOT NULL,
  `achesAndPains` TINYINT NOT NULL,
  `soreThroat` TINYINT NOT NULL,
  `diarrhea` TINYINT NOT NULL,
  `conjunctivitis` TINYINT NOT NULL,
  `headache` TINYINT NOT NULL,
  `lossOfTasteOrSmell` TINYINT NOT NULL,
  `rash` TINYINT NOT NULL,
  `difficultyBreathing` TINYINT NOT NULL,
  `chestPain` TINYINT NOT NULL,
  `lossOfSpeechOrMovement` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB