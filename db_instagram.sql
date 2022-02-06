-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2022 at 01:35 AM
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
(434, 75, 73, 1641705618412, 'Hello\n', 'text', 0, 0, 0, 0),
(435, 73, 75, 1641825494199, 'Hi', 'text', 0, 0, 0, 0),
(436, 74, 76, 1644107548090, 'Hi', 'text', 0, 0, 0, 0);

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
(21, 108, 75, 1641705505763, 0, 0, '#cake', 0),
(22, 116, 73, 1641870784924, 0, 0, '#optical', 0),
(23, 116, 73, 1641870789363, 0, 0, '#fiber', 0);

-- --------------------------------------------------------

--
-- Table structure for table `deleted_media`
--

CREATE TABLE `deleted_media` (
  `dmediaId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `mimeType` varchar(50) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deleted_media`
--

INSERT INTO `deleted_media` (`dmediaId`, `postId`, `mimeType`, `url`) VALUES
(12, 12, 'image/jpeg', 'assets\\media\\images\\postImages\\5b2c271c914f0300e2554439639118cb243969510_1400712450326348_7325708136621651541_n.jpg'),
(14, 14, 'image/jpeg', 'assets\\media\\images\\postImages\\5b2c271c914f0300e2554439639118cb243969510_1400712450326348_7325708136621651541_n.jpg'),
(20, 20, 'image/jpeg', 'assets\\media\\images\\postImages\\5b2c271c914f0300e2554439639118cb243969510_1400712450326348_7325708136621651541_n.jpg'),
(21, 21, 'image/jpeg', 'assets\\media\\images\\postImages\\a8634b4627b1db2b3145b8d628c18749243969510_1400712450326348_7325708136621651541_n.jpg'),
(22, 22, 'image/jpeg', 'assets\\media\\images\\postImages\\3913f7193c2c54ab64d36e7094c49e07243969510_1400712450326348_7325708136621651541_n.jpg'),
(23, 23, 'image/png', 'assets\\media\\images\\postImages\\7e524cb12507dcd5c33e8d6cc4f17dbacake.png'),
(24, 24, 'image/jpeg', 'assets\\media\\images\\postImages\\2e71a8a36408b0af92ae159ffefa86d9243969510_1400712450326348_7325708136621651541_n.jpg'),
(25, 25, 'image/jpeg', 'assets\\media\\images\\postImages\\652cc66522debff1df6e6b7d6db69c2fdownload.jfif'),
(26, 26, 'image/jpeg', 'assets\\media\\images\\postImages\\2b20ddc1266b0638597f13141ac60c48download.jfif'),
(27, 27, 'image/jpeg', 'assets\\media\\images\\postImages\\8f1f02d14a11639c324b24523508c5bc241777619_190584526380673_7423304657808371644_n.jpg'),
(28, 28, 'image/jpeg', 'assets\\media\\images\\postImages\\2f62a3cfa0925e82993138b902cf46e2244403439_573403087200873_1367000714054990302_n.jpg'),
(29, 29, 'image/jpeg', 'assets\\media\\images\\postImages\\8049142fef4f9ba5674ce0365a1dd280244403439_573403087200873_1367000714054990302_n.jpg'),
(30, 30, 'image/jpeg', 'assets\\media\\images\\postImages\\f692535458af082858b0f3f92a9a68b6download.jfif'),
(31, 31, 'image/png', 'assets\\media\\images\\postImages\\7706c6b8a67c533b450b1e67659eabf7backupcontactscannerfeatured.png'),
(32, 32, 'image/png', 'assets\\media\\images\\postImages\\22b02037902386bda7dd2498beee581ecake.png'),
(33, 33, 'image/jpeg', 'assets\\media\\images\\postImages\\82a114b578a0a16c6aeceb3ede702b63counter.jpg'),
(34, 34, 'image/jpeg', 'assets\\media\\images\\postImages\\dc19afbe705bf1a23117fc19220e243b244403439_573403087200873_1367000714054990302_n.jpg'),
(35, 35, 'image/jpeg', 'assets\\media\\images\\postImages\\a70aab5737100687f3ce629ee8989be9download.jfif'),
(36, 36, 'image/jpeg', 'assets\\media\\images\\postImages\\d21b66fedf6459477c8d1f5e53363adedownload.jfif'),
(37, 37, 'image/jpeg', 'assets\\media\\images\\postImages\\d664c46ddc03fd96774d448694bb2597counter.jpg'),
(38, 38, 'image/png', 'assets\\media\\images\\postImages\\fad6b0442c60191c7cc4fa07ee28cfbacake.png'),
(39, 39, 'image/jpeg', 'assets\\media\\images\\postImages\\a9a6c6c0cf762f0ad01956e48fcdeba4download.jfif'),
(40, 40, 'image/png', 'assets\\media\\images\\postImages\\390c90778afab0609b5b52d5edc7eab2cake.png'),
(41, 41, 'image/jpeg', 'assets\\media\\images\\postImages\\fdf8233f0d4d23508c771a429381ce79241777619_190584526380673_7423304657808371644_n.jpg'),
(42, 42, 'image/jpeg', 'assets\\media\\images\\postImages\\d506bf88923437c387f11d60a8d12129241777619_190584526380673_7423304657808371644_n.jpg'),
(43, 43, 'image/jpeg', 'assets\\media\\images\\postImages\\14188f53a4ee4291588ab74dc266188e241057189_343948997456699_1907786023424279789_n.jpg'),
(44, 44, 'image/png', 'assets\\media\\images\\postImages\\7e5e0a465eba049c13e2e1658fac417dbackupcontactscannerfeatured.png'),
(45, 45, 'image/png', 'assets\\media\\images\\postImages\\d72d8b13df0eacba9787af4ebbcdc98acake.png'),
(46, 46, 'image/jpeg', 'assets\\media\\images\\postImages\\2f4401f26c340cdfa87f154f591a31fd241057189_343948997456699_1907786023424279789_n.jpg'),
(47, 47, 'image/png', 'assets\\media\\images\\postImages\\21763ed7878fd2c1d98e0a3e7967ac19backupcontactscannerfeatured.png'),
(48, 48, 'image/jpeg', 'assets\\media\\images\\postImages\\42654a84dbc7d828fcb9926f1bcb91ac243969510_1400712450326348_7325708136621651541_n.jpg'),
(49, 49, 'image/png', 'assets\\media\\images\\postImages\\ab0b1d89cb0d20068341421cdd2bcc90backupcontactscannerfeatured.png'),
(50, 50, 'image/png', 'assets\\media\\images\\postImages\\304df089157ef7dd1bf870794450a28dcake.png'),
(51, 51, 'image/jpeg', 'assets\\media\\images\\postImages\\ed194f3f4bc4cedcd8fde7fa79055bd7counter.jpg'),
(52, 52, 'image/jpeg', 'assets\\media\\images\\postImages\\c13e0adb4dc371fb28841d1000de427dcounter.jpg'),
(53, 53, 'image/png', 'assets\\media\\images\\postImages\\de8e0ecaae68acfd8fae1c82cd31a279cake.png'),
(54, 54, 'image/jpeg', 'assets\\media\\images\\postImages\\50bf84efbda67dd19fd30b50775bd045241057189_343948997456699_1907786023424279789_n.jpg'),
(55, 55, 'image/jpeg', 'assets\\media\\images\\postImages\\36a8a9fe47bbf6ba249ca897b3d2a872241777619_190584526380673_7423304657808371644_n.jpg'),
(56, 56, 'image/jpeg', 'assets\\media\\images\\postImages\\68a3a2ba2c77f80d630cd475e2d201dccounter.jpg'),
(57, 57, 'image/jpeg', 'assets\\media\\images\\postImages\\ea9b6bda1a1beb90dce3c4df014944bacounter.jpg'),
(58, 58, 'image/png', 'assets\\media\\images\\postImages\\f47cb587900e55da9f12be5c6db03ae7Java-Logo.png'),
(59, 59, 'image/jpeg', 'assets\\media\\images\\postImages\\627a513a001f082d3e74a109331aa3ed243969510_1400712450326348_7325708136621651541_n.jpg'),
(60, 60, 'image/png', 'assets\\media\\images\\postImages\\79ec23586c17d676e2fcc9a1196d876fcake.png'),
(61, 61, 'image/jpeg', 'assets\\media\\images\\postImages\\a02d46fbc1a054099f2daa34a1735b52241777619_190584526380673_7423304657808371644_n.jpg'),
(62, 62, 'image/jpeg', 'assets\\media\\images\\postImages\\ad5372bc40ab2da63c44342f8f63b156244403439_573403087200873_1367000714054990302_n.jpg'),
(63, 63, 'image/jpeg', 'assets\\media\\images\\postImages\\da07bd87d95b69773fc0e813611b844cdownload.jfif'),
(64, 64, 'image/jpeg', 'assets\\media\\images\\postImages\\bb61dfd1a3cccae0011a44944823ee07counter.jpg'),
(65, 65, 'image/png', 'assets\\media\\images\\postImages\\c5996c1ef1c2e4c158066919bfd169b1verification.PNG'),
(66, 66, 'image/png', 'assets\\media\\images\\postImages\\26189a71b667c2a7bb280145edb2bb24qrcode.png'),
(67, 67, 'image/jpeg', 'assets\\media\\images\\postImages\\39458682f7643c13206e524557ed7797istockphoto-485627394-1024x1024.jpg'),
(68, 68, 'image/png', 'assets\\media\\images\\postImages\\1e2a382ec107c31e7cc526829325abd9Web1920–1.png'),
(69, 69, 'image/jpeg', 'assets\\media\\images\\postImages\\d8ca350160b7ee77f0207121cb609ff4241777619_190584526380673_7423304657808371644_n.jpg'),
(70, 70, 'image/png', 'assets\\media\\images\\postImages\\6c658bb1543e8cd483190309c24e6969whoamiprogrammer.png'),
(71, 71, 'image/png', 'assets\\media\\images\\postImages\\581d03305985775c3919c1d8f9d81875whoamiprogrammer1.png'),
(72, 72, 'image/jpeg', 'assets\\media\\images\\postImages\\3e2e58d23faf70558c78aeac7a08c3eb243969510_1400712450326348_7325708136621651541_n.jpg'),
(73, 73, 'image/png', 'assets\\media\\images\\postImages\\6c1f4949c5d6e65d86627aead1b73243Java-Logo.png'),
(74, 74, 'image/webp', 'assets\\media\\images\\postImages\\c86d79fc84a75246db55f04a75c4e4a8unnamed.webp'),
(75, 75, 'image/png', 'assets\\media\\images\\postImages\\6d1eaa3c2da045c5bd3eadb241049fb7life_20200615165119.png'),
(76, 76, 'image/jpeg', 'assets\\media\\images\\postImages\\907c68c0dc786688222dadaba3bf515eimg.jpg'),
(77, 76, 'image/jpeg', 'assets\\media\\images\\postImages\\8a4581900d0bef597d55d0a1d693c760istockphoto-485627394-1024x1024.jpg'),
(78, 77, 'image/webp', 'assets\\media\\images\\postImages\\60c9ee8bf7dcf5d0f7dfe5f46d5bf2a8unit-1-internet-technology-t-36-638.webp'),
(79, 78, 'image/jpeg', 'assets\\media\\images\\postImages\\6f938532736018ea06dfd7182ca5ad68counter.jpg'),
(80, 79, 'image/webp', 'assets\\media\\images\\postImages\\fae202db615ee933e3e6c9c306ff9bd4unnamed.webp'),
(81, 80, 'image/jpeg', 'assets\\media\\images\\postImages\\e9c80f662f828a5c95fe421a293ea0a1244403439_573403087200873_1367000714054990302_n.jpg'),
(82, 81, 'image/png', 'assets\\media\\images\\postImages\\283d3a962a122b16eb4a88465ef72826Java-Logo.png'),
(83, 82, 'image/png', 'assets\\media\\images\\postImages\\39df3f80a66431dcf41b6fc3286fc525whoamiprogrammer.png'),
(84, 83, 'image/png', 'assets\\media\\images\\postImages\\68efdd4a64d42286e9adef2451b31713icons8-phone-48.png'),
(85, 84, 'image/webp', 'assets\\media\\images\\postImages\\41c6ee77d1d6480ca5f0ab6a6cb56a42unit-1-internet-technology-t-36-638.webp'),
(86, 85, 'image/png', 'assets\\media\\images\\postImages\\9cca61c77c02b702ab6022dc80fea650phone-1682317_1280.png'),
(87, 86, 'image/png', 'assets\\media\\images\\postImages\\8ab1034573f1b1a1ed872e21acd5cf5fwhoamiprogrammer.png'),
(88, 87, 'image/png', 'assets\\media\\images\\postImages\\bb6ed9ad90fbad90e3ead457c92a1295life_20200615165119.png'),
(89, 88, 'image/png', 'assets\\media\\images\\postImages\\0fd4024b9e712c68c413e17d44d1de6cScreenshot_1637745854.png'),
(90, 89, 'image/webp', 'assets\\media\\images\\postImages\\782575cc4f7e3bf5f6d3e142d9cb49bcunit-1-internet-technology-t-36-638.webp'),
(91, 89, 'image/png', 'assets\\media\\images\\postImages\\54efc54999caba9ef84ef40f94c74004Web1920–1.png'),
(92, 90, 'image/png', 'assets\\media\\images\\postImages\\33deb9b0aeed244540f3d8e4671573f3.png'),
(93, 91, 'image/jpeg', 'assets\\media\\images\\postImages\\733f90d7f32a8501f96be1829005e7fa.jpg'),
(94, 92, 'image/png', 'assets\\media\\images\\postImages\\937aedda453cccaf438abf6fbfe5bd53icons8-email-50.png'),
(95, 92, 'image/png', 'assets\\media\\images\\postImages\\df384023a4f3bb86d154fb39bb56ec28icons8-phone-48.png'),
(96, 92, 'image/png', 'assets\\media\\images\\postImages\\5bf8bf1e0be83479c3539cdfd7f38fe5phone-1682317_1280.png'),
(97, 92, 'image/webp', 'assets\\media\\images\\postImages\\547c907b014308322140d98ae5743df6unnamed.webp'),
(98, 93, 'image/png', 'assets\\media\\images\\postImages\\c90be13ee8d8e4dc07ab63e2ed678631cake.png'),
(99, 93, 'image/jpeg', 'assets\\media\\images\\postImages\\0457261575fecee0a48f64f703392523counter.jpg'),
(100, 93, 'image/png', 'assets\\media\\images\\postImages\\2590195654043e27ef7f1dc2489416caqrcode.png'),
(101, 94, 'image/jpeg', 'assets\\media\\images\\postImages\\7a82f4c59902ecbb4a076cb9b6dc454aimg.jpg'),
(102, 95, 'image/png', 'assets\\media\\images\\postImages\\b0268789421d263c5791347ff2701de7icons8-email-50.png'),
(103, 96, 'image/png', 'assets\\media\\images\\postImages\\4da60998335c065ce1477251a127fde4publisher.png'),
(104, 97, 'image/png', 'assets\\media\\images\\postImages\\411e8973e621ed9bc0cb6f667f861154whoamiprogrammer.png'),
(105, 98, 'image/png', 'assets\\media\\images\\postImages\\e1be8bc4bf619bb9c2b43ae3ccbc1d32verification.PNG');

-- --------------------------------------------------------

--
-- Table structure for table `deleted_post`
--

CREATE TABLE `deleted_post` (
  `dpostId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `postUrl` text NOT NULL,
  `userId` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `caption` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deleted_post`
--

INSERT INTO `deleted_post` (`dpostId`, `postId`, `postUrl`, `userId`, `timestamp`, `caption`) VALUES
(12, 121, '/p/e61b80f66f4c440646a20fec23e3ca9f', 73, 1641831575097, ''),
(14, 121, '/p/e61b80f66f4c440646a20fec23e3ca9f', 73, 1641831597794, ''),
(20, 121, '/p/e61b80f66f4c440646a20fec23e3ca9f', 73, 1641831756269, ''),
(21, 122, '/p/d317848490cb67debcd55279bc4f33f9', 73, 1641831826051, '#android\r\n#android '),
(22, 123, '/p/0ad8fed9a9b0bf27aa4787990fbd3eaa', 73, 1641833010653, '#android'),
(23, 125, '/p/0e72bf358d346f4b111a50270dd76d20', 73, 1641833086862, ''),
(24, 124, '/p/c739fbc766892cbea9fa5e3e41711922', 73, 1641833138528, ''),
(25, 128, '/p/afb3bcfaee938603372471aa719c465f', 73, 1641833290334, ''),
(26, 127, '/p/47402b7628755609f21cf5be2ce30f2c', 73, 1641833546829, ''),
(27, 126, '/p/2252c023b98883e87ee70a0f5129b7e0', 73, 1641833690389, ''),
(28, 131, '/p/55b3a54fbbccd69d2747791b748bc3ae', 73, 1641833890012, ''),
(29, 130, '/p/867df839f85f29d892dc856c221bc7ee', 73, 1641834052661, ''),
(30, 129, '/p/e50a4ab073f207e7f2b14f848bee4fc9', 73, 1641834304022, ''),
(31, 134, '/p/037a82e815250a947be729ce6e421caf', 73, 1641834880342, ''),
(32, 133, '/p/ded07cb1afa0911b47f70d0364c0b855', 73, 1641834902020, ''),
(33, 132, '/p/fdf5e07668df0276b9b30605b6e16692', 73, 1641834920979, ''),
(34, 138, '/p/e632ab1c715a7c010366d409ccb5d050', 73, 1641835080867, ''),
(35, 137, '/p/326953779cfa2d60dd54b01243d6f3f4', 73, 1641835099568, ''),
(36, 136, '/p/cc51dc4a12aa1c91a2507c82a4df31ca', 73, 1641835110933, ''),
(37, 135, '/p/e437cd0e24540d8c1a0fc0d52877c5e5', 73, 1641835148212, ''),
(38, 140, '/p/0014c65deda7fa2690e9ab2af4c8752f', 73, 1641835526667, ''),
(39, 139, '/p/e0e22ca40678386d829759b27289488a', 73, 1641835562752, ''),
(40, 142, '/p/229f20bd9c0d4ea8cf5d3eb2187f71a5', 73, 1641835598291, ''),
(41, 141, '/p/55439107f012311c89d6dc2dc10f6e4b', 73, 1641835618055, ''),
(42, 144, '/p/d96caf9617be702499b30cef72cedf8c', 73, 1641835649903, ''),
(43, 143, '/p/14ffe9fc7e03271c4b228532c03a5b06', 73, 1641835655004, ''),
(44, 146, '/p/934c7a97f3025747bcc0c1eb491d04af', 73, 1641835777164, ''),
(45, 145, '/p/b0c312e69f95fba47d80a9b8d8f94fe0', 73, 1641835783689, ''),
(46, 148, '/p/57c08b8fc113ec440da6d8b286447923', 73, 1641835891364, ''),
(47, 147, '/p/c0e1251ccef1f82f210be98977c0c085', 73, 1641835896782, ''),
(48, 151, '/p/856778dfa867752fea2451f60f8175a0', 73, 1641835969999, ''),
(49, 150, '/p/f2d6dcffa1ccd0a27e3c03edc0d460fe', 73, 1641835980990, ''),
(50, 149, '/p/c624a21ec481731a121e4ce81a50e62b', 73, 1641836005183, ''),
(51, 152, '/p/76bb79a09165871fdbf1d0ff21ca3ac3', 73, 1641836054260, ''),
(52, 156, '/p/d4528c098938cfa16013b9f9d40c0804', 73, 1641836201501, ''),
(53, 155, '/p/8c2a54ba65f506c6b0ebc20b616140ae', 73, 1641836320494, ''),
(54, 154, '/p/c9e9c3c158d53f9632eabb350797945f', 73, 1641836325351, ''),
(55, 153, '/p/f6af1a0a93edee7e91b06a1115f1bf7a', 73, 1641836354777, ''),
(56, 157, '/p/fe6a7f186bc75840e7e43266b2920fa1', 73, 1641836406415, ''),
(57, 159, '/p/395864b7aa16736cf3eeda4d6a54c7af', 73, 1641836613086, ''),
(58, 158, '/p/03e956dbac557bc066c9097b747cb849', 73, 1641836619080, ''),
(59, 164, '/p/d5b4e435f70fd300d9797df5ae101404', 73, 1641836667707, ''),
(60, 160, '/p/dc17cadd7576ce3034859b13f334a830', 73, 1641836680987, ''),
(61, 161, '/p/6f24c518ea2391383b40b4205feed37e', 73, 1641836692105, ''),
(62, 163, '/p/f05f75bcf1d91824669727a0a1a815de', 73, 1641836730190, ''),
(63, 162, '/p/2fd4ea731a7d967fddc8f96bbddb1b50', 73, 1641836742378, ''),
(64, 165, '/p/9011b68c664f003c4e01e066c3782f63', 73, 1641837015905, ''),
(65, 169, '/p/bedc50b1d776eedd41339b63931e8a2e', 73, 1641866638948, ''),
(66, 166, '/p/9b8846f31b65c85bf81db37b10eff51b', 73, 1641866648426, ''),
(67, 173, '/p/e1619f5b0af920f7d5f7b40912ff20fc', 73, 1641867078236, ''),
(68, 174, '/p/da9e007fd9ea3d668d8f04d5baec69eb', 73, 1641868100106, ''),
(69, 180, '/p/36bca1b513a53ad782d5e4b1b380ce6a', 73, 1641869448622, ''),
(70, 179, '/p/4c2d0c2e68c2a1ab530cea48f5fbbd14', 73, 1641869499913, ''),
(71, 178, '/p/03910cca567f01e9cb11eb958125fb87', 73, 1641869505072, ''),
(72, 177, '/p/78484f9eb06660f9db67fbcca6892988', 73, 1641869594840, ''),
(73, 176, '/p/93d57b756f96c0b2e75353fc9ffe6d86', 73, 1641869598799, ''),
(74, 175, '/p/acf2773f451618c87b78f2e9857590e0', 73, 1641869602304, ''),
(75, 172, '/p/5edcfa31803a8ff7f03e39de1758db09', 73, 1641869606879, ''),
(76, 181, '/p/769f2dc9b12679e2a0826cb4914a347e', 73, 1641869616036, ''),
(77, 170, '/p/1597a7d069c7de9a3376e1d388273e80', 73, 1641869798007, ''),
(78, 167, '/p/3dea0d9eb0669bd0310c2d32e30afe10', 73, 1641869805199, ''),
(79, 185, '/p/56d470b57e10b662437642553a1eaaf9', 73, 1641869929119, ''),
(80, 189, '/p/60028fbb39975fc48cec40f3960b528b', 73, 1641870024226, ''),
(81, 188, '/p/ae5710247f6d8e9a5ecbc27b6273984a', 73, 1641870030398, ''),
(82, 187, '/p/450fd78889849f18ce24613e8b75add4', 73, 1641870117964, ''),
(83, 186, '/p/c2ffc8ae1fdc731fecd5c4a1c051b692', 73, 1641870121396, ''),
(84, 184, '/p/bc407038668d207f5c5be6b64b1dcc51', 73, 1641870135211, ''),
(85, 182, '/p/77e68b85110afb01b26fd0d7d9f07129', 73, 1641870139340, ''),
(86, 168, '/p/1971755cdd7c4f96e4afec47d40a81db', 73, 1641870144979, ''),
(87, 183, '/p/5a94adeca4ace10685104376b2f78c50', 73, 1641870149338, ''),
(88, 171, '/p/5694ecdf1c07592862ea485614132293', 73, 1641870919604, ''),
(89, 196, '/p/be79f536705162b72ca45aedfd9119d8', 73, 1641871400502, ''),
(90, 199, '/p/1c93e148670054ec70e1ea294334e94c', 73, 1641952589577, ''),
(91, 198, '/p/27d4334e367e786cf2d14077105ecdd3', 73, 1641952594035, ''),
(92, 197, '/p/cd688097333ac7c72ccfe73b082addee', 73, 1641952598249, ''),
(93, 195, '/p/36de17b04fb2bc8a65eaec49dc6dbeef', 73, 1641952602812, ''),
(94, 194, '/p/3c8503a9a17bf2352c15eef52f54dc7d', 73, 1641952607497, ''),
(95, 193, '/p/e86916672b21b377a896f254fa76392a', 73, 1641952623161, ''),
(96, 192, '/p/ab035696e5b36991c8f90d97290f965b', 73, 1641952629747, ''),
(97, 191, '/p/c3db1ff9b5e232f770e0e4bfda878a04', 73, 1641952634236, ''),
(98, 190, '/p/92297a2e816ec67f8c8d0294ac0b0018', 73, 1641952638149, '');

-- --------------------------------------------------------

--
-- Table structure for table `emailverifier`
--

CREATE TABLE `emailverifier` (
  `evid` int(11) NOT NULL,
  `email` text NOT NULL,
  `timestamp` bigint(20) DEFAULT NULL,
  `cookiesvalue` text NOT NULL,
  `code` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emailverifier`
--

INSERT INTO `emailverifier` (`evid`, `email`, `timestamp`, `cookiesvalue`, `code`) VALUES
(9, 'computerstha12@gmail.com', NULL, '7e6ae8a6b0592ad9ba57f17b554f9f91', 'gpFFiF'),
(10, 'instagram@gmail.com', NULL, '243a6752be90663ace57520efbebe001', '29D43V'),
(11, 'google@gmail.com', NULL, '447968186d133bf4bbb27c535c08e404', '4ZxNTK'),
(12, 'koolrapperarpan@gmail.com', NULL, 'eedb4192db15e9e6dbeab881d72cc293', 'GfJvVb'),
(13, 'kalpanashrestha2@gmail.com', NULL, '7be39a8b1c1491433ab06b6adfca7777', '4ykOr7'),
(14, 'kalpnashrestha2@gmail.com', NULL, 'b725da32ba88d2ecabef9007dec4d064', 'cE4VgF'),
(15, 'sthasafal8@gmail.com', NULL, '1eb5e393f1f965f5eedcab51b4fe3d24', 'K2XZU4');

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
(351, 75, 73, 1641711966389, 0),
(352, 75, 74, 1641712213146, 0),
(367, 73, 75, 1641825454505, 0),
(368, 73, 74, 1641837049635, 0),
(369, 76, 73, 1641953207601, 0),
(372, 76, 75, 1641956272297, 0),
(374, 79, 73, 1642304566177, 0),
(375, 73, 79, 1642305374197, 0),
(376, 74, 79, 1644107071944, 0),
(377, 74, 78, 1644107073716, 0),
(378, 74, 77, 1644107075488, 0);

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
(108, 99, '#instagram'),
(109, 99, '#insta'),
(110, 100, '#Google'),
(111, 101, '#testing'),
(112, 101, '#google'),
(113, 101, '#done'),
(114, 101, '#correct'),
(115, 102, ''),
(116, 103, ''),
(117, 104, ''),
(118, 105, ''),
(119, 106, '#me'),
(120, 106, '#safal'),
(121, 107, '#cake'),
(122, 108, '#cake'),
(123, 108, '#birthday'),
(124, 109, ''),
(125, 110, '#googleplay'),
(126, 111, '#nature'),
(127, 111, '#naturalbeauty'),
(128, 112, ''),
(129, 113, '#java'),
(130, 114, '#backupcontact'),
(131, 115, '#screenshot'),
(132, 116, ''),
(133, 117, ''),
(134, 118, ''),
(135, 119, '#whoamiprogrammer'),
(136, 120, '#android'),
(137, 121, ''),
(138, 122, '#android'),
(139, 122, '#android'),
(140, 123, '#android'),
(141, 124, ''),
(142, 125, ''),
(143, 126, ''),
(144, 127, ''),
(145, 128, ''),
(146, 129, ''),
(147, 130, ''),
(148, 131, ''),
(149, 132, ''),
(150, 133, ''),
(151, 134, ''),
(152, 135, ''),
(153, 136, ''),
(154, 137, ''),
(155, 138, ''),
(156, 139, ''),
(157, 140, ''),
(158, 141, ''),
(159, 142, ''),
(160, 143, ''),
(161, 144, ''),
(162, 145, ''),
(163, 146, ''),
(164, 147, ''),
(165, 148, ''),
(166, 149, ''),
(167, 150, ''),
(168, 151, ''),
(169, 152, ''),
(170, 153, ''),
(171, 154, ''),
(172, 155, ''),
(173, 156, ''),
(174, 157, ''),
(175, 158, ''),
(176, 159, ''),
(177, 160, ''),
(178, 161, ''),
(179, 162, ''),
(180, 163, ''),
(181, 164, ''),
(182, 165, ''),
(183, 166, ''),
(184, 167, ''),
(185, 168, ''),
(186, 169, ''),
(187, 170, ''),
(188, 171, ''),
(189, 172, ''),
(190, 173, ''),
(191, 174, ''),
(192, 175, ''),
(193, 176, ''),
(194, 177, ''),
(195, 178, ''),
(196, 179, ''),
(197, 180, ''),
(198, 181, ''),
(199, 182, ''),
(200, 183, ''),
(201, 184, ''),
(202, 185, ''),
(203, 186, ''),
(204, 187, ''),
(205, 188, ''),
(206, 189, ''),
(207, 190, ''),
(208, 191, ''),
(209, 192, ''),
(210, 193, ''),
(211, 194, ''),
(212, 195, ''),
(213, 196, ''),
(214, 197, ''),
(215, 198, ''),
(216, 199, ''),
(217, 200, '#wordpress'),
(218, 201, '#car'),
(219, 201, '#BMW'),
(220, 202, '#youtube'),
(221, 202, '#thumbnail'),
(222, 202, '#professional'),
(223, 203, '#instagram'),
(224, 204, ''),
(225, 205, '#close'),
(226, 205, '#icon'),
(227, 206, '#done'),
(228, 206, '#correct'),
(229, 206, '#tick'),
(230, 206, '#logo'),
(231, 207, '#bike'),
(232, 208, '#free'),
(233, 209, '#antiderivatives'),
(234, 209, '#formula'),
(235, 209, '#math'),
(236, 210, '#kotlin'),
(237, 211, '#flowchart'),
(238, 211, '#prime'),
(239, 212, '#sorry'),
(240, 213, '#java'),
(241, 214, '#birthday'),
(242, 215, '#nature'),
(243, 215, '#alone'),
(244, 216, '#flutter'),
(245, 216, '#UI'),
(246, 217, '#ui'),
(247, 217, '#plant'),
(248, 217, '#challenge'),
(249, 218, '#shorts');

-- --------------------------------------------------------

--
-- Table structure for table `initconversation`
--

CREATE TABLE `initconversation` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `isAccept` tinyint(4) NOT NULL,
  `isIgnore` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `initconversation`
--

INSERT INTO `initconversation` (`id`, `timestamp`, `senderId`, `receiverId`, `isAccept`, `isIgnore`) VALUES
(53, 1641705612017, 75, 73, 1, 0),
(54, 1644107542711, 74, 76, 0, 0);

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
(129, 100, 'image/png', 'assets\\media\\images\\postImages\\4b9f122c8c1e5249d06082176f7184addownload.png'),
(130, 101, 'image/png', 'assets\\media\\images\\postImages\\7731b99502a763dee1e96303d2e15d1fdownload.png'),
(131, 101, 'image/svg+xml', 'assets\\media\\images\\postImages\\3b189ed066d7a758087a52557a3bab44correct.svg'),
(132, 101, 'image/svg+xml', 'assets\\media\\images\\postImages\\3b189ed066d7a758087a52557a3bab44done.svg'),
(133, 102, 'image/png', 'assets\\media\\images\\postImages\\fc98df19026df2d014752bf459184c92Instagram_logo_2016.svg.png'),
(134, 103, 'image/svg+xml', 'assets\\media\\images\\postImages\\60147e0a54c3e33f0ded1db8be586e42correct.svg'),
(135, 104, 'image/png', 'assets\\media\\images\\postImages\\14706c38cb4d18b0c9ae47497218677eInstagram_logo_2016.svg.png'),
(136, 105, 'image/svg+xml', 'assets\\media\\images\\postImages\\cfea7a5025832e4546f1f5d3ca475c0fclose.svg'),
(137, 106, 'image/jpeg', 'assets\\media\\images\\postImages\\24aa5fe618ead6eb4c1afc9e682ca214241057189_343948997456699_1907786023424279789_n.jpg'),
(138, 107, 'image/png', 'assets\\media\\images\\postImages\\fd13bc32037f8169751b59d5a09d40eecake.png'),
(139, 108, 'image/png', 'assets\\media\\images\\postImages\\35af663de7bd9f8fdd3faebc766279edcake.png'),
(140, 109, 'image/png', 'assets\\media\\images\\postImages\\0468147315f5872f9d4b295433a65fe9google-play-services-png-logo-3.png'),
(141, 110, 'image/png', 'assets\\media\\images\\postImages\\2f330a180cc8b0be464e0cbb65b6091egoogle-play-services-png-logo-3.png'),
(142, 111, 'image/jpeg', 'assets\\media\\images\\postImages\\b05a1907dd1a808ed249130aec198aa3img.jpg'),
(143, 112, 'image/png', 'assets\\media\\images\\postImages\\314915f5af5c9c5a5a99fef9eecb8354life_20200615165119.png'),
(144, 113, 'image/png', 'assets\\media\\images\\postImages\\be1ab5bc4ff367783d20176561d82209Java-Logo.png'),
(145, 114, 'image/webp', 'assets\\media\\images\\postImages\\a2170ef63f8fe9825391de17dcd9f925unnamed.webp'),
(146, 115, 'image/png', 'assets\\media\\images\\postImages\\af77e01523d0c84c514fba5d4d2487e5Screenshot_1630224395.png'),
(147, 115, 'image/png', 'assets\\media\\images\\postImages\\40fa7413d1c2ade184fee9045c88b7c3Screenshot_1630224418.png'),
(148, 115, 'image/png', 'assets\\media\\images\\postImages\\486743dd993608c5a087f49b3b87183bScreenshot_1631277003.png'),
(149, 115, 'image/png', 'assets\\media\\images\\postImages\\e094ee251ee3e5a1c31fbf1d876049c3Screenshot_1632131119.png'),
(150, 116, 'image/webp', 'assets\\media\\images\\postImages\\46751e759dd557087dbe2da0b3e45b50unit-1-internet-technology-t-36-638.webp'),
(151, 117, 'image/png', 'assets\\media\\images\\postImages\\8df0458320f6d46353b53e3f381cdd02verification.PNG'),
(152, 118, 'image/png', 'assets\\media\\images\\postImages\\4760401b08c0e01df16825a437124044phone-1682317_1280.png'),
(153, 119, 'image/png', 'assets\\media\\images\\postImages\\ebce09b0126dc35464ca7864d32edeb9whoamiprogrammer.png'),
(241, 200, 'image/png', 'assets\\media\\images\\postImages\\3d9c5323da079ae891ad83356aed3f9e.png'),
(242, 201, 'image/png', 'assets\\media\\images\\postImages\\0c841a33c67549af760abad351805df5.png'),
(243, 202, 'image/png', 'assets\\media\\images\\postImages\\21ad70bb702a453e33a5de5e067df501.png'),
(244, 203, 'image/png', 'assets\\media\\images\\postImages\\42523e19cfbaaac81d52925f3ee85f59.png'),
(245, 204, 'image/png', 'assets\\media\\images\\postImages\\2de63c153ce0e101755f8c9f5f47533d.png'),
(246, 205, 'image/svg+xml', 'assets\\media\\images\\postImages\\039c2da8b4d834127882cdcd0879ed5b.svg'),
(247, 206, 'image/svg+xml', 'assets\\media\\images\\postImages\\078fef782df692411b0ded482241071b.svg'),
(248, 207, 'image/jpeg', 'assets\\media\\images\\postImages\\73e026177a843f923da789a4e07a451a.jpg'),
(249, 207, 'image/jpeg', 'assets\\media\\images\\postImages\\910ebe2f2f6dc3736572c3233f448591.jpg'),
(250, 207, 'image/jpeg', 'assets\\media\\images\\postImages\\9c761d68818e01be6e039150d47f758b.jpg'),
(251, 208, 'image/jpeg', 'assets\\media\\images\\postImages\\26a36c405acc47a5844417319fccb4f7.jpg'),
(252, 209, 'image/jpeg', 'assets\\media\\images\\postImages\\f33e825b38b81008062b5c2034f6661a.jpg'),
(253, 210, 'image/jpeg', 'assets\\media\\images\\postImages\\cb6734dea7502ced1bee3790c18af567.jpg'),
(254, 211, 'image/png', 'assets\\media\\images\\postImages\\5b063ee50b07950fa0f9690ea8023873.png'),
(255, 212, 'image/jpeg', 'assets\\media\\images\\postImages\\a4bfc7b5283f5a54da853ab65ac0f50a.jpg'),
(256, 213, 'image/png', 'assets\\media\\images\\postImages\\901765df32e2106dac3151a239cb34a6.png'),
(257, 214, 'image/png', 'assets\\media\\images\\postImages\\5efcb29543383e48a5412c351a2912c2.png'),
(258, 215, 'image/png', 'assets\\media\\images\\postImages\\f37c7d9f2f6cbe9b5b5a785a60bee429.png'),
(259, 216, 'image/png', 'assets\\media\\images\\postImages\\b200c3c275c46b830aa4cf646219aa2a.png'),
(260, 217, 'image/png', 'assets\\media\\images\\postImages\\3824007593a2f2c75abf4ba49bce80e6.png'),
(261, 218, 'video/mp4', 'assets\\media\\videos\\485afa75582289519d48ccb65f214e4c.mp4');

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
(54, 99, 75, 75, 1641695890247),
(55, 118, 75, 75, 1641712221936),
(56, 119, 75, 75, 1641712224003),
(57, 132, 73, 73, 1641834346208),
(58, 199, 73, 73, 1641890710404),
(59, 207, 73, 73, 1642303911599),
(60, 211, 79, 73, 1642304574820),
(61, 210, 79, 73, 1642304578126),
(62, 209, 79, 73, 1642304581789),
(63, 208, 79, 73, 1642304584343),
(64, 212, 74, 79, 1644107102868),
(65, 215, 74, 74, 1644107232145),
(66, 218, 74, 74, 1644107400887);

-- --------------------------------------------------------

--
-- Table structure for table `passwordchanger`
--

CREATE TABLE `passwordchanger` (
  `pcid` int(11) NOT NULL,
  `email` text NOT NULL,
  `passwordChangeCode` text NOT NULL,
  `timestamp` bigint(11) NOT NULL,
  `old_password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `passwordchanger`
--

INSERT INTO `passwordchanger` (`pcid`, `email`, `passwordChangeCode`, `timestamp`, `old_password`) VALUES
(19, 'koolrapperarpan@gmail.com', 'b6a2c682a37c1ec81b38e887f9cd7d61', 1641956143041, 'a13df40450ca074095af39008ce18a7c'),
(20, 'instagram@gmail.com', '5fad72e0afbe10092c6b1817c14fd822', 1641956500290, 'ad56df3bb504ebb41236bdb93c2e9958'),
(21, 'computerstha12@gmail.com', '965d6cc46c1dd12f0782ec76c436b790', 1642240702244, '85a5893ef56c0fc93031d103b48c30db');

-- --------------------------------------------------------

--
-- Table structure for table `passwordreset`
--

CREATE TABLE `passwordreset` (
  `pid` int(11) NOT NULL,
  `email` text NOT NULL,
  `code` text NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `ucode` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `passwordreset`
--

INSERT INTO `passwordreset` (`pid`, `email`, `code`, `timestamp`, `ucode`) VALUES
(8, 'koolrapperarpan@gmail.com', 'UGWbNj', 1641955863031, '7c6a8e0a3f0910d353616a872ffc6dfe'),
(9, 'instagram@gmail.com', 'jaZax4', 1641956435002, '3c17972a363d15a919bfaa5e883b6377'),
(10, 'computerstha12@gmail.com', 'D8utUc', 1642323225487, 'b4756bb17f8ab0586a0bec47764104bb');

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
(204, '/p/739b2bca140fb211e04d9ae89aba5fd4', 73, 1642243392013, ''),
(205, '/p/6b68630a29aca7e8d819bfe9dd50d038', 73, 1642243411620, '#close\r\n#icon'),
(206, '/p/bd5f315abb6e6e8334f154d800036209', 73, 1642243439914, '#done\r\n#correct\r\n#tick\r\n#logo'),
(207, '/p/8036d08ee85224f5ee94004c92100859', 73, 1642303228905, '#bike\r\n'),
(208, '/p/b3f6fc5a1732761a3b247c598a69ff8c', 73, 1642303772865, '#free'),
(209, '/p/04087044acd375281b40aae343219385', 73, 1642304050512, '#antiderivatives \r\n#formula \r\n#math\r\n'),
(210, '/p/a1f0824cfc61c9c28ea9b3804143d388', 73, 1642304071414, '#kotlin '),
(211, '/p/e8e7025da4d700863caceff5c03f38ae', 73, 1642304319504, '#flowchart \r\n#prime number '),
(212, '/p/e811461e6c7cefefa727425b615e683c', 79, 1642304633381, '#sorry'),
(213, '/p/2a014c5133947f6eacbc293ca1d5302c', 73, 1642305441601, '#java'),
(214, '/p/80086aced2b9bc501983c42c9cfb6852', 73, 1642305469135, '#birthday'),
(215, '/p/fb67fb98be44f3830f667e49e7ac9690', 74, 1644107152265, '#nature\r\n#alone'),
(216, '/p/fd0d12399d6189f865b5c37578a2dfa3', 74, 1644107272231, '#flutter\r\n#UI Challenge'),
(217, '/p/c6cb147d38ad30330ec7b5d8825d4dd5', 74, 1644107312574, '#ui \r\n#plant app ui\r\n#challenge'),
(218, '/p/83c6f41f2cbe089d091bd90ef433e170', 74, 1644107384515, '#shorts');

-- --------------------------------------------------------

--
-- Table structure for table `postviewer`
--

CREATE TABLE `postviewer` (
  `pvid` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `postUrl` text NOT NULL,
  `view_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `postviewer`
--

INSERT INTO `postviewer` (`pvid`, `timestamp`, `postUrl`, `view_by`) VALUES
(73, 1641695923456, '/p/c5662bfb0b8bff53a94a74c8829f882e', 75),
(74, 1641703782823, '/p/2654c4b6be3b507e0b96fe0a2f254488', 75),
(75, 1641704021752, '/p/71252d4a8fc4431007f8411292503d2e', 75),
(76, 1641704155821, '/p/71252d4a8fc4431007f8411292503d2e', 75),
(77, 1641704155823, '/p/2654c4b6be3b507e0b96fe0a2f254488', 75),
(78, 1641704365317, '/p/4b5118c0e1510b43248f3b4570b1d11c', 75),
(79, 1641704454778, '/p/2654c4b6be3b507e0b96fe0a2f254488', 75),
(80, 1641704454783, '/p/4b5118c0e1510b43248f3b4570b1d11c', 75),
(81, 1641704454784, '/p/71252d4a8fc4431007f8411292503d2e', 75),
(82, 1641704647814, '/p/71252d4a8fc4431007f8411292503d2e', 75),
(83, 1641704647817, '/p/4b5118c0e1510b43248f3b4570b1d11c', 75),
(84, 1641704648797, '/p/2654c4b6be3b507e0b96fe0a2f254488', 75),
(85, 1641704660778, '/p/bb77a5f456bf7d534c202f976143deb2', 75),
(86, 1641704873810, '/p/bb77a5f456bf7d534c202f976143deb2', 75),
(87, 1641705485614, '/p/aeee77b1b9a58e37b06ae45d1323d100', 75),
(88, 1641705502239, '/p/02f8ba971604a48bb4a8515941ab1749', 75),
(89, 1641713806807, '/p/bb77a5f456bf7d534c202f976143deb2', 75),
(90, 1641713821779, '/p/bb77a5f456bf7d534c202f976143deb2', 75),
(91, 1641713832483, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(92, 1641714911781, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(93, 1641714959442, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(94, 1641714994251, '/p/19baa85c7231fa1912b2ac88870ab0e7', 73),
(95, 1641715002215, '/p/ebef833c1b86bb11e81e7ce2dccf4815', 73),
(96, 1641715034642, '/p/ebef833c1b86bb11e81e7ce2dccf4815', 73),
(97, 1641715068721, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(98, 1641715090275, '/p/02f8ba971604a48bb4a8515941ab1749', 73),
(99, 1641715159970, '/p/71252d4a8fc4431007f8411292503d2e', 73),
(100, 1641717050802, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(101, 1641717759787, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(102, 1641717831784, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(103, 1641717953086, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(104, 1641718075801, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(105, 1641718099795, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(106, 1641718134767, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(107, 1641718159514, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(108, 1641718176657, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(109, 1641825520558, '/p/13e0dcbd4a336e66002f2a5ac8591c1f', 73),
(110, 1641825554714, '/p/13e0dcbd4a336e66002f2a5ac8591c1f', 73),
(111, 1641832042037, '/p/0ad8fed9a9b0bf27aa4787990fbd3eaa', 73),
(112, 1641832056383, '/p/0ad8fed9a9b0bf27aa4787990fbd3eaa', 73),
(113, 1641832068390, '/p/ebef833c1b86bb11e81e7ce2dccf4815', 73),
(114, 1641836977587, '/p/9011b68c664f003c4e01e066c3782f63', 73),
(115, 1641836991104, '/p/9011b68c664f003c4e01e066c3782f63', 73),
(116, 1641867406474, '/p/769f2dc9b12679e2a0826cb4914a347e', 73),
(117, 1641867420214, '/p/da9e007fd9ea3d668d8f04d5baec69eb', 73),
(118, 1641868090310, '/p/da9e007fd9ea3d668d8f04d5baec69eb', 73),
(119, 1641870672763, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(120, 1641870687094, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(121, 1641870705525, '/p/bb77a5f456bf7d534c202f976143deb2', 73),
(122, 1641870797633, '/p/a910184b3a5cceff41d477a30afe5c58', 73),
(123, 1641871304766, '/p/cd688097333ac7c72ccfe73b082addee', 73),
(124, 1641871761891, '/p/27d4334e367e786cf2d14077105ecdd3', 73),
(125, 1641952322882, '/p/7b787c435009d4ec6a4b7c5b108fd397', 76),
(126, 1641952398662, '/p/7b787c435009d4ec6a4b7c5b108fd397', 76),
(127, 1641952481464, '/p/d374399871e26643013f0104f01fb558', 76),
(128, 1641956866543, '/p/37603009ba147a74b0aae7f51013bcac', 76),
(129, 1641956886196, '/p/37603009ba147a74b0aae7f51013bcac', 76),
(130, 1641956914723, '/p/37603009ba147a74b0aae7f51013bcac', NULL),
(131, 1641957008890, '/p/37603009ba147a74b0aae7f51013bcac', 76),
(132, 1641957028537, '/p/37603009ba147a74b0aae7f51013bcac', 76),
(133, 1642241254843, '/p/7b787c435009d4ec6a4b7c5b108fd397', 78),
(134, 1642303240478, '/p/8036d08ee85224f5ee94004c92100859', 73),
(135, 1642303670794, '/p/8036d08ee85224f5ee94004c92100859', 73),
(136, 1642303783930, '/p/b3f6fc5a1732761a3b247c598a69ff8c', 73),
(137, 1642303921942, '/p/8036d08ee85224f5ee94004c92100859', 73),
(138, 1642303963901, '/p/739b2bca140fb211e04d9ae89aba5fd4', 73),
(139, 1642303973705, '/p/739b2bca140fb211e04d9ae89aba5fd4', 73),
(140, 1642303988003, '/p/b3f6fc5a1732761a3b247c598a69ff8c', 73),
(141, 1642304185007, '/p/04087044acd375281b40aae343219385', 73),
(142, 1642304330063, '/p/e8e7025da4d700863caceff5c03f38ae', 73),
(143, 1642304643854, '/p/e811461e6c7cefefa727425b615e683c', 79),
(144, 1642305149531, '/p/a1f0824cfc61c9c28ea9b3804143d388', 79),
(145, 1644107162469, '/p/fb67fb98be44f3830f667e49e7ac9690', 74),
(146, 1644107286155, '/p/fd0d12399d6189f865b5c37578a2dfa3', 74),
(147, 1644107394199, '/p/83c6f41f2cbe089d091bd90ef433e170', 74);

-- --------------------------------------------------------

--
-- Table structure for table `profilevisitor`
--

CREATE TABLE `profilevisitor` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `visited_by` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profilevisitor`
--

INSERT INTO `profilevisitor` (`id`, `timestamp`, `visited_by`, `userId`) VALUES
(122, 1641695760783, 75, 75),
(123, 1641695872829, 75, 74),
(124, 1641713252807, 75, 0),
(125, 1641713299829, 75, 0),
(126, 1641713395804, 75, 0),
(127, 1641716879778, 73, 74),
(128, 1641718158760, 73, 0),
(129, 1641956407488, 76, 74),
(130, 1641956633361, 76, 74),
(131, 1641956685610, 76, 0),
(132, 1641956742965, 76, 74),
(133, 1642240732770, NULL, 0),
(134, 1642241330959, 73, 78),
(135, 1642304125719, 73, 77),
(136, 1642305121665, 79, 73),
(137, 1644107545266, 74, 79);

-- --------------------------------------------------------

--
-- Table structure for table `saved`
--

CREATE TABLE `saved` (
  `sid` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `saved`
--

INSERT INTO `saved` (`sid`, `userId`, `postId`, `timestamp`) VALUES
(13, 73, 208, 1642303935504),
(14, 73, 204, 1642303938984),
(15, 79, 210, 1642304579471),
(16, 74, 215, 1644107228093);

-- --------------------------------------------------------

--
-- Table structure for table `tagged`
--

CREATE TABLE `tagged` (
  `taggedId` int(11) NOT NULL,
  `tagged_by` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `timestamp` bigint(11) NOT NULL,
  `tagged_to` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` text NOT NULL,
  `fullname` text NOT NULL,
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
(73, 'safalshrestha', 'computerstha12@gmail.com', 'Safal Shrestha', 'user', 1641695150943, 1, '85a5893ef56c0fc93031d103b48c30db', 'assets\\media\\images\\profile\\bc8f6cae30484d0094af8ac0c085d36c.png'),
(74, 'Instagram', 'instagram@gmail.com', 'Instagram ', 'user', 1641695275751, 1, '85a5893ef56c0fc93031d103b48c30db', 'assets\\media\\images\\profile\\55f015a0c5605702f913536afe70cfb0.png'),
(75, 'google', 'google@gmail.com', 'Google', 'user', 1641695660125, 1, '5d75d968c6d179df6a559a15c904612d', 'assets\\media\\images\\profile\\f3bac7433e6cde1951a3c0fdedc11f19download.png'),
(76, 'arpan', 'koolrapperarpan@gmail.com', 'Arpan Kumar Pariyar', 'user', 1641951896883, 1, '4b4715dc79615fa37941ab1474db3a8e', 'assets\\media\\images\\profile\\f37427482b0311a8f3ea336ba0b60df1.png'),
(77, 'shristi', 'kalpanashrestha2@gmail.com', 'Shristi Shrestha', 'user', 1642240959404, 0, '3c1a785cdda72d4e1817c0b7fa81b5a7', 'assets/media/images/profile/profile.jpg'),
(78, 'shristi_s', 'kalpnashrestha2@gmail.com', 'Shristi Shrestha', 'user', 1642241141246, 1, '3c1a785cdda72d4e1817c0b7fa81b5a7', 'assets\\media\\images\\profile\\cde3212648529a8757fa2b3c5fc3e455.jpg'),
(79, 'safalshrestha12', 'sthasafal8@gmail.com', 'Safal Shrestha', 'user', 1642304439683, 1, '85a5893ef56c0fc93031d103b48c30db', 'assets/media/images/profile/profile.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `userId` int(11) NOT NULL,
  `account_visiblity` varchar(20) NOT NULL,
  `account_type` varchar(20) NOT NULL,
  `description` varchar(150) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `last_modified` bigint(20) NOT NULL,
  `account_status` varchar(20) NOT NULL,
  `website` text DEFAULT NULL,
  `gender` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`userId`, `account_visiblity`, `account_type`, `description`, `date_of_birth`, `last_modified`, `account_status`, `website`, `gender`) VALUES
(73, 'Public', 'Personnel', 'I am safal.', '0000-00-00', 1642303851486, 'Active', 'Whoamiprogrammer.com ', 0),
(74, 'Public', 'Personnel', '', NULL, 752, 'Active', NULL, NULL),
(75, 'Public', 'Personnel', '', NULL, 128, 'Active', NULL, NULL),
(76, 'Public', 'Personnel', '', NULL, 887, 'Active', NULL, NULL),
(77, 'Public', 'Personnel', '', NULL, 406, 'Active', NULL, NULL),
(78, 'Public', 'Personnel', '', NULL, 248, 'Active', NULL, NULL),
(79, 'Public', 'Personnel', '', NULL, 688, 'Active', NULL, NULL);

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
-- Indexes for table `deleted_media`
--
ALTER TABLE `deleted_media`
  ADD PRIMARY KEY (`dmediaId`);

--
-- Indexes for table `deleted_post`
--
ALTER TABLE `deleted_post`
  ADD PRIMARY KEY (`dpostId`);

--
-- Indexes for table `emailverifier`
--
ALTER TABLE `emailverifier`
  ADD PRIMARY KEY (`evid`);

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
-- Indexes for table `passwordchanger`
--
ALTER TABLE `passwordchanger`
  ADD PRIMARY KEY (`pcid`);

--
-- Indexes for table `passwordreset`
--
ALTER TABLE `passwordreset`
  ADD PRIMARY KEY (`pid`),
  ADD UNIQUE KEY `email` (`email`(512));

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postId`),
  ADD UNIQUE KEY `postUrl` (`postUrl`) USING HASH;

--
-- Indexes for table `postviewer`
--
ALTER TABLE `postviewer`
  ADD PRIMARY KEY (`pvid`);

--
-- Indexes for table `profilevisitor`
--
ALTER TABLE `profilevisitor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saved`
--
ALTER TABLE `saved`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `userId` (`userId`,`postId`);

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
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=437;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `deleted_media`
--
ALTER TABLE `deleted_media`
  MODIFY `dmediaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `deleted_post`
--
ALTER TABLE `deleted_post`
  MODIFY `dpostId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `emailverifier`
--
ALTER TABLE `emailverifier`
  MODIFY `evid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=379;

--
-- AUTO_INCREMENT for table `hashtag`
--
ALTER TABLE `hashtag`
  MODIFY `hashtagId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT for table `initconversation`
--
ALTER TABLE `initconversation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `insta_media`
--
ALTER TABLE `insta_media`
  MODIFY `mediaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=262;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `passwordchanger`
--
ALTER TABLE `passwordchanger`
  MODIFY `pcid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `passwordreset`
--
ALTER TABLE `passwordreset`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `postId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=219;

--
-- AUTO_INCREMENT for table `postviewer`
--
ALTER TABLE `postviewer`
  MODIFY `pvid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT for table `profilevisitor`
--
ALTER TABLE `profilevisitor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT for table `saved`
--
ALTER TABLE `saved`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tagged`
--
ALTER TABLE `tagged`
  MODIFY `taggedId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
