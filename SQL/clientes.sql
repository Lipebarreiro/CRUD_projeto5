-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Fev-2023 às 20:55
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
-- Banco de dados: `banco`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id_do_cliente` int(11) NOT NULL,
  `nome_cliente` varchar(30) NOT NULL,
  `cpf` bigint(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefone` bigint(20) NOT NULL,
  `endereco_cliente` varchar(30) NOT NULL,
  `consorcio_cliente` int(11) NOT NULL,
  `emprestimo_cliente` int(11) NOT NULL,
  `cartao_cliente` int(11) NOT NULL,
  `agencia_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id_do_cliente`, `nome_cliente`, `cpf`, `email`, `telefone`, `endereco_cliente`, `consorcio_cliente`, `emprestimo_cliente`, `cartao_cliente`, `agencia_cliente`) VALUES
(1, 'Felipe Barreiro', 15935786252, 'lipebarreiro3@gmail.com', 21999998888, 'Madureira', 5, 13, 565, 154),
(2, 'Maria Eduarda', 46575315958, 'eduarda@gmail.com', 21987556145, 'Guadalupe', 0, 0, 0, 105),
(3, 'Breno Ricardo', 24986135746, 'breno@gmail.com', 21840628154, 'Taquara', 0, 0, 0, 205);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_do_cliente`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_do_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
