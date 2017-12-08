-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2017 a las 20:37:46
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `apunta3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nota`
--

CREATE TABLE `nota` (
  `IdNota` bigint(5) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8 NOT NULL,
  `contenido` varchar(300) CHARACTER SET utf8 NOT NULL,
  `autor` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `nota`
--

INSERT INTO `nota` (`IdNota`, `nombre`, `contenido`, `autor`) VALUES
(1, 'fwsefsdfsd', '12345697/89548', 'andrea'),
(43, 'Entrenamiento', 'Abdominales: 3 series de 30 repeticiones********* Sentadillas: 5 series de 20 repeticionesliva virgen extra**********   Press banca: 4 series de 25 repeticiones', 'pepep'),
(44, 'Cumpleaños', 'Fátima: 23/9  ,  Mario: 01/12  ', 'pepep'),
(45, 'Ingredientes croquetas para 6 personas', '200g de jamón serrano ,1 cebolleta , 1 diente de ajo , 100g de harina , 100g de mantequilla (o 100ml de aceite de oliva virgen extra) , 1L de leche , perejil', 'mario'),
(47, 'Llamadas pendientes', 'Maite de Linasa , Talleres Gumerjo', 'mario'),
(48, 'Reuniones', 'Jueves 02/11/2017 a las 10:00', 'pepep'),
(53, 'Lista de la compra', 'Salmón , Macarrones , Azúcar moreno , Atún ,Calamares', 'andrea'),
(54, 'nota andrea', 'andrea', 'andrea'),
(57, 'aaaaaaa', 'ásnde , aóas', 'andrea'),
(58, 'wdedwed', 'dwedwedw', 'andrea'),
(59, 'eeeeee eeeeeeee eeeeeee', 'eeee', 'andrea');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas_compartidas`
--

CREATE TABLE `notas_compartidas` (
  `nomUsu` varchar(20) CHARACTER SET utf8 NOT NULL,
  `idNota` bigint(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `notas_compartidas`
--

INSERT INTO `notas_compartidas` (`nomUsu`, `idNota`) VALUES
('andrea', 44);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `login` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`login`, `password`, `email`) VALUES
('aaaaaa', 'aaaaaa', 'aaaaaa@gmsil.com'),
('andrea', 'andrea', 'andrea@gmail.com'),
('mario', 'mario', 'mario@gmail.com'),
('pepep', 'pepep', 'pepep@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`IdNota`),
  ADD KEY `autor` (`autor`);

--
-- Indices de la tabla `notas_compartidas`
--
ALTER TABLE `notas_compartidas`
  ADD PRIMARY KEY (`idNota`),
  ADD KEY `idNota` (`idNota`),
  ADD KEY `nomUsu` (`nomUsu`),
  ADD KEY `idNota_2` (`idNota`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`login`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `nota`
--
ALTER TABLE `nota`
  MODIFY `IdNota` bigint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `nota_ibfk_1` FOREIGN KEY (`autor`) REFERENCES `usuario` (`login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `notas_compartidas`
--
ALTER TABLE `notas_compartidas`
  ADD CONSTRAINT `notas_compartidas_ibfk_2` FOREIGN KEY (`nomUsu`) REFERENCES `usuario` (`login`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notas_compartidas_ibfk_3` FOREIGN KEY (`idNota`) REFERENCES `nota` (`IdNota`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
