CREATE DATABASE  IF NOT EXISTS `electrozone` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `electrozone`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: electrozone
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_on` date DEFAULT NULL,
  `updated_on` datetime(6) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `is_active` bit(1) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'2024-08-07','2024-08-12 20:17:02.227170','images/apple.svg',_binary '','Apple'),(2,'2024-08-12','2024-08-14 02:26:36.927859','images/dell.svg',_binary '','Dell'),(3,'2024-08-12','2024-08-12 20:17:43.005198','images/microsoft.svg',_binary '','Microsoft'),(4,'2024-08-12','2024-08-14 02:27:13.399382','images/haier.svg',_binary '','Haier'),(5,'2024-08-13','2024-08-13 23:43:25.309331','images/philips.svg',_binary '','PHILIPS'),(6,'2024-08-13','2024-08-13 23:48:46.831565','images/oppo.svg',_binary '','OPPO'),(7,'2024-08-14','2024-08-14 02:28:12.868359','images/hp.svg',_binary '','HP'),(8,'2024-08-14','2024-08-14 02:28:25.621311','images/jbl.svg',_binary '','JBL'),(9,'2024-08-14','2024-08-14 02:28:40.939412','images/lenovo.svg',_binary '','lenovo'),(10,'2024-08-14','2024-08-14 02:29:11.341806','images/mi.svg',_binary '','Xiaomi'),(11,'2024-08-14','2024-08-14 02:29:28.068935','images/oppo.svg',_binary '','OPPO'),(12,'2024-08-14','2024-08-14 02:29:51.144844','images/samsung.svg',_binary '','Samsung'),(13,'2024-08-14','2024-08-14 02:30:02.005490','images/sony.svg',_binary '','Sony'),(14,'2024-08-14','2024-08-14 02:30:10.640063','images/vivo.svg',_binary '','Vivo');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-14 16:24:16
