-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2021 at 01:10 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_instagram`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `cid` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `timestamp` bigint(50) NOT NULL,
  `message` varchar(500) NOT NULL,
  `type` varchar(50) NOT NULL,
  `isSeen` int(11) NOT NULL,
  `messageReference` int(11) NOT NULL,
  `message_delete_sender` int(11) NOT NULL,
  `message_delete_receiver` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`cid`, `senderId`, `receiverId`, `timestamp`, `message`, `type`, `isSeen`, `messageReference`, `message_delete_sender`, `message_delete_receiver`) VALUES
(327, 47, 39, 1640762003513, 'a', 'text', 0, 0, 0, 0),
(328, 47, 39, 1640762005279, 'b', 'text', 0, 0, 0, 0),
(329, 39, 47, 1640762006696, 'a', 'text', 0, 0, 0, 0),
(330, 39, 47, 1640762009974, 'd', 'text', 0, 0, 0, 0),
(331, 39, 47, 1640762011070, 'e', 'text', 0, 0, 0, 0),
(332, 39, 47, 1640762012783, 'g', 'text', 0, 0, 0, 0),
(333, 47, 39, 1640762016040, 'e', 'text', 0, 0, 0, 0),
(334, 47, 39, 1640762040106, 'Halkbar k xa', 'text', 0, 0, 0, 0),
(335, 39, 47, 1640762044903, 'thik xa', 'text', 0, 0, 0, 0),
(336, 47, 39, 1640762049513, 'eaa', 'text', 0, 0, 0, 0),
(337, 39, 47, 1640762052432, 'umm', 'text', 0, 0, 0, 0),
(338, 39, 47, 1640762057607, 'ani aru', 'text', 0, 0, 0, 0),
(339, 47, 39, 1640762064639, 'aru ta k vanni rw\n', 'text', 0, 0, 0, 0),
(340, 39, 47, 1640762075679, 'a b c val maa kaa docx\n', 'text', 0, 0, 0, 0),
(341, 47, 39, 1640762081503, 'oe tori', 'text', 0, 0, 0, 0),
(342, 39, 47, 1640762086583, 'k vaio bhaai', 'text', 0, 0, 0, 0),
(343, 47, 39, 1640762090760, 'lol', 'text', 0, 0, 0, 0),
(344, 39, 47, 1640762094542, 'k lol', 'text', 0, 0, 0, 0),
(345, 47, 39, 1640762101384, 'tori bhai', 'text', 0, 0, 0, 0),
(346, 39, 47, 1640762105222, 'ta tori', 'text', 0, 0, 0, 0),
(347, 47, 39, 1640762117896, 'lala thik xa malai nai tori van', 'text', 0, 0, 0, 0),
(348, 39, 47, 1640762128719, 'ok done I will say you tori', 'text', 0, 0, 0, 0),
(349, 47, 39, 1640762135871, 'thik xa ta nee\n', 'text', 0, 0, 0, 0),
(350, 39, 47, 1640763484093, 'a', 'text', 0, 0, 0, 0),
(351, 39, 47, 1640763488243, 'e', 'text', 0, 0, 0, 0),
(352, 39, 47, 1640763631629, 'Hii', 'text', 0, 0, 0, 0),
(353, 39, 47, 1640763654101, 'How are you?', 'text', 0, 0, 0, 0),
(354, 39, 47, 1640763667062, 'Can I help you?', 'text', 0, 0, 0, 0),
(355, 47, 39, 1640764289734, 'Hi\n', 'text', 0, 0, 0, 0),
(356, 47, 39, 1640764300180, 'How are you?', 'text', 0, 0, 0, 0),
(357, 47, 39, 1640764358174, 'What going on?', 'text', 0, 0, 0, 0),
(358, 39, 47, 1640764370669, 'Who are you?', 'text', 0, 0, 0, 0),
(359, 39, 47, 1640764898276, 'ahfkdsaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 'text', 0, 0, 0, 0),
(360, 39, 47, 1640765119555, 'fdsafadf\nfdsa\nfdsa', 'text', 0, 0, 0, 0),
(361, 47, 39, 1640768483294, 'fsdafdsafa', 'text', 0, 0, 0, 0),
(362, 47, 39, 1640768954085, 'This is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.', 'text', 0, 0, 0, 0),
(363, 47, 39, 1640768979612, 'This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.', 'text', 0, 0, 0, 0),
(364, 47, 39, 1640769269333, 'fdsafs\ndsa', 'text', 0, 0, 0, 0),
(365, 39, 23, 1640771414608, 'a', 'text', 0, 0, 0, 0),
(366, 39, 47, 1640771422968, 'a', 'text', 0, 0, 0, 0),
(367, 50, 47, 1640850109939, 'Hey II', 'text', 0, 0, 0, 0),
(368, 50, 47, 1640850128697, 'How are you?', 'text', 0, 0, 0, 0),
(369, 47, 41, 1640910461894, 'are', 'text', 0, 0, 0, 0),
(370, 47, 41, 1640910469400, 'bhai', 'text', 0, 0, 0, 0),
(371, 47, 41, 1640910475317, 'k garexa re', 'text', 0, 0, 0, 0),
(372, 41, 47, 1640910653470, 'are bhai', 'text', 0, 0, 0, 0),
(373, 41, 47, 1640916179643, 'oe mula', 'text', 0, 0, 0, 0),
(374, 47, 41, 1640916186340, 'bol naw\n', 'text', 0, 0, 0, 0),
(375, 41, 47, 1640916190616, 'k garxa re', 'text', 0, 0, 0, 0),
(376, 41, 47, 1640916200076, 'keti herera basexa', 'text', 0, 0, 0, 0),
(377, 47, 41, 1640916201513, 'basdai xa rey', 'text', 0, 0, 0, 0),
(378, 41, 47, 1640916272657, 'bhai', 'text', 0, 0, 0, 0),
(379, 47, 41, 1640916276649, 'bol naw\n', 'text', 0, 0, 0, 0),
(380, 41, 47, 1640916277753, 'bol nah', 'text', 0, 0, 0, 0),
(381, 41, 47, 1640916291183, 'dekh nah', 'text', 0, 0, 0, 0),
(382, 41, 47, 1640916380367, 'are', 'text', 0, 0, 0, 0),
(383, 41, 47, 1640916398206, 'bhai', 'text', 0, 0, 0, 0),
(384, 47, 41, 1640916403322, 'k gardai xa rey', 'text', 0, 0, 0, 0),
(385, 41, 47, 1640916408014, 'k garexa re', 'text', 0, 0, 0, 0),
(386, 47, 41, 1640916409243, 'bol naw tori', 'text', 0, 0, 0, 0),
(387, 41, 47, 1640916423286, 'bhai', 'text', 0, 0, 0, 0),
(388, 47, 41, 1640916425562, 'k gardai xa rey bol naw', 'text', 0, 0, 0, 0),
(389, 47, 41, 1640916430508, 'oe bhai', 'text', 0, 0, 0, 0),
(390, 47, 41, 1640916437630, 'oii tori', 'text', 0, 0, 0, 0),
(391, 47, 41, 1640916444876, 'k gardai xa rey', 'text', 0, 0, 0, 0),
(392, 47, 41, 1640916449621, 'bol naw', 'text', 0, 0, 0, 0),
(393, 47, 41, 1640916456627, 'ae jaldi bol naw', 'text', 0, 0, 0, 0),
(394, 47, 41, 1640916468765, 'ae kidar chala gaya', 'text', 0, 0, 0, 0),
(395, 41, 47, 1640916471818, 'bhai mathi chal nah', 'text', 0, 0, 0, 0),
(396, 47, 41, 1640916490994, 'ae sunil bakwa', 'text', 0, 0, 0, 0),
(397, 47, 41, 1640916594326, 'ae bol naw', 'text', 0, 0, 0, 0),
(398, 47, 35, 1640951594754, 'Hello', 'text', 0, 0, 0, 0),
(399, 35, 47, 1640951600228, 'Hi', 'text', 0, 0, 0, 0),
(400, 35, 47, 1640951607629, '????', 'text', 0, 0, 0, 0),
(401, 35, 47, 1640951619976, 'How are you?', 'text', 0, 0, 0, 0),
(402, 47, 35, 1640951641082, 'I am fine.\n', 'text', 0, 0, 0, 0),
(403, 47, 35, 1640951646313, 'and U', 'text', 0, 0, 0, 0),
(404, 35, 47, 1640951680301, 'I am also  fine ', 'text', 0, 0, 0, 0),
(405, 47, 35, 1640951687627, 'oh', 'text', 0, 0, 0, 0),
(406, 35, 47, 1640951692757, 'Umm', 'text', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `timestamp` bigint(11) NOT NULL,
  `isModified` tinyint(4) NOT NULL,
  `comment_type` int(11) NOT NULL,
  `comment_content` text NOT NULL,
  `parentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`commentId`, `postId`, `userId`, `timestamp`, `isModified`, `comment_type`, `comment_content`, `parentId`) VALUES
