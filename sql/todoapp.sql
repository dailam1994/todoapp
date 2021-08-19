-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 19, 2021 at 04:29 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todoapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `todocategory`
--

CREATE TABLE `todocategory` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `todoitem`
--

CREATE TABLE `todoitem` (
  `id` int(11) NOT NULL,
  `catid` int(11) NOT NULL,
  `item` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `todouser`
--

CREATE TABLE `todouser` (
  `id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(256) NOT NULL,
  `email` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `todouser`
--

INSERT INTO `todouser` (`id`, `username`, `password`, `email`) VALUES
(1, 'ashcatchem', 'catchem@ll', 'ashcatchem@ashcatchem.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todocategory`
--
ALTER TABLE `todocategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `todoitem`
--
ALTER TABLE `todoitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catid` (`catid`);

--
-- Indexes for table `todouser`
--
ALTER TABLE `todouser`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todocategory`
--
ALTER TABLE `todocategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `todoitem`
--
ALTER TABLE `todoitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `todouser`
--
ALTER TABLE `todouser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `todocategory`
--
ALTER TABLE `todocategory`
  ADD CONSTRAINT `todocategory_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `todouser` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `todoitem`
--
ALTER TABLE `todoitem`
  ADD CONSTRAINT `todoitem_ibfk_1` FOREIGN KEY (`catid`) REFERENCES `todocategory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
