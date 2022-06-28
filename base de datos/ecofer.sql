-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-05-2022 a las 22:15:43
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecofer`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritocompras`
--

CREATE TABLE `carritocompras` (
  `id` int(11) NOT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `idVentas` int(11) DEFAULT NULL,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaproductos`
--

CREATE TABLE `categoriaproductos` (
  `id` int(11) NOT NULL,
  `agExtintor` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `clase` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fuegos` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `aplicativos` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `categoriaproductos`
--

INSERT INTO `categoriaproductos` (`id`, `agExtintor`, `clase`, `descripcion`, `fuegos`, `habilitado`, `eliminado`, `aplicativos`, `ts_create`, `ts_update`) VALUES
(1, 'agua', 'A', 'Los extintores de agua bajo presiÃ³n son diseÃ±ados para proteger Ã¡reas que contienen riesgos de fuego Clase A (combustibles sÃ³lidos)', 'de clase A sin electricidad', 1, 0, 'CarpinterÃ­as, industrias de muebles, aserraderos, depÃ³sitos, hospitales, etc', '2021-01-04 21:07:30', '2022-01-10 21:11:07'),
(2, 'agua pulverizada', '3', 'Los extintores de agua pulverizada son diseÃ±ados para proteger todas las Ã¡reas que contienen riesgos de fuegos Clase A (combustibles sÃ³lidos) y Clase C (equipos elÃ©ctricos energizados) en forma eficiente y segura', 'fuegos de clase A y C.', 1, 0, 'servicios aÃ©reos, edificios de departamentos, bancos museos oficinas, hospitales, centro de cÃ³mputos, industrias electrÃ³nicas, centro de telecomunicaciones, escuelas, supermercados, etc.', '2021-01-04 21:10:37', '2022-01-14 00:10:49'),
(3, 'Espuma', 'A Y B', 'Los extintores de agua con AFFF bajo presiÃ³n son diseÃ±ados para proteger Ã¡reas que contienen riesgos de fuego Clase A (combustibles sÃ³lidos) y Clase B (combustibles lÃ­quidos y gaseosos)', 'fuegos de clase A y B', 1, 0, ' Industrias, equipos elÃ©ctricos, viviendas, transporte, comercios, escuelas, aviaciÃ³n, garajes, etc.', '2021-01-04 21:15:42', '2021-01-04 21:15:42'),
(4, 'Polvo', 'A,B,C', 'Los extinguidores de polvo quÃ­mico seco (ABC) son diseÃ±ados para proteger Ã¡reas que contienen riesgos de fuego Clase A (combustibles sÃ³lidos), Clase B (combustibles lÃ­quidos y gaseosos), Clase C (equipos elÃ©ctricos energizados) y Clase D (metales co', 'fuegos de clase A, B, C y elÃ©ctricos', 1, 0, 'Industrias, oficinas, viviendas, transporte, comercios, escuelas, aviaciÃ³n, garajes, etc.', '2021-01-04 21:16:51', '2021-01-04 21:16:51'),
(5, 'Co2', 'A,B,C', 'Los extintores de diÃ³xido de carbono son diseÃ±ados para proteger Ã¡reas que contienen riesgos de incendio Clase B (combustibles lÃ­quidos y gaseosos) y Clase C (equipos elÃ©ctricos energizados)', 'fuegos de clase A, B, C y elÃ©ctricos', 1, 0, ' Industrias, equipos elÃ©ctricos, viviendas, transporte, comercios, escuelas, aviaciÃ³n, garajes, etc.', '2021-01-04 21:17:55', '2022-01-10 22:18:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaventas`
--

CREATE TABLE `categoriaventas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `habilitado` int(4) NOT NULL DEFAULT 1,
  `eliminado` int(4) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(4) NOT NULL,
  `idEmpresa` int(4) DEFAULT NULL,
  `idPersonas` int(4) DEFAULT NULL,
  `idUsuario` int(4) DEFAULT NULL,
  `eliminado` int(11) NOT NULL DEFAULT 1,
  `habilitado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientesimagen`
--

CREATE TABLE `clientesimagen` (
  `id` int(4) NOT NULL,
  `idCliente` int(4) DEFAULT NULL,
  `uid` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `eliminado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int(4) NOT NULL,
  `razonSocial` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombreFantasia` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `elliminado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `razonSocial`, `nombreFantasia`, `habilitado`, `elliminado`, `ts_create`, `ts_update`) VALUES
(24, 'Ecofer', 'Ecofer', 1, 0, '2022-01-07 01:51:15', '2022-01-07 01:51:15'),
(25, 'Ecofer', 'Ecofer', 1, 0, '2022-01-07 01:53:15', '2022-01-07 01:53:15'),
(26, 'Ecofer', 'Ecofer', 1, 0, '2022-01-07 01:58:33', '2022-01-07 01:58:33'),
(27, 'Sebastian Minotti', 'msmit', 1, 0, '2022-01-07 02:08:46', '2022-01-07 02:08:46'),
(28, 'null', 'null', 1, 0, '2022-01-30 23:41:49', '2022-01-30 23:41:49'),
(29, 'null', '', 1, 0, '2022-01-30 23:49:22', '2022-01-30 23:49:22'),
(30, 'null', 'null', 1, 0, '2022-01-31 00:04:49', '2022-01-31 00:04:49'),
(31, 'null', 'null', 1, 0, '2022-01-31 00:07:18', '2022-01-31 00:07:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(4) NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `codPostal` int(11) DEFAULT NULL,
  `cuitCuil` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `mail` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dni` int(45) DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `eliminado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `apellido`, `nombre`, `codPostal`, `cuitCuil`, `direccion`, `mail`, `telefono`, `dni`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(32, 'Quiroga', 'Gaston', 2532, '20263589652', 'pasaje floresta 236', 'sebastianminotti@gmail.com', '1165632568', 26358965, 1, 0, '2022-01-07 01:51:15', '2022-01-07 01:51:15'),
(33, 'Quiroga', 'Gaston', 2536, '20265896523', 'pasaje floresta 236', 'sebastianminotti@gmail.com', '1126543256', 26589652, 1, 0, '2022-01-07 01:53:15', '2022-01-07 01:53:15'),
(34, 'Quiroga', 'Gaston', 1253, '20262569632', 'pasaje floresta 253', 'sebastianminotti@gmail.com', '1163256325', 26256963, 1, 0, '2022-01-07 01:58:33', '2022-01-07 01:58:33'),
(35, 'Minotti', 'Sebastian', 1437, '20265896523', 'agustin 2563', 'sebastianminotti@gmail.com', '1165325456', 26358951, 1, 0, '2022-01-07 02:08:46', '2022-01-07 02:08:46'),
(36, 'Minotti', 'Sebastian', 1437, '20267652322', 'ag. de vedia 2658', 'sebastianminotti@gmail.com', '1164655322', 26765232, 1, 0, '2022-01-30 23:41:49', '2022-01-30 23:41:49'),
(37, 'Minotti', 'Sebastian', 1437, '20268523652', 'ag sw vwdia', 'sebastianminotti@gmail.com', '1165236522', 26852036, 1, 0, '2022-01-30 23:49:22', '2022-01-30 23:49:22'),
(38, 'Minotti', 'Sebastian', 1437, '20232563252', 'ag vedia 2652', 'sebastianminotti@mail.com', '116523258', 20263258, 1, 0, '2022-01-31 00:04:49', '2022-01-31 00:04:49'),
(39, 'Minotti', 'Sebastain', 1437, '20253652325', 'ag de vedia', 'sebastianminotti@gmail.com', '116523623', 20235232, 1, 0, '2022-01-31 00:07:18', '2022-01-31 00:07:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(4) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idCategoria` int(4) NOT NULL,
  `idProveedor` int(4) NOT NULL,
  `kilos` int(4) DEFAULT NULL,
  `numeroSerie` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `observacionesProd` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `precioCosto` int(10) DEFAULT NULL,
  `precioVenta` int(10) DEFAULT NULL,
  `unidades` int(4) DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `eliminado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `idCategoria`, `idProveedor`, `kilos`, `numeroSerie`, `observacionesProd`, `precioCosto`, `precioVenta`, `unidades`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(7, 'ABC', 1, 1, 5, 'numero de serie', '', 100, 0, 250, 1, 0, '2022-01-07 02:15:20', '2022-03-31 22:40:19'),
(8, 'ABC', 1, 4, 5, 'assd13431232', 'aasdasdasdasd', 100, 200, 250, 1, 0, '2022-01-07 21:15:22', '2022-03-22 22:12:19'),
(9, 'ABC', 1, 4, 5, '3<21x3<21xz32', '5', 100, 200, 250, 1, 0, '2022-01-08 22:21:12', '2022-03-22 22:12:19'),
(10, 'ABC', 1, 1, 5, '', '', 100, 0, 250, 1, 0, '2022-01-08 22:27:19', '2022-03-22 21:45:25'),
(11, 'cambio-2', 1, 2, 120, 'a6s5as65', 'cambio', 150, 0, 66, 1, 0, '2022-01-08 22:29:53', '2022-03-22 22:13:40'),
(12, 'resetFrom', 1, 5, 5, '6s5d4a6', 'sdsds', 52, 85, 5, 1, 0, '2022-01-08 22:31:24', '2022-01-08 22:31:24'),
(13, 'enviaTabla', 1, 2, 5, '32s1a32d1a3s2d1', '', 200, 0, 250, 1, 0, '2022-01-08 22:32:34', '2022-03-22 22:13:40'),
(14, 'ABC', 1, 2, 5, '', '', 100, 0, 250, 1, 0, '2022-01-08 22:36:13', '2022-03-22 22:13:40'),
(15, 'ABC', 1, 2, 5, '', '', 100, 0, 250, 1, 0, '2022-01-08 22:38:19', '2022-03-22 22:13:40'),
(16, 'producto 1000', 1, 3, 3, '2131212e', 'wqweqweqwe', 12, 21, 2, 1, 0, '2022-01-08 22:41:57', '2022-03-22 22:12:19'),
(17, 'idFileCrearProducto', 1, 2, 5, '65656saqsqws5656', 'ver que tira el idFile', 20, 25, 5, 1, 0, '2022-01-26 22:00:02', '2022-03-22 22:13:40'),
(18, 'nuevo', 1, 4, 4, 'sdfsd', '3dsaf3dxcfdfsdf', 34, 43, 3, 1, 0, '2022-01-26 22:33:43', '2022-03-22 22:12:19'),
(19, 'cloudinary', 1, 2, 43, 'qwer2342344', 'cloudinnary', 43, 0, 34, 1, 0, '2022-01-28 23:24:15', '2022-03-22 22:13:40'),
(20, 'nombre cloudinary', 1, 2, 25, '32sa1d5waq13.', 'guardar en la base con el name de cloudinary', 15, 35, 15, 1, 0, '2022-01-29 00:59:16', '2022-03-22 22:12:19'),
(21, 'prueba nueva cloudinary', 1, 3, 5, 'asddrf234', 'guarda carpeta Ecofer', 15, 21, 3, 1, 0, '2022-01-29 18:25:45', '2022-03-22 22:12:19'),
(22, 'cloudinary test', 1, 2, 4, 'asdas', 'ert546', 56, 65, 3, 1, 0, '2022-01-29 18:53:03', '2022-03-22 22:12:19'),
(23, 'cloudinary preset', 1, 1, 4, 'asrewq32423423', '32rerw2e323', 43, 43, 3, 1, 0, '2022-01-29 18:59:50', '2022-03-22 22:12:19'),
(24, 'otra', 1, 1, 4, 'qwer4r2342', 'cambio a firmado', 43, 43, 34, 1, 0, '2022-01-29 19:08:45', '2022-03-22 22:12:19'),
(25, 'sdsd', 1, 3, 23, '213123123', '2323', 32, 32, 32, 1, 0, '2022-01-29 19:13:57', '2022-03-22 22:12:19'),
(26, 'fsdgdfg', 1, 3, 545, '34w5q', '4545', 54, 54, 54, 1, 0, '2022-01-29 19:17:11', '2022-03-22 22:12:19'),
(27, 'guardar id_cludinary', 1, 2, 5, '32q23asdas', 'dsfdfsdf', 34, 43, 4, 1, 0, '2022-01-30 18:18:12', '2022-03-22 22:12:19'),
(28, 'otra', 1, 4, 43, '32ewrwer', '34fasdfd<', 34, 43, 3, 1, 0, '2022-01-30 18:22:58', '2022-03-22 22:12:19'),
(29, 'otra vez', 1, 4, 54, '4ware53', '43wa sdrftrt', 54, 45, 45, 1, 0, '2022-01-30 18:27:27', '2022-03-22 22:12:19'),
(30, 'pueba 2', 1, 2, 4, '4asdfasdfad', 'cambiar c/ idCloudinary', 34, 43, 3, 1, 0, '2022-01-30 18:59:27', '2022-03-22 22:13:40'),
(31, 'abc', 1, 1, 43, '34', 'asdadad', 43, 0, 23, 1, 0, '2022-01-30 19:29:04', '2022-03-22 22:12:19'),
(32, 'ddddd', 1, 2, 22, '22ee2', '2222', 22, 0, 2, 1, 0, '2022-01-30 19:50:15', '2022-03-22 22:13:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosimagen`
--

CREATE TABLE `productosimagen` (
  `id` int(4) NOT NULL,
  `idProductos` int(4) DEFAULT NULL,
  `uid` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `eliminado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idCloudinary` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productosimagen`
--

INSERT INTO `productosimagen` (`id`, `idProductos`, `uid`, `habilitado`, `eliminado`, `ts_create`, `ts_update`, `idCloudinary`) VALUES
(7, 7, 'https://res.cloudinary.com/doof8plzr/image/upload/v1648766316/Ecofer/e3sjskwdpkrhjueodug4.jpg', 1, 0, '2022-01-07 02:15:20', '2022-03-31 22:38:42', 'Ecofer/e3sjskwdpkrhjueodug4'),
(8, 8, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643647711/Ecofer/e1uhflqfilgezuqnounn.jpg', 1, 0, '2022-01-07 21:15:22', '2022-01-31 16:48:35', 'Ecofer/e1uhflqfilgezuqnounn'),
(9, 9, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643673582/Ecofer/rsibo60kybj0crxc1vlq.png', 1, 0, '2022-01-08 22:21:12', '2022-01-31 23:59:42', 'Ecofer/rsibo60kybj0crxc1vlq'),
(10, 10, 'https://res.cloudinary.com/doof8plzr/image/upload/v1647985248/Ecofer/kd1rkpejzpbzdu0qq36z.png', 1, 0, '2022-01-08 22:27:19', '2022-03-22 21:40:53', 'Ecofer/kd1rkpejzpbzdu0qq36z'),
(11, 11, 'https://res.cloudinary.com/doof8plzr/image/upload/v1647986059/Ecofer/iu1airkizve5td93bpme.jpg', 1, 0, '2022-01-08 22:29:53', '2022-03-22 21:54:24', 'Ecofer/iu1airkizve5td93bpme'),
(12, 12, 'e7c833ae-192d-4e57-bcd8-890538ef5fa3.jpeg', 1, 0, '2022-01-08 22:31:24', '2022-01-08 22:31:24', NULL),
(13, 13, 'https://res.cloudinary.com/doof8plzr/image/upload/v1647986291/Ecofer/uib6i2tx0ym96mg5flsh.jpg', 1, 0, '2022-01-08 22:32:34', '2022-03-22 21:58:16', 'Ecofer/uib6i2tx0ym96mg5flsh'),
(14, 14, 'https://res.cloudinary.com/doof8plzr/image/upload/v1647985599/Ecofer/olmwnpeanztamickmgtb.jpg', 1, 0, '2022-01-08 22:36:13', '2022-03-22 21:46:44', 'Ecofer/olmwnpeanztamickmgtb'),
(15, 15, 'https://res.cloudinary.com/doof8plzr/image/upload/v1647986379/Ecofer/uaeaoyn3ev3ofstoxe9h.jpg', 1, 0, '2022-01-08 22:38:19', '2022-03-22 21:59:44', 'Ecofer/uaeaoyn3ev3ofstoxe9h'),
(16, 17, '0161a86a-9d4f-4d85-9ee0-4355af8fcc29.jpeg', 1, 0, '2022-01-26 22:00:02', '2022-01-26 22:00:02', NULL),
(17, 18, '0e8b90a5-b650-4c6b-b232-dc9ad31b096b.jpeg', 1, 0, '2022-01-26 22:33:43', '2022-01-26 22:33:43', NULL),
(18, 19, 'https://res.cloudinary.com/doof8plzr/image/upload/v1647986674/Ecofer/edwj40uqhcgfqgkjbqnf.jpg', 1, 0, '2022-01-28 23:24:15', '2022-03-22 22:04:40', 'Ecofer/edwj40uqhcgfqgkjbqnf'),
(19, 20, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643576487/Ecofer/c794li2qjiwssbtegyw2.jpg', 1, 0, '2022-01-29 00:59:16', '2022-01-30 21:01:31', 'Ecofer/c794li2qjiwssbtegyw2'),
(20, 21, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643480742/z8r7nwhoy51hurhnmrb3.jpg', 1, 0, '2022-01-29 18:25:45', '2022-01-29 18:25:45', NULL),
(21, 22, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643482380/ocjldalqdx55use0hbq9.jpg', 1, 0, '2022-01-29 18:53:03', '2022-01-29 18:53:03', NULL),
(22, 23, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643482786/pdpzik8tq7ju3b6otaia.jpg', 1, 0, '2022-01-29 18:59:50', '2022-01-29 18:59:50', NULL),
(23, 24, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643483322/Ecofer/ncvhyerc4xasnqrbq6ba.jpg', 1, 0, '2022-01-29 19:08:45', '2022-01-29 19:08:45', NULL),
(24, 25, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643483633/Ecofer/productos/hvvwplyinqj3gfiqwpgv.jpg', 1, 0, '2022-01-29 19:13:57', '2022-01-29 19:13:57', NULL),
(25, 26, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643483827/v0vpg9ibxvte0fghmavi.png', 1, 0, '2022-01-29 19:17:11', '2022-01-29 19:17:11', NULL),
(26, 27, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643566688/esxtk5ceadpaqzor1meh.jpg', 1, 0, '2022-01-30 18:18:12', '2022-01-30 18:18:12', NULL),
(27, 28, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643566974/pz6vtv6mktf5uwlz6pdk.jpg', 1, 0, '2022-01-30 18:22:58', '2022-01-30 18:26:26', 'pz6vtv6mktf5uwlz6pdk'),
(28, 29, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643567242/kaq4nhixuey91xkxyvdj.jpg', 1, 0, '2022-01-30 18:27:27', '2022-01-30 18:27:27', 'kaq4nhixuey91xkxyvdj'),
(29, 30, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643672621/Ecofer/ngsooe9kvik0vqmcxnph.jpg', 1, 0, '2022-01-30 18:59:27', '2022-01-31 23:43:41', 'Ecofer/ngsooe9kvik0vqmcxnph'),
(30, 31, 'https://res.cloudinary.com/doof8plzr/image/upload/v1647987053/Ecofer/epb5iqhmfyg8fgfdij3g.jpg', 1, 0, '2022-01-30 19:29:04', '2022-03-22 22:10:58', 'Ecofer/epb5iqhmfyg8fgfdij3g'),
(31, 32, 'https://res.cloudinary.com/doof8plzr/image/upload/v1647986778/Ecofer/cxnvtemiclzdcdq8baxk.jpg', 1, 0, '2022-01-30 19:50:15', '2022-03-22 22:06:23', 'Ecofer/cxnvtemiclzdcdq8baxk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `id` int(4) NOT NULL,
  `codPostal` int(11) DEFAULT NULL,
  `contacto` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cuil` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `localidad` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombreFantasia` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `observacionesProv` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `razonSocial` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` int(45) DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `eliminado` int(11) NOT NULL DEFAULT 0,
  `tc_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`id`, `codPostal`, `contacto`, `cuil`, `direccion`, `localidad`, `nombreFantasia`, `observacionesProv`, `razonSocial`, `telefono`, `habilitado`, `eliminado`, `tc_create`, `ts_update`) VALUES
(0, 1432, 'jose', '20-26589652-2', 'av floresta 2536', 'flores', 'proveedor 55-cambio', '8 a 16 hs.', 'pepe jose', 116523325, 1, 0, '2022-01-08 17:20:55', '2022-01-17 00:28:42'),
(1, 1437, 'JOSE p.', '20-20258654-2', 'AV CENTENERA 2654', 'NUEVA POMPEYA', 'RULEMANES CENTENERA', '8 a 16 hs.', 'PEDRO JOSE ANTONIO', 1165239874, 1, 0, '2021-01-04 20:59:16', '2022-01-16 21:18:51'),
(2, 1405, 'JOSE', '20-25632569-2', 'D', 'POMPEYA', 'PROVEEDOR2', 'DFSDFSDFSDFSDF', 'PROVEEDOR2', 1162359874, 1, 0, '2021-01-10 14:40:41', '2021-01-10 14:40:41'),
(3, 1437, 'PEPE', '20235647892', 'AV CRUZ 2365', 'CABA', 'PROVEEDOR 3', 'DE 8 A 16 HS.', 'PROVEEDOR 3', 1164653258, 1, 0, '2022-01-08 17:12:26', '2022-01-08 17:12:26'),
(4, 1437, 'LUANA', '20256547895', 'matanza 1258', 'CABA', 'PROVEEDOR 4', '10 A 12 HS.', 'PROVEEDOR 4', 1146589752, 1, 0, '2022-01-08 17:17:17', '2022-01-08 17:17:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedoresimagen`
--

CREATE TABLE `proveedoresimagen` (
  `id` int(4) NOT NULL,
  `idProveedor` int(4) DEFAULT NULL,
  `uid` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `eliminado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `habilitado` int(5) NOT NULL DEFAULT 0,
  `eliminado` int(5) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`, `ts_create`, `ts_update`, `habilitado`, `eliminado`) VALUES
(1, 'Administrador', '2022-04-17 20:55:33', '2022-04-17 20:58:16', 0, 0),
(2, 'Support', '2022-04-17 20:55:33', '2022-04-17 20:58:52', 0, 0),
(3, 'Ventas', '2022-04-17 20:55:33', '2022-04-17 20:59:17', 0, 0),
(4, 'Facturacion', '2022-04-17 20:55:33', '2022-04-17 20:59:54', 0, 0),
(5, 'Contabilidad', '2022-04-17 20:55:33', '2022-04-17 21:00:14', 0, 0),
(6, 'Deposito', '2022-04-17 20:55:33', '2022-04-17 21:00:31', 0, 0),
(7, 'Transporte', '2022-04-17 21:07:12', '2022-04-17 21:07:12', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarealista`
--

CREATE TABLE `tarealista` (
  `id` int(4) NOT NULL,
  `tarea` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `direccion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `realiza` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idCliente` int(4) NOT NULL,
  `eliminado` int(11) NOT NULL DEFAULT 1,
  `habilitado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareaproceso`
--

CREATE TABLE `tareaproceso` (
  `id` int(4) NOT NULL,
  `tarea` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `direccion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `realiza` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idCliente` int(4) NOT NULL,
  `eliminado` int(11) NOT NULL DEFAULT 1,
  `habilitado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareaterminada`
--

CREATE TABLE `tareaterminada` (
  `id` int(4) NOT NULL,
  `tarea` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `direccion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `realiza` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idCliente` int(4) NOT NULL,
  `eliminado` int(11) NOT NULL DEFAULT 1,
  `habilitado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(4) NOT NULL,
  `idEmpresa` int(4) DEFAULT NULL,
  `idPersona` int(4) DEFAULT NULL,
  `confirmacionCorreo` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `role` tinyint(4) NOT NULL DEFAULT 0,
  `usuario` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `habilitado` int(4) NOT NULL DEFAULT 0,
  `eliminado` int(4) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `idEmpresa`, `idPersona`, `confirmacionCorreo`, `password`, `role`, `usuario`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(28, 24, 32, 'f5a8c8a0-1661-4f8a-b3ea-ef38451c1838', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 1, 'admin', 1, 0, '2022-01-07 01:51:15', '2022-01-07 02:12:20'),
(29, 25, 33, '56047cf2-086e-4774-aab3-27dc03574522', '7c4a8d09ca3762af61e59520943dc26494f8941b', 0, 'admin', 1, 0, '2022-01-07 01:53:15', '2022-01-07 01:53:15'),
(30, 26, 34, '07268504-b700-46e7-ad18-10767f848ede', '936a898b9784f2a79dc11f2c3cdabb4a59a5d4e4', 0, 'admin@gaston', 1, 0, '2022-01-07 01:58:33', '2022-01-07 01:58:33'),
(31, 27, 35, '01b94fd5-6a90-433c-8e7a-ef6e4b33d6f1', '0911483fbd2316af73cc4944e6f6a4e38b168a1f', 0, 'sebaM1978', 1, 0, '2022-01-07 02:08:46', '2022-01-07 02:09:18'),
(32, 28, 36, '113a5d29-881b-4c7b-8c29-3ebdd300c3d2', 'dde3e75c5f9c775f7259f4eba2c1b53f7eb665d7', 0, 'sminotti', 0, 0, '2022-01-30 23:41:49', '2022-01-30 23:41:49'),
(33, 29, 37, 'ed06ef88-0623-46ba-b3c1-564908458f77', 'dde3e75c5f9c775f7259f4eba2c1b53f7eb665d7', 0, 'sminotti', 1, 0, '2022-01-30 23:49:22', '2022-01-30 23:49:56'),
(34, 30, 38, 'f89b20a5-57ad-4423-a4e8-91c0c54c45d7', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 0, 'sebaAdmin', 0, 0, '2022-01-31 00:04:49', '2022-01-31 00:04:49'),
(35, 31, 39, '46f051b7-b1be-4c39-8742-0501e58bde5d', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 0, 'sebaAdmin', 1, 0, '2022-01-31 00:07:18', '2022-01-31 00:07:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariosimagen`
--

CREATE TABLE `usuariosimagen` (
  `id` int(4) NOT NULL,
  `idUsuarios` int(4) DEFAULT NULL,
  `uid` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idCloudinary` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuariosimagen`
--

INSERT INTO `usuariosimagen` (`id`, `idUsuarios`, `uid`, `habilitado`, `eliminado`, `ts_create`, `ts_update`, `idCloudinary`) VALUES
(2, 28, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643587489/Ecofer/jzbeprtswiqhfrey2fr3.jpg', 1, 0, '2022-01-07 01:51:15', '2022-03-28 22:31:08', 'Ecofer/jzbeprtswiqhfrey2fr3'),
(3, 29, 'd8118c0a-3741-4792-b8c8-fc80447e20ff.jpeg', 1, 0, '2022-01-07 01:53:15', '2022-01-07 01:53:15', NULL),
(4, 30, 'e54e5c4a-60d7-4c6b-928e-d2e6f4efbb7d.jpeg', 1, 0, '2022-01-07 01:58:33', '2022-01-07 01:58:33', NULL),
(5, 31, 'cd4b52db-bf56-4a31-94cc-16b26e6e60fc.png', 1, 0, '2022-01-07 02:08:46', '2022-01-07 02:08:46', NULL),
(6, 34, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643587489/Ecofer/jzbeprtswiqhfrey2fr3.jpg', 1, 0, '2022-01-31 00:04:49', '2022-01-31 00:04:49', 'Ecofer/jzbeprtswiqhfrey2fr3'),
(7, 35, 'https://res.cloudinary.com/doof8plzr/image/upload/v1643587638/Ecofer/nfjv3tihcu7njewjgiry.jpg', 1, 0, '2022-01-31 00:07:18', '2022-01-31 00:07:18', 'Ecofer/nfjv3tihcu7njewjgiry');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(4) NOT NULL,
  `factura` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idCliente` int(4) DEFAULT NULL,
  `idProducto` int(4) DEFAULT NULL,
  `impuestos` int(11) DEFAULT NULL,
  `iva` int(11) DEFAULT NULL,
  `montoBruto` int(11) DEFAULT NULL,
  `montoNeto` int(11) DEFAULT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carritocompras`
--
ALTER TABLE `carritocompras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoriaproductos`
--
ALTER TABLE `categoriaproductos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoriaventas`
--
ALTER TABLE `categoriaventas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientesimagen`
--
ALTER TABLE `clientesimagen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productosimagen`
--
ALTER TABLE `productosimagen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedoresimagen`
--
ALTER TABLE `proveedoresimagen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idPersona` (`idPersona`),
  ADD UNIQUE KEY `idEmpresa` (`idEmpresa`);

--
-- Indices de la tabla `usuariosimagen`
--
ALTER TABLE `usuariosimagen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carritocompras`
--
ALTER TABLE `carritocompras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoriaproductos`
--
ALTER TABLE `categoriaproductos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categoriaventas`
--
ALTER TABLE `categoriaventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientesimagen`
--
ALTER TABLE `clientesimagen`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `productosimagen`
--
ALTER TABLE `productosimagen`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `proveedoresimagen`
--
ALTER TABLE `proveedoresimagen`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `usuariosimagen`
--
ALTER TABLE `usuariosimagen`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