(1, 69, 47, 1640939139528, 0, 0, 'a', 0),
(2, 69, 47, 1640939169464, 0, 0, 'What is this?', 0),
(3, 69, 47, 1640939207737, 0, 0, 'Why this type of post?', 0),
(4, 67, 47, 1640940508538, 0, 0, 'WOW', 0),
(5, 67, 47, 1640940566126, 0, 0, 'Nice', 0),
(6, 71, 35, 1640951761751, 0, 0, 'Wow', 0);

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `fid` int(11) NOT NULL,
  `followed_by` int(11) NOT NULL,
  `followed_to` int(11) NOT NULL,
  `timestamp` bigint(11) NOT NULL,
  `isFollowRequest` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`fid`, `followed_by`, `followed_to`, `timestamp`, `isFollowRequest`) VALUES
(10, 24, 20, 2147483647, 0),
(11, 24, 21, 2147483647, 0),
(16, 19, 24, 2147483647, 0),
(35, 24, 25, 2147483647, 0),
(38, 27, 24, 2147483647, 0),
(39, 27, 18, 2147483647, 0),
(41, 24, 22, 2147483647, 0),
(45, 24, 19, 2147483647, 1),
(50, 24, 27, 2147483647, 0),
(51, 31, 29, 2147483647, 0),
(54, 32, 24, 2147483647, 0),
(60, 33, 20, 2147483647, 0),
(61, 33, 19, 2147483647, 1),
(62, 33, 22, 2147483647, 0),
(63, 33, 24, 2147483647, 0),
(64, 33, 27, 2147483647, 0),
(65, 33, 31, 2147483647, 0),
(66, 34, 32, 2147483647, 0),
(68, 34, 33, 2147483647, 0),
(69, 35, 34, 2147483647, 0),
(70, 36, 34, 2147483647, 0),
(71, 36, 35, 2147483647, 0),
(75, 37, 34, 2147483647, 0),
(76, 37, 35, 2147483647, 0),
(79, 37, 38, 2147483647, 0),
(80, 38, 34, 2147483647, 0),
(82, 38, 35, 2147483647, 0),
(83, 38, 36, 2147483647, 0),
(85, 38, 32, 2147483647, 0),
(86, 39, 28, 2147483647, 0),
(87, 39, 29, 2147483647, 0),
(88, 39, 30, 2147483647, 0),
(89, 39, 31, 2147483647, 0),
(90, 39, 32, 2147483647, 0),
(91, 39, 33, 2147483647, 0),
(92, 39, 38, 2147483647, 0),
(93, 40, 33, 2147483647, 0),
(94, 40, 32, 2147483647, 0),
(95, 40, 31, 2147483647, 0),
(96, 40, 30, 2147483647, 0),
(97, 40, 29, 2147483647, 0),
(98, 40, 28, 2147483647, 0),
(99, 40, 25, 2147483647, 0),
(100, 40, 24, 2147483647, 0),
(101, 40, 23, 2147483647, 0),
(102, 40, 22, 2147483647, 0),
(103, 40, 21, 2147483647, 0),
(104, 40, 26, 2147483647, 0),
(105, 40, 27, 2147483647, 0),
(106, 40, 34, 2147483647, 0),
(107, 40, 35, 2147483647, 0),
(108, 40, 36, 2147483647, 0),
(109, 40, 38, 2147483647, 0),
(110, 34, 29, 2147483647, 0),
(111, 34, 30, 2147483647, 0),
(113, 34, 41, 2147483647, 0),
(116, 34, 42, 2147483647, 0),
(117, 45, 44, 2147483647, 0),
(118, 45, 43, 2147483647, 0),
(119, 45, 42, 2147483647, 0),
(120, 45, 41, 2147483647, 0),
(122, 45, 40, 2147483647, 0),
(123, 45, 39, 2147483647, 0),
(124, 45, 19, 2147483647, 1),
(125, 45, 20, 2147483647, 0),
(126, 45, 21, 2147483647, 0),
(127, 45, 22, 2147483647, 0),
(128, 45, 23, 2147483647, 0),
(129, 45, 25, 2147483647, 0),
(130, 45, 26, 2147483647, 0),
(131, 45, 27, 2147483647, 0),
(132, 45, 28, 2147483647, 0),
(133, 45, 29, 2147483647, 0),
(134, 44, 18, 2147483647, 0),
(135, 44, 23, 2147483647, 0),
(136, 45, 31, 2147483647, 0),
(137, 44, 22, 2147483647, 0),
(138, 44, 21, 2147483647, 0),
(139, 44, 20, 2147483647, 0),
(140, 45, 33, 2147483647, 0),
(141, 45, 34, 2147483647, 0),
(142, 45, 37, 2147483647, 0),
(143, 45, 38, 2147483647, 0),
(144, 45, 32, 2147483647, 0),
(145, 45, 30, 2147483647, 0),
(146, 45, 35, 2147483647, 0),
(147, 45, 36, 2147483647, 0),
(148, 45, 24, 2147483647, 0),
(149, 46, 39, 2147483647, 0),
(153, 46, 37, 2147483647, 0),
(154, 46, 45, 2147483647, 0),
(155, 46, 44, 2147483647, 0),
(156, 46, 42, 2147483647, 0),
(157, 46, 40, 2147483647, 0),
(158, 46, 41, 2147483647, 0),
(159, 46, 35, 2147483647, 0),
(163, 47, 19, 2147483647, 1),
(164, 47, 20, 2147483647, 0),
(165, 47, 21, 2147483647, 0),
(166, 47, 23, 2147483647, 0),
(167, 47, 24, 2147483647, 0),
(168, 47, 26, 2147483647, 0),
(169, 47, 27, 2147483647, 0),
(173, 37, 47, 1640844208396, 0),
(175, 47, 32, 1640845039787, 0),
(176, 47, 42, 1640845053083, 0),
(177, 50, 19, 1640850027596, 1),
(178, 50, 20, 1640850029192, 0),
(179, 50, 21, 1640850029966, 0),
(180, 50, 22, 1640850031184, 0),
(181, 50, 23, 1640850031743, 0),
(182, 50, 24, 1640850032754, 0),
(183, 50, 25, 1640850033527, 0),
(184, 50, 26, 1640850034200, 0),
(185, 50, 27, 1640850035255, 0),
(186, 50, 28, 1640850036296, 0),
(187, 50, 29, 1640850037335, 0),
(188, 50, 30, 1640850038386, 0),
(189, 50, 31, 1640850039313, 0),
(190, 50, 32, 1640850040294, 0),
(192, 50, 34, 1640850042207, 0),
(193, 50, 35, 1640850043576, 0),
(194, 50, 33, 1640850045351, 0),
(195, 50, 36, 1640850047210, 0),
(196, 50, 37, 1640850048447, 0),
(197, 50, 38, 1640850049908, 0),
(198, 50, 39, 1640850050656, 0),
(199, 50, 40, 1640850052031, 0),
(200, 50, 41, 1640850052824, 0),
(201, 50, 42, 1640850054175, 0),
(202, 50, 43, 1640850055242, 0),
(203, 50, 44, 1640850055833, 0),
(204, 50, 45, 1640850056815, 0),
(205, 50, 46, 1640850057759, 0),
(207, 50, 48, 1640850059703, 0),
(208, 41, 47, 1640916135880, 0),
(209, 47, 35, 1640950767965, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hashtag`
--

CREATE TABLE `hashtag` (
  `hashtagId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hashtag`
--

INSERT INTO `hashtag` (`hashtagId`, `postId`, `value`) VALUES
(34, 50, '#pubg'),
(35, 51, '#style'),
(36, 52, '#nothing'),
(37, 53, '#npi'),
(38, 54, ''),
(39, 55, '#guys'),
(40, 56, '#abc'),
(41, 57, ''),
(42, 58, ''),
(43, 59, ''),
(44, 60, ''),
(45, 61, '#react'),
(46, 61, '#logo'),
(47, 61, '#reactlogo'),
(48, 62, '#google'),
(49, 62, '#googleimage'),
(50, 63, '#google'),
(51, 63, '#image'),
(52, 64, '#googlePlay'),
(53, 64, '#api'),
(54, 64, '#bbi'),
(55, 64, '#aa'),
(56, 64, '#bb'),
(57, 64, '#cc'),
(58, 64, '#ee'),
(59, 65, '#learningappnepal'),
(60, 65, '#logo'),
(61, 67, '#abc'),
(62, 67, '#bcd'),
(63, 68, ''),
(64, 69, ''),
(65, 70, '#kotlin'),
(66, 70, '#free'),
(67, 71, '#pubg'),
(68, 71, '#video');

-- --------------------------------------------------------

--
-- Table structure for table `initconversation`
--

CREATE TABLE `initconversation` (
  `id` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `initconversation`
--

INSERT INTO `initconversation` (`id`, `timestamp`, `senderId`, `receiverId`) VALUES
(35, 2147483647, 50, 47),
(36, 2147483647, 47, 41),
(37, 2147483647, 41, 47),
(38, 2147483647, 35, 47),
(39, 2147483647, 47, 35);

-- --------------------------------------------------------

--
-- Table structure for table `insta_media`
--

CREATE TABLE `insta_media` (
  `mediaId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `mimetype` text NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `insta_media`
--

INSERT INTO `insta_media` (`mediaId`, `postId`, `mimetype`, `url`) VALUES
(59, 50, 'image/jpeg', 'assets\\media\\images\\postImages\\message3626476.jpg'),
(60, 51, 'image/jpeg', 'assets\\media\\images\\postImages\\test15FB_IMG_1624875946534.jpg'),
(61, 52, 'video/mp4', 'assets\\media\\videos\\test15Facebook-Video-fdown.net.mp4'),
(62, 52, 'image/jpeg', 'assets\\media\\images\\postImages\\test15img.jpg'),
(63, 53, 'image/jpeg', 'assets\\media\\images\\postImages\\messageniplogo-300x300.jpg'),
(64, 54, 'image/jpeg', 'assets\\media\\images\\postImages\\message3626476.jpg'),
(65, 54, 'image/jpeg', 'assets\\media\\images\\postImages\\messageniplogo-300x300.jpg'),
(66, 55, 'image/jpeg', 'assets\\media\\images\\postImages\\message20210718_180016.jpg'),
(67, 55, 'image/jpeg', 'assets\\media\\images\\postImages\\message20210718_175948 (1).jpg'),
(68, 55, 'image/jpeg', 'assets\\media\\images\\postImages\\message20210718_175948.jpg'),
(69, 55, 'image/jpeg', 'assets\\media\\images\\postImages\\messageFB_IMG_1627261994346.jpg'),
(70, 55, 'image/jpeg', 'assets\\media\\images\\postImages\\messageFB_IMG_1624875946534.jpg'),
(71, 56, 'image/jpeg', 'assets\\media\\images\\postImages\\message1640836289051ctn 1.jpg'),
(72, 56, 'image/jpeg', 'assets\\media\\images\\postImages\\message1640836289065ctzn2.jpg'),
(73, 56, 'video/mp4', 'assets\\media\\videos\\message1640836289070Screen_Recording_20210908-165026.mp4'),
(74, 56, 'video/mp4', 'assets\\media\\videos\\message1640836292549production ID_3827604.mp4'),
(75, 56, 'video/mp4', 'assets\\media\\videos\\message1640836293010production ID_4684225.mp4'),
(76, 56, 'image/png', 'assets\\media\\images\\postImages\\message1640836293936repository-open-graph-template.png'),
(77, 57, 'video/mp4', 'assets\\media\\videos\\message1640843274129Epic Sci-Fi Music- \'Aphelion\' by Alibi Music.mp4'),
(78, 58, 'image/png', 'assets\\media\\images\\postImages\\message1640843707464w3lynx_200.png'),
(79, 59, 'image/gif', 'assets\\media\\images\\postImages\\message1640843799127colorpicker.gif'),
(80, 60, 'image/png', 'assets\\media\\images\\postImages\\test151640844197055cake.png'),
(81, 61, 'image/svg+xml', 'assets\\media\\images\\postImages\\message1640863059286logo.svg'),
(82, 62, 'image/png', 'assets\\media\\images\\postImages\\message1640864791520google.png'),
(83, 63, 'image/png', 'assets\\media\\images\\postImages\\message1640865114786png-clipart-google-logo-google-search-advertising-google-company-text.png'),
(84, 64, 'image/png', 'assets\\media\\images\\postImages\\message1640865155401212-2127579_new-google-logo-png-transparent-background-2018-edigital.png'),
(85, 65, 'image/png', 'assets\\media\\images\\postImages\\message1640865364577com.appnepal.learning_app_nepal-InAppExperience-105.png'),
(86, 66, 'image/png', 'assets\\media\\images\\postImages\\message1640865442144repository-open-graph-template.png'),
(87, 67, 'image/jpeg', 'assets\\media\\images\\postImages\\message1640867805161208580731_325519529247136_2376842362855453891_n.jpg'),
(88, 67, 'image/png', 'assets\\media\\images\\postImages\\message1640867805183206794802_1455574644790017_6147247383678159651_n.png'),
(89, 67, 'image/png', 'assets\\media\\images\\postImages\\message1640867805186179636636_518100765877740_1833274721312616543_n.png'),
(90, 67, 'image/jpeg', 'assets\\media\\images\\postImages\\message1640867805187img.jpg'),
(91, 68, 'video/mp4', 'assets\\media\\videos\\message1640910780690Facebook-Video-fdown.net.mp4'),
(92, 69, 'video/mp4', 'assets\\media\\videos\\message1640910786904Facebook-Video-fdown.net.mp4'),
(93, 70, 'image/jpeg', 'assets\\media\\images\\postImages\\test131640950541600IMG_20211215_182617_937.jpg'),
(94, 70, 'image/jpeg', 'assets\\media\\images\\postImages\\test131640950541657istockphoto-1286880480-170667a.jpg'),
(95, 71, 'video/mp4', 'assets\\media\\videos\\test131640950755459259411246_1040002640275867_2607897848926960863_n.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `lid` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `liked_by` int(11) NOT NULL,
  `pc_by` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`lid`, `postId`, `liked_by`, `pc_by`, `timestamp`) VALUES
(1, 65, 47, 47, 1640871724854),
(2, 66, 47, 47, 1640871735835),
(4, 64, 47, 47, 1640873202811),
(6, 63, 47, 47, 1640873362091),
(7, 61, 47, 47, 1640873365111),
(9, 50, 47, 47, 1640875912110),
(10, 53, 47, 47, 1640875914427),
(11, 54, 47, 47, 1640875916098),
(12, 57, 47, 47, 1640875955148),
(13, 67, 47, 47, 1640875985777),
(14, 69, 41, 47, 1640916141441),
(15, 68, 41, 47, 1640916144307),
(18, 69, 47, 47, 1640940143140),
(19, 71, 35, 35, 1640951705527),
(20, 70, 35, 35, 1640951709008);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `postId` int(11) NOT NULL,
  `postUrl` text NOT NULL,
  `userId` int(11) NOT NULL,
  `timestamp` bigint(11) NOT NULL,
  `caption` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`postId`, `postUrl`, `userId`, `timestamp`, `caption`) VALUES
