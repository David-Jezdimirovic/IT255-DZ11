-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2018 at 12:18 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it255-dz11`
--
CREATE DATABASE IF NOT EXISTS `it255-dz11` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `it255-dz11`;

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE IF NOT EXISTS `korisnici` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(20) NOT NULL,
  `prezime` varchar(30) NOT NULL,
  `username` varchar(20) NOT NULL,
  `sifra` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`id`, `ime`, `prezime`, `username`, `sifra`) VALUES
(1, 'Aca', 'Ackovic', 'acaackovic', '02c2790e058f7d4197d2aeb2342431af'),
(2, 'Pera', 'Peric', 'peraperic', '817898bd17a14f8c6bb0fe445feac2a6');

-- --------------------------------------------------------

--
-- Table structure for table `sobe`
--

CREATE TABLE IF NOT EXISTS `sobe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `broj` int(11) NOT NULL,
  `naziv` varchar(30) NOT NULL,
  `tv` tinyint(1) NOT NULL,
  `kvadrati` int(11) NOT NULL,
  `kreveti` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sobe`
--

INSERT INTO `sobe` (`id`, `broj`, `naziv`, `tv`, `kvadrati`, `kreveti`) VALUES
(1, 1, 'Apartman', 1, 40, 2),
(2, 23, 'Soba', 0, 34, 1),
(3, 2, 'Soba', 1, 50, 3),
(4, 3, 'Apartman', 1, 70, 4),
(5, 5, 'Soba', 1, 57, 2),
(6, 7, 'Soba', 0, 20, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
