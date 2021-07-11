-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Jun-2021 às 02:07
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `scpce`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `arquiteto`
--

CREATE TABLE `arquiteto` (
  `idArquiteto` int(11) NOT NULL,
  `nome` varchar(250) DEFAULT NULL,
  `sexo` varchar(250) DEFAULT NULL,
  `anoExperiencia` varchar(250) DEFAULT NULL,
  `provincia` varchar(250) DEFAULT NULL,
  `municipio` varchar(250) DEFAULT NULL,
  `rua` varchar(250) DEFAULT NULL,
  `numero` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int(11) NOT NULL,
  `nome` varchar(250) DEFAULT NULL,
  `sexo` varchar(250) DEFAULT NULL,
  `privado` tinyint(1) DEFAULT NULL,
  `provincia` varchar(250) DEFAULT NULL,
  `municipio` varchar(250) DEFAULT NULL,
  `rua` varchar(250) DEFAULT NULL,
  `numero` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estrada`
--

CREATE TABLE `estrada` (
  `idEstrada` int(11) NOT NULL,
  `nome` varchar(250) DEFAULT NULL,
  `descricao` varchar(550) DEFAULT NULL,
  `orcamento` varchar(250) DEFAULT NULL,
  `codigoIdentificacao` varchar(250) DEFAULT NULL,
  `dataInicio` varchar(250) DEFAULT NULL,
  `duracao` varchar(250) DEFAULT NULL,
  `percentualConformidade` int(250) DEFAULT NULL,
  `ferroviasEstradas` varchar(250) DEFAULT NULL,
  `comprimento` int(250) DEFAULT NULL,
  `dentroProvincia` tinyint(1) DEFAULT NULL,
  `estado` varchar(250) NOT NULL,
  `clienteNome` varchar(250) NOT NULL,
  `clienteSexo` varchar(250) NOT NULL,
  `clientePrivado` tinyint(1) NOT NULL,
  `clienteProvincia` varchar(250) NOT NULL,
  `clienteMunicipio` varchar(250) NOT NULL,
  `clienteRua` varchar(250) NOT NULL,
  `clienteNumero` varchar(250) NOT NULL,
  `arquitetoNome` varchar(250) NOT NULL,
  `arquitetoSexo` varchar(250) NOT NULL,
  `arquitetoAnoExperiencia` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `estrada`
--

INSERT INTO `estrada` (`idEstrada`, `nome`, `descricao`, `orcamento`, `codigoIdentificacao`, `dataInicio`, `duracao`, `percentualConformidade`, `ferroviasEstradas`, `comprimento`, `dentroProvincia`, `estado`, `clienteNome`, `clienteSexo`, `clientePrivado`, `clienteProvincia`, `clienteMunicipio`, `clienteRua`, `clienteNumero`, `arquitetoNome`, `arquitetoSexo`, `arquitetoAnoExperiencia`) VALUES
(4, ' Cazenga Malanje', 'Recontrucao da Vila de Viana', '200', 'KMZLI', '22/07/2022', '4', 40, 'Ferrovia', 250, 1, '', 'Renata Barbosa', 'Femenino', 0, 'Malanje', 'Viana', 'Ingolo', 'Ingolo', 'Pedro Nsoko', 'Masculino', ''),
(6, 'Estrada Luanda Benguela', 'Estrada que vai ligar Luanda Benguela', 'Orcamento', 'Codigo de Identificacao', '2021-06-23', 'Duracao', 0, 'Estrada', 1, 1, '', 'Florencia Macaia', 'Florencia Macaia', 1, 'Uige', 'Candombe', 'Nzawa', '11', 'Vava Pedro', 'Vava Pedro', '3'),
(7, 'Estrada Luanda Benguela', 'Estrada que vai ligar Luanda Benguela', 'Orcamento', 'Codigo de Identificacao', '2015-06-09', 'Duracao', 0, 'Estrada', 1, 1, '', 'Florencia Macaia', 'Florencia Macaia', 1, 'Uige', 'Candombe', 'Nzawa', '11', 'Vava Pedro', 'Vava Pedro', '3'),
(8, 'Nome da Estrada', 'Descricao da obra', '40000', '4ommm9', '2015-06-16', '4', 11, 'Estrada', 200, 1, '', 'Maria Jose', 'Femenino', 1, 'Luanda', 'Rangel', 'KM 1500', '4', 'Eliseu Salomao', 'Masculino', '10'),
(12, 'Elda Neto', 'Restauracao da casa neto', '4444', 'Neto123', '2021-06-01', '45', 13, 'Estrada', 1270, 1, '', 'Francisco Miguel', 'Masculino', 0, 'Luanda', 'Kilamba Kiaxe', 'Avenida Diolanda', 'Avenida Diolanda', 'Rosario Eulalia', 'Masculino', '4'),
(13, '', '', '', '', '0000-00-00', '', 0, '', 0, 0, '', '', 'ClienteSexo', 0, '', '', '', '', '', '', ''),
(14, '', '', '', '', '2021-06-17', '', 0, '', 0, 0, '', '', 'ClienteSexo', 0, '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `predios`
--

CREATE TABLE `predios` (
  `idPredio` int(11) NOT NULL,
  `nome` varchar(250) DEFAULT NULL,
  `descricao` varchar(550) DEFAULT NULL,
  `orcamento` int(250) DEFAULT NULL,
  `codigoIdentificacao` varchar(250) DEFAULT NULL,
  `dataInicio` varchar(250) DEFAULT NULL,
  `duracao` int(250) DEFAULT NULL,
  `percentualConformidade` int(250) DEFAULT NULL,
  `tipo` varchar(250) DEFAULT NULL,
  `alturaMaxima` varchar(250) DEFAULT NULL,
  `provincia` varchar(250) DEFAULT NULL,
  `municipio` varchar(250) DEFAULT NULL,
  `rua` varchar(250) DEFAULT NULL,
  `numero` varchar(250) DEFAULT NULL,
  `estado` varchar(250) NOT NULL,
  `clienteNome` varchar(250) NOT NULL,
  `clienteSexo` varchar(250) NOT NULL,
  `clientePrivado` varchar(250) NOT NULL,
  `clienteProvincia` varchar(250) NOT NULL,
  `clienteMunicipio` varchar(250) NOT NULL,
  `clienteRua` varchar(250) NOT NULL,
  `clienteNumero` varchar(250) NOT NULL,
  `arquitetoNome` varchar(250) NOT NULL,
  `arquitetoSexo` varchar(250) NOT NULL,
  `arquitetoAnoExperiencia` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `predios`
--

INSERT INTO `predios` (`idPredio`, `nome`, `descricao`, `orcamento`, `codigoIdentificacao`, `dataInicio`, `duracao`, `percentualConformidade`, `tipo`, `alturaMaxima`, `provincia`, `municipio`, `rua`, `numero`, `estado`, `clienteNome`, `clienteSexo`, `clientePrivado`, `clienteProvincia`, `clienteMunicipio`, `clienteRua`, `clienteNumero`, `arquitetoNome`, `arquitetoSexo`, `arquitetoAnoExperiencia`) VALUES
(1, ' Viana Limpa', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 45, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', 'true', 'true', 'Viana', 'Ingolo', 'Ingolo', 'Pedro Nsoko', 'Masculino', 4),
(2, 'Toree da Liga da Justica', 'Lixo', 20, '000FR11', '20/03/2022', 4, 10, 'Escritorio', 'Estrada', 'Uige', 'Belas', 'Frente ao Kero', '945186405', '', '0', '0', '0', '0', '0', '099', '099', '0', '0', 0),
(3, 'Estrada de Luanda', 'Estrada de Catete', 20, '000FR11', '20/03/2022', 4, 10, 'Escritorio', 'Estrada', 'Uige', 'Belas', 'Frente ao Kero', '945186405', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(5, 'nome', 'descricao', 0, 'codigoIdentificacao', 'dataInicio', 0, 0, 'tipo', 'alturaMaxima', 'provincia', 'municipio', 'rua', 'numero', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(6, 'nome', 'descricao', 0, 'codigoIdentificacao', 'dataInicio', 0, 0, 'tipo', 'alturaMaxima', 'provincia', 'municipio', 'rua', 'numero', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(8, 'nome1', 'descricao1', 0, 'codigoIdentificacao', 'dataInicio', 0, 0, 'tipo', 'alturaMaxima', 'provincia', 'municipio', 'rua', 'numero', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(9, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 1300, 0, 'tipo', 'alturaMaxima', 'provincia', 'Cazenga', 'rua', 'numero', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(10, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 200, 0, 'tipo1', 'alturaMaxima1', 'provincia', 'Cazenga', 'rua', 'numero', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(11, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'municipio', 'rua', 'numero', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(12, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(13, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(14, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(15, ' Cazenga Limpa', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', 'true', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(16, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 50, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', '0', '0', '1', '0', '0', '0', '0', '0', '0', 0),
(17, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', '0', '0', '1', '0', '0', '0', '0', '0', '0', 0),
(18, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0),
(19, ' Viana Limpa', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', 'true', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(20, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', 'Florencia Macaia', 'Femenino', '1', 'clienteProvincia2', 'clienteMunicipio2', 'clienteRua2', 'clienteNumero2', 'arquitetoNome2', 'arquitetoSexo2', 0),
(21, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', 'Florencia Macaia', 'Femenino', '1', 'Uige', 'Candombe', 'Nzawa', 'clienteNumero2', 'arquitetoNome2', 'arquitetoSexo2', 0),
(22, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', 'Florencia Macaia', 'Femenino', '1', 'Uige', 'Candombe', 'Nzawa', '11', 'arquitetoNome2', 'arquitetoSexo2', 0),
(23, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', 'Florencia Macaia', 'Femenino', '1', 'Uige', 'Candombe', 'Nzawa', '11', 'arquitetoNome2', 'arquitetoSexo2', 0),
(24, 'nome1', 'descricao1', 0, 'codigoIdentificacao1', 'dataInicio1', 0, 0, 'tipo1', 'alturaMaxima1', 'Uige', 'Candombe', 'Nzawa', '11', '', 'Florencia Macaia', 'Femenino', '1', 'Uige', 'Candombe', 'Nzawa', '11', 'Vava Pedro', 'Masculino', 3),
(26, ' Viana Limpa', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', 'true', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(27, ' Viana Limpa', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', 'true', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(28, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(29, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(30, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(31, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(32, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(33, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(34, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(35, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(36, 'Ginguba', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4),
(37, 'Xinanananna', 'Recontrucao da Vila de Viana', 200, 'KMZLI', ' 22/07/2022', 4, 40, 'Normal', '250', 'Luanda', 'Viana', 'Suja', '25', '', 'Renata Barbosa', 'Femenino', '1', 'Malanje', 'Viana', 'Ingolo', '045500055', 'Pedro Nsoko', 'Masculino', 4);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `arquiteto`
--
ALTER TABLE `arquiteto`
  ADD PRIMARY KEY (`idArquiteto`);

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`);

--
-- Índices para tabela `estrada`
--
ALTER TABLE `estrada`
  ADD PRIMARY KEY (`idEstrada`);

--
-- Índices para tabela `predios`
--
ALTER TABLE `predios`
  ADD PRIMARY KEY (`idPredio`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `arquiteto`
--
ALTER TABLE `arquiteto`
  MODIFY `idArquiteto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `estrada`
--
ALTER TABLE `estrada`
  MODIFY `idEstrada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `predios`
--
ALTER TABLE `predios`
  MODIFY `idPredio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