(50, '/p/message1640783965128', 47, 2147483647, '#pubg'),
(51, '/p/test151640783986628', 37, 2147483647, '#style'),
(52, '/p/test151640784352725', 37, 2147483647, '#nothing'),
(53, '/p/message1640789447335', 47, 2147483647, '#npi logo'),
(54, '/p/message1640789769068', 47, 2147483647, ''),
(55, '/p/message1640836128015', 47, 2147483647, '#guys'),
(56, '/p/message1640836293943', 47, 2147483647, '#abc'),
(57, '/p/message1640843274279', 47, 2147483647, ''),
(58, '/p/message1640843707470', 47, 1640843707470, ''),
(59, '/p/message1640843799134', 47, 1640843799134, ''),
(60, '/p/test151640844197234', 37, 1640844197234, ''),
(61, '/p/message1640863059293', 47, 1640863059293, 'This is a react logo \n#react #logo \n#reactlogo'),
(62, '/p/message1640864791524', 47, 1640864791524, '#google \n#googleimage'),
(63, '/p/message1640865114788', 47, 1640865114788, 'This is a #google \n#image \nNow guys like the photo \nshare your opinions '),
(64, '/p/message1640865155405', 47, 1640865155405, '#googlePlay \n#api \n#bbi\n#aa\n#bb\n#cc\n#ee\nThis is a google image\n'),
(65, '/p/message1640865364578', 47, 1640865364578, '#learningappnepal \nlogo\n#logo'),
(66, '/p/message1640865442146', 47, 1640865442146, '<script>\n\nalert(\"Hacked\");\n</script>'),
(67, '/p/message1640867805209', 47, 1640867805209, '#abc\n#bcd'),
(68, '/p/message1640910780791', 47, 1640910780791, ''),
(69, '/p/message1640910786968', 47, 1640910786968, ''),
(70, '/p/test131640950541758', 35, 1640950541758, '#kotlin \n#free \n'),
(71, '/p/test131640950757015', 35, 1640950757015, '#pubg \n#video\n');

