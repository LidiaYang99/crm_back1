CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Usuarios_has_proyectos`
--

DROP TABLE IF EXISTS `Usuarios_has_proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuarios_has_proyectos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Usuarios_id` int DEFAULT NULL,
  `proyectos_id` int NOT NULL,
  `horas_dedicads` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Usuarios_has_proyectos_proyectos1_idx` (`proyectos_id`),
  KEY `fk_Usuarios_has_proyectos_Usuarios1_idx` (`Usuarios_id`),
  CONSTRAINT `fk_Usuarios_has_proyectos_proyectos1` FOREIGN KEY (`proyectos_id`) REFERENCES `proyectos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_Usuarios_has_proyectos_Usuarios1` FOREIGN KEY (`Usuarios_id`) REFERENCES `Usuarios` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios_has_proyectos`
--

LOCK TABLES `Usuarios_has_proyectos` WRITE;
/*!40000 ALTER TABLE `Usuarios_has_proyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Usuarios_has_proyectos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-15 12:58:53
