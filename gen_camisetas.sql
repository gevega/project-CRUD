-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 08-12-2022 a las 15:03:11
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gen_camisetas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact_gen`
--

CREATE TABLE `contact_gen` (
  `nom_user` varchar(30) NOT NULL,
  `ape_user` varchar(30) NOT NULL,
  `mail_user` varchar(50) NOT NULL,
  `tel_user` int(10) NOT NULL,
  `msg_user` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login_gen`
--

CREATE TABLE `login_gen` (
  `mail_user` varchar(40) NOT NULL,
  `nom_user` varchar(30) NOT NULL,
  `ape_user` varchar(30) NOT NULL,
  `pass_user` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contact_gen`
--
ALTER TABLE `contact_gen`
  ADD PRIMARY KEY (`mail_user`);

--
-- Indices de la tabla `login_gen`
--
ALTER TABLE `login_gen`
  ADD PRIMARY KEY (`mail_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