-- --------------------------------------------------------

--
-- Table structure for table `tagged`
--

CREATE TABLE `tagged` (
  `taggedId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` text NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `user_type` varchar(15) NOT NULL,
  `created_date` bigint(11) NOT NULL,
  `verification` tinyint(4) NOT NULL,
  `pswd` text NOT NULL,
  `profile` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `email`, `fullname`, `user_type`, `created_date`, `verification`, `pswd`, `profile`) VALUES
(18, 'SafalShrestha', 'computerstha12@gmail.com', 'Safal Shrestha', 'user', 2147483647, 0, '827ccb0eea8a706c4c34a16891f84e7b', ''),
(19, 'test', 'test@gmail.com', 'test', 'user', 2147483647, 0, '827ccb0eea8a706c4c34a16891f84e7b', '..\\profile\\testcake.png'),
(20, 'john', 'Sthasafal9@gmail.com', 'Safal Shrestha', 'user', 2147483647, 0, 'cc03e747a6afbbcbf8be7668acfebee5', ''),
(21, 'Under', 'safalstha132@gmail.com', 'Under', 'user', 2147483647, 0, '02552d3c116b8a96f9ff0001b6ae661c', ''),
(22, 'uuser', 'Under@gmail.com', 'uuser', 'user', 2147483647, 0, 'ee6039fa48e90abda14cc6236084ff39', ''),
(23, 'arpan', 'arpan@gmail.com', 'arpan', 'user', 2147483647, 0, 'f37427482b0311a8f3ea336ba0b60df1', 'profile/profile.jfif'),
(24, 'testingaccount', 'testing1@gmail.com', 'testingaccount', 'user', 2147483647, 0, '5a105e8b9d40e1329780d62ea2265d8a', '..\\profile\\testingaccount241057189_343948997456699_1907786023424279789_n.jpg'),
(25, 'testing2', 'testing2@gmail.com', 'testing2', 'user', 2147483647, 0, 'a119e534072584a0ea88cdea4664aecd', '..\\profile\\testing2243969510_1400712450326348_7325708136621651541_n.jpg'),
(26, 'testing4', 'testing4@gmail.com', 'testing4', 'user', 2147483647, 0, 'a5bd8e2b7e55c23e6bff78fc18e00778', '..\\profile\\testing4244403439_573403087200873_1367000714054990302_n.jpg'),
(27, 'testing5', 'testing5@gmail.com', 'testing5', 'user', 2147483647, 0, '84273c002a8901bc770518d7c98c1d5b', '..\\profile\\testing5unnamed.webp'),
(28, 'testing6', 'testing6@gmail.com', 'testing6', 'user', 2147483647, 0, 'fd3922914dc2777bb67913efa313ed17', '..\\profile\\testing6whoamiprogrammer.png'),
(29, 'testing7', 'testing7@gmail.com', 'testing7', 'user', 2147483647, 0, '14e4cbe7065919d903246d007b8360ec', '..\\profile\\testing7Screenshot_1637745858.png'),
(30, 'testing8', 'testing8@gmail.com', 'testing8', 'user', 2147483647, 0, '5ddadf914707c31330fa85b78ac3e9e4', '..\\profile\\testing8backupcontactscannerfeatured.png'),
(31, 'testing9', 'testing9@gmail.com', 'testing9', 'user', 2147483647, 0, '1dd0161cfe25acd1a75963d6551a8698', '..\\profile\\testing9google-play-png-logo-3783.png'),
(32, 'testing10', 'testing10@gmail.com', 'testing10', 'user', 2147483647, 0, '827ccb0eea8a706c4c34a16891f84e7b', '..\\profile\\testing10img.jpg'),
(33, 'test11', 'test11@gmail.com', 'test11', 'user', 2147483647, 0, 'f696282aa4cd4f614aa995190cf442fe', '..\\profile\\test11208580731_325519529247136_2376842362855453891_n.jpg'),
(34, 'test12', 'test12@gmail.com', 'Testing account<script>alert(\"Hacked\");</script>', 'user', 2147483647, 0, '60474c9c10d7142b7508ce7a50acf414', 'media\\images\\profile\\test12niplogo-300x300.jpg'),
(35, 'test13', 'test13@gmail.com', 'test13', 'user', 2147483647, 0, '33fc3dbd51a8b38a38b1b85b6a76b42b', 'assets\\media\\images\\profile\\test13IMG_20211215_182615_055.jpg'),
(36, 'test14', 'test14@gmail.com', 'test14', 'user', 2147483647, 0, 'b99c94f62fb2a61433c4e44e27406050', '..\\profile\\test14image1.jpg'),
(37, 'test15', 'test15@gmail.com', 'test15', 'user', 2147483647, 0, '4b377d23309d4ed39c9da5791417aeff', 'assets\\media\\images\\profile\\test15img.jpg'),
(38, 'test16', 'test16@gmail.com', 'test16', 'user', 2147483647, 0, '0c1ccf98666ed505310c0471529429db', '..\\profile\\test16image3.jpg'),
(39, 'test17', 'test17@gmail.com', 'test17', 'user', 2147483647, 0, 'fcb1a7bbe091b4ee78748946cb762a84', 'assets\\media\\images\\profile\\test173626476.jpg'),
(40, 'testing20', 'testing20@gmail.com', 'testing20', 'user', 2147483647, 0, 'dca4c76c62a2672488e3aeaa56856f42', '..\\profile\\testing20IMG_20211215_182617_937.jpg'),
(41, 'johndoe', 'johndoe@gmail.com', 'John Doe', 'user', 2147483647, 0, '202cb962ac59075b964b07152d234b70', 'assets\\media\\images\\profile\\johndoeprowlarr.png'),
(42, 'sachindrayadav880', 'sachindrayadav880@gmail.com', 'sachindrayadav880', 'user', 2147483647, 0, 'c2d2bc3a9be91508ac7425d780a9dce4', '..\\profile\\sachindrayadav880registation-form.jpg'),
(43, 'sunilshrestha', 'sunil@gmail.com', 'sunilshrestha', 'user', 2147483647, 0, '9afefc52942cb83c7c1f14b2139b09ba', 'profile/profile.jfif'),
(44, 'Neupane', 'suzataneupane0217@gmail.com', 'Suzata', 'user', 2147483647, 0, '55011850fe89620e0cf9edcfe834f780', '..\\profile\\NeupaneIMG_20191104_103427_929.jpg'),
(45, 'sunil0123', 'sunil0123@gamil.com', 'sunilshrestha', 'user', 2147483647, 0, '9afefc52942cb83c7c1f14b2139b09ba', '..\\profile\\sunil0123NVG_3.jpg'),
(46, 'Umeshshah2056', 'Umeshshah2056@gmail.com', 'Umeshshah2056', 'user', 2147483647, 0, 'ebd988f474fc7cbcb21c14821b05678b', 'profile/profile.jfif'),
(47, 'message', 'message@gmail.com', 'message', 'user', 2147483647, 0, '78e731027d8fd50ed642340b7c9a63b3', 'assets\\media\\images\\profile\\messageniplogo-300x300.jpg'),
(48, 'john_cena', 'message2@gmail.com', 'message2', 'user', 2147483647, 0, '50ed14a583bbc9c39654bf403f84530f', 'profile/profile.jfif'),
(50, 'message12', 'message12@gmail.com', 'message12', 'user', 1640849901674, 0, '5f418ab0bfef3358cebb4da347c09ef1', 'assets\\media\\images\\profile\\message12logo.svg');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `userId` int(11) NOT NULL,
  `account_visiblity` varchar(20) NOT NULL,
  `account_type` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `last_modified` int(11) NOT NULL,
  `account_status` varchar(20) NOT NULL,
  `website` text DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`userId`, `account_visiblity`, `account_type`, `description`, `date_of_birth`, `last_modified`, `account_status`, `website`, `gender`) VALUES
