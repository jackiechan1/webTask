-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-12-04 16:32:35
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `baidunews`
--

CREATE TABLE `baidunews` (
  `id` int(11) NOT NULL COMMENT '自动增长',
  `newstype` int(20) NOT NULL,
  `newsimg` char(200) NOT NULL,
  `newstitle` char(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `baidunews`
--

INSERT INTO `baidunews` (`id`, `newstype`, `newsimg`, `newstitle`, `newstime`, `newssrc`) VALUES
(1, 0, 'img/1.jpg', '习近平会美国前国务卿基辛格', '2016-12-15 00:00:00', '新闻来源'),
(2, 0, 'img/2.jpg', '习近平：扎实推进军队规模结构和力量编成改革', '2016-12-07 00:00:00', '热点');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baidunews`
--
ALTER TABLE `baidunews`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `baidunews`
--
ALTER TABLE `baidunews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
