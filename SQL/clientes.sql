-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Fev-2023 às 03:04
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `resilia_dados`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `idade` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefone` bigint(20) NOT NULL,
  `endereco` varchar(30) NOT NULL,
  `numero_da_conta` int(11) NOT NULL,
  `tipo_de_conta` varchar(20) NOT NULL,
  `agencia` int(11) NOT NULL,
  `gerente` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `idade`, `email`, `telefone`, `endereco`, `numero_da_conta`, `tipo_de_conta`, `agencia`, `gerente`) VALUES
(1, 'Felipe', 22, 'lipebarreiro3@gmail.com', 21999998888, 'Madureira', 25895145, 'Poupança', 154, 'Miguel'),
(2, 'Maria Eduarda', 18, 'eduarda@gmail.com', 21987556145, 'Guadalupe', 65745986, 'Corrente', 105, 'Carlos'),
(3, 'Breno', 21, 'breno@gmail.com', 21840628154, 'Taquara', 65795145, 'Salário', 205, 'Antônio'),
(4, 'Kaylane', 19, 'kay22@gmail.com', 21574386174, 'Anchieta', 18074937, 'Poupança', 781, 'Roberto');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