(18, 'Public', 'Personnel', '', NULL, 826, 'Active', NULL, NULL),
(19, 'private', 'Personnel', 'This is a testing account', NULL, 50, 'Active', 'whoamiprogrammer.com', NULL),
(20, 'Public', 'Personnel', '', NULL, 692, 'Active', NULL, NULL),
(21, 'Public', 'Personnel', '', NULL, 764, 'Active', NULL, NULL),
(22, 'Public', 'Personnel', '', NULL, 506, 'Active', NULL, NULL),
(23, 'Public', 'Personnel', '', NULL, 695, 'Active', NULL, NULL),
(24, 'Public', 'Personnel', '', NULL, 256, 'Active', NULL, NULL),
(25, 'Public', 'Personnel', '', NULL, 27, 'Active', NULL, NULL),
(26, 'Public', 'Personnel', '', NULL, 627, 'Active', NULL, NULL),
(27, 'Public', 'Personnel', '', NULL, 106, 'Active', NULL, NULL),
(28, 'Public', 'Personnel', '', NULL, 539, 'Active', NULL, NULL),
(29, 'Public', 'Personnel', '', NULL, 226, 'Active', NULL, NULL),
(30, 'Public', 'Personnel', '', NULL, 298, 'Active', NULL, NULL),
(31, 'Public', 'Personnel', '', NULL, 555, 'Active', NULL, NULL),
(32, 'Public', 'Personnel', '', NULL, 429, 'Active', NULL, NULL),
(33, 'Public', 'Personnel', '', NULL, 516, 'Active', NULL, NULL),
(34, 'Public', 'Personnel', 'I am Testing account.\n<script>alert(\"Hacked\");</script>', '2021-11-28', 2147483647, 'Active', 'whoamiprogrammer.com', 0),
(35, 'Public', 'Personnel', '', NULL, 153, 'Active', NULL, NULL),
(36, 'Public', 'Personnel', '', NULL, 664, 'Active', NULL, NULL),
(37, 'Public', 'Personnel', '', NULL, 794, 'Active', NULL, NULL),
(38, 'Public', 'Personnel', '', NULL, 965, 'Active', NULL, NULL),
(39, 'Public', 'Personnel', '', NULL, 331, 'Active', NULL, NULL),
(40, 'Public', 'Personnel', '', NULL, 902, 'Active', NULL, NULL),
(41, 'Public', 'Personnel', '', NULL, 781, 'Active', NULL, NULL),
(42, 'Public', 'Personnel', '', NULL, 538, 'Active', NULL, NULL),
(43, 'Public', 'Personnel', '', NULL, 902, 'Active', NULL, NULL),
(44, 'Public', 'Personnel', '', NULL, 606, 'Active', NULL, NULL),
(45, 'Public', 'Personnel', '', NULL, 238, 'Active', NULL, NULL),
(46, 'Public', 'Personnel', '', NULL, 806, 'Active', NULL, NULL),
(47, 'Public', 'Personnel', '', '2021-12-15', 2147483647, 'Active', NULL, 0),
(48, 'Public', 'Personnel', '', NULL, 467, 'Active', NULL, NULL),
(50, 'Public', 'Personnel', '', NULL, 677, 'Active', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentId`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `hashtag`
--
ALTER TABLE `hashtag`
  ADD PRIMARY KEY (`hashtagId`);

--
-- Indexes for table `initconversation`
--
ALTER TABLE `initconversation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `insta_media`
--
ALTER TABLE `insta_media`
  ADD PRIMARY KEY (`mediaId`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postId`),
  ADD UNIQUE KEY `postUrl` (`postUrl`) USING HASH;

--
-- Indexes for table `tagged`
--
ALTER TABLE `tagged`
  ADD PRIMARY KEY (`taggedId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=407;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=210;

--
-- AUTO_INCREMENT for table `hashtag`
--
ALTER TABLE `hashtag`
  MODIFY `hashtagId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `initconversation`
--
ALTER TABLE `initconversation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `insta_media`
--
ALTER TABLE `insta_media`
  MODIFY `mediaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `postId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `tagged`
--
ALTER TABLE `tagged`
  MODIFY `taggedId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
