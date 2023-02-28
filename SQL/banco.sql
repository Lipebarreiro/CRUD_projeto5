-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Fev-2023 às 21:43
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
-- Estrutura da tabela `agencia`
--

CREATE TABLE `agencia` (
  `id_da_agencia` int(11) NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `agencia`
--

INSERT INTO `agencia` (`id_da_agencia`, `endereco`, `email`, `telefone`) VALUES
(1, 'ffffff', 'cccc', 'hhhh');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cartao`
--

CREATE TABLE `cartao` (
  `iddocartao` int(11) NOT NULL,
  `coddeseg` int(11) NOT NULL,
  `dataexp` int(11) NOT NULL,
  `tipodecartao` int(1) NOT NULL,
  `limitecartao` int(100) NOT NULL,
  `saldocartao` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `cartao`
--

INSERT INTO `cartao` (`iddocartao`, `coddeseg`, `dataexp`, `tipodecartao`, `limitecartao`, `saldocartao`) VALUES
(6, 2243, 2243, 243, 4334, 34343),
(8, 0, 0, 0, 0, 0),
(9, 0, 0, 0, 0, 0),
(10, 0, 0, 0, 0, 0),
(11, 22, 2, 2, 2, 2),
(12, 12344, 1221, 1, 122222, 222),
(15, 0, 0, 0, 0, 0),
(16, 3423, 1, 3132, 32323, 3232),
(18, 213, 23, 3, 23, 32),
(19, 32, 32, 3, 23, 232),
(20, 3232, 32, 0, 232, 3),
(21, 32, 3, 3, 23, 23);

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
  `id_do_consorcio` int(11) NOT NULL,
  `id_do_emprestimo` int(11) NOT NULL,
  `id_do_cartao` int(11) NOT NULL,
  `id_da_agencia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id_do_cliente`, `nome_cliente`, `cpf`, `email`, `telefone`, `endereco_cliente`, `id_do_consorcio`, `id_do_emprestimo`, `id_do_cartao`, `id_da_agencia`) VALUES
(1, 'Felipe Barreiro', 15935786252, 'lipebarreiro3@gmail.com', 21999998888, 'Madureira', 5, 13, 565, 155),
(2, 'Maria Eduarda', 46575315958, 'eduarda@gmail.com', 21987556145, 'Guadalupe', 65, 24, 21, 105),
(3, 'Breno Ricardo', 24986135746, 'breno@gmail.com', 21840628154, 'Taquara', 75, 42, 81, 205),
(4, 'Kaylane Mattos', 15935745685, 'kaylane@gmail.com', 21972465914, 'Anchieta', 21, 45, 62, 215);

-- --------------------------------------------------------

--
-- Estrutura da tabela `emprestimo`
--

CREATE TABLE `emprestimo` (
  `id_do_emprestimo` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `valor_emprestimo` bigint(20) NOT NULL,
  `parcelas` int(11) NOT NULL,
  `juros` int(11) NOT NULL,
  `data` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `emprestimo`
--

INSERT INTO `emprestimo` (`id_do_emprestimo`, `nome`, `valor_emprestimo`, `parcelas`, `juros`, `data`) VALUES
(2, 'duda', 45, 3, 10, 1120),
(3, 'undefined', 0, 0, 0, 0),
(4, 'undefined', 0, 0, 0, 0),
(5, 'undefined', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `id_funcionario` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `cargo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `agencia`
--
ALTER TABLE `agencia`
  ADD PRIMARY KEY (`id_da_agencia`);

--
-- Índices para tabela `cartao`
--
ALTER TABLE `cartao`
  ADD PRIMARY KEY (`iddocartao`);

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_do_cliente`);

--
-- Índices para tabela `emprestimo`
--
ALTER TABLE `emprestimo`
  ADD PRIMARY KEY (`id_do_emprestimo`);

--
-- Índices para tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`id_funcionario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agencia`
--
ALTER TABLE `agencia`
  MODIFY `id_da_agencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `cartao`
--
ALTER TABLE `cartao`
  MODIFY `iddocartao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_do_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `emprestimo`
--
ALTER TABLE `emprestimo`
  MODIFY `id_do_emprestimo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  MODIFY `id_funcionario` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
