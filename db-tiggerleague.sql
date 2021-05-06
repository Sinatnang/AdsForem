-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 09, 2021 at 10:56 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `tiger_league`
--

-- --------------------------------------------------------

--
-- Table structure for table `assists`
--

CREATE TABLE `assists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Assists',
  `assists_count` int(11) NOT NULL DEFAULT '0',
  `status_assist` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `player_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `assists`
--

INSERT INTO `assists` (`id`, `state`, `assists_count`, `status_assist`, `created_at`, `updated_at`, `player_id`) VALUES
(1, 'Assists', 2, 0, '2020-01-07 21:16:40', '2020-01-07 21:16:40', 1);

-- --------------------------------------------------------

--
-- Table structure for table `clubs`
--

CREATE TABLE `clubs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `club_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shirt_color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `club_province` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `club_logo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` int(11) NOT NULL DEFAULT '0',
  `match_score` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clubs`
--

INSERT INTO `clubs` (`id`, `club_name`, `shirt_color`, `club_province`, `club_logo`, `created_at`, `updated_at`, `state`, `match_score`) VALUES
(1, 'Phnom Penh Crown', 'primary', '1', '1578455804_2.png', '2020-01-07 20:56:44', '2020-01-07 20:56:44', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `coaches`
--

CREATE TABLE `coaches` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nationality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `tall` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `goals`
--

CREATE TABLE `goals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Goals',
  `goals_count` int(11) NOT NULL DEFAULT '0',
  `status_goal` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `player_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `goals`
--

INSERT INTO `goals` (`id`, `state`, `goals_count`, `status_goal`, `created_at`, `updated_at`, `player_id`) VALUES
(1, 'Goal', 1, 0, '2020-01-07 20:57:55', '2020-01-07 20:57:55', 1);

-- --------------------------------------------------------

--
-- Table structure for table `matchday`
--

CREATE TABLE `matchday` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `place_matched` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `matchday_team_match`
--

CREATE TABLE `matchday_team_match` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_match_id` int(11) NOT NULL,
  `matchday_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `match_status`
--

CREATE TABLE `match_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `match_status`
--

INSERT INTO `match_status` (`id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Won', NULL, NULL),
(2, 'Draw', NULL, NULL),
(3, 'Loss', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_11_21_102156_create_clubs_table', 1),
(5, '2019_11_22_021517_create_goals_table', 1),
(6, '2019_11_22_021530_create_assists_table', 1),
(7, '2019_11_22_021550_create_yellow_cards_table', 1),
(8, '2019_11_22_021559_create_red_cards_table', 1),
(9, '2019_11_22_023636_create_players_table', 1),
(10, '2019_11_22_030031_create_coaches_table', 1),
(11, '2019_11_22_030129_create_stadiums_table', 1),
(12, '2019_11_22_040438_add_club_id_to_stadiums_table', 1),
(13, '2019_11_22_082942_create_team_match_table', 1),
(14, '2019_11_22_083059_create_matchday_table', 1),
(15, '2019_11_24_031929_add_state_to_clubs_table', 1),
(16, '2019_11_24_072331_add_state_to_players_table', 1),
(17, '2019_11_24_082456_create_match_status_table', 1),
(18, '2019_11_27_074006_create_matchday_team_match_table', 1),
(19, '2019_11_29_010557_add_player_id_to_goals_table', 1),
(20, '2019_11_29_025632_add_player_id_to_assists_table', 1),
(21, '2019_11_29_032441_add_player_id_to_yellow_cards_table', 1),
(22, '2019_11_29_035650_add_player_id_to_red_cards_table', 1),
(23, '2019_12_02_023838_add_club_id_to_team_match_table', 1),
(24, '2019_12_16_072034_add_match_score_to_clubs_table', 1),
(25, '2019_12_17_023946_add_team_id_to_players_table', 1),
(26, '2019_12_18_025951_add_state_to_matchday_table', 1),
(27, '2019_12_23_094119_create_provinces_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nationality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shirt_number` int(11) NOT NULL,
  `date_of_birth` date NOT NULL,
  `tall` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` int(11) NOT NULL DEFAULT '0',
  `team_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `gender`, `position`, `avatar`, `nationality`, `shirt_number`, `date_of_birth`, `tall`, `created_at`, `updated_at`, `state`, `team_id`) VALUES
(1, 'Chan Vathanaka', 'Male', 'Mifielder', '1578455862_0.jpeg', 'Cambodia', 10, '1994-01-03', 1.70, '2020-01-07 20:57:42', '2020-01-07 20:57:42', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `province` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `province`, `created_at`, `updated_at`) VALUES
(1, 'Phnom Penh', NULL, NULL),
(2, 'Pursat', NULL, NULL),
(3, 'Battambang', NULL, NULL),
(4, 'Kampong Cham', NULL, NULL),
(5, 'Banteay Meanchey', NULL, NULL),
(6, 'Kampong Chhnang', NULL, NULL),
(7, 'Kampong Speu', NULL, NULL),
(8, 'Kampot', NULL, NULL),
(9, 'Kandal', NULL, NULL),
(10, 'Kep', NULL, NULL),
(11, 'Kratie', NULL, NULL),
(12, 'Koh Kong', NULL, NULL),
(13, 'Mondulkiri', NULL, NULL),
(14, 'Oddor Meanchey', NULL, NULL),
(15, 'Pailin', NULL, NULL),
(16, 'Prey Veng', NULL, NULL),
(17, 'Rattanakiri', NULL, NULL),
(18, 'Siem Reap', NULL, NULL),
(19, 'Sihanouk ville', NULL, NULL),
(20, 'Stung Treng', NULL, NULL),
(21, 'Svay Rieng', NULL, NULL),
(22, 'Takeo', NULL, NULL),
(23, 'Kampong Thom', NULL, NULL),
(24, 'Preah Vihear', NULL, NULL),
(25, 'Tbong Khmum', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `red_cards`
--

CREATE TABLE `red_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Red Cards',
  `red_cards_count` int(11) NOT NULL DEFAULT '0',
  `status_red_card` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `player_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `red_cards`
--

INSERT INTO `red_cards` (`id`, `state`, `red_cards_count`, `status_red_card`, `created_at`, `updated_at`, `player_id`) VALUES
(1, 'Red Cards', 1, 0, '2020-01-07 21:40:37', '2020-01-07 21:40:37', 1);

-- --------------------------------------------------------

--
-- Table structure for table `stadiums`
--

CREATE TABLE `stadiums` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_number` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `club_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `team_match`
--

CREATE TABLE `team_match` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `goal` int(11) DEFAULT NULL,
  `team_standing` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `club_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Administractor', 'admin@gmail.com', NULL, '$2y$10$2qCbTJ7I1uLVUsBHvCZNa.6.8eUtPWxzEfPIVz0zZmXza9snlwtB.', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `yellow_cards`
--

CREATE TABLE `yellow_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Yellow Cards',
  `yellow_cards_count` int(11) NOT NULL DEFAULT '0',
  `status_yellow_card` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `player_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `yellow_cards`
--

INSERT INTO `yellow_cards` (`id`, `state`, `yellow_cards_count`, `status_yellow_card`, `created_at`, `updated_at`, `player_id`) VALUES
(1, 'Yellow Cards', 1, 0, '2020-01-07 21:40:30', '2020-01-07 21:40:30', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assists`
--
ALTER TABLE `assists`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `assists_player_id_unique` (`player_id`);

--
-- Indexes for table `clubs`
--
ALTER TABLE `clubs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coaches`
--
ALTER TABLE `coaches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goals`
--
ALTER TABLE `goals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `goals_player_id_unique` (`player_id`);

--
-- Indexes for table `matchday`
--
ALTER TABLE `matchday`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `matchday_team_match`
--
ALTER TABLE `matchday_team_match`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `match_status`
--
ALTER TABLE `match_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `red_cards`
--
ALTER TABLE `red_cards`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `red_cards_player_id_unique` (`player_id`);

--
-- Indexes for table `stadiums`
--
ALTER TABLE `stadiums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_match`
--
ALTER TABLE `team_match`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `yellow_cards`
--
ALTER TABLE `yellow_cards`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `yellow_cards_player_id_unique` (`player_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assists`
--
ALTER TABLE `assists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `clubs`
--
ALTER TABLE `clubs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coaches`
--
ALTER TABLE `coaches`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `goals`
--
ALTER TABLE `goals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `matchday`
--
ALTER TABLE `matchday`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `matchday_team_match`
--
ALTER TABLE `matchday_team_match`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `match_status`
--
ALTER TABLE `match_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `red_cards`
--
ALTER TABLE `red_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stadiums`
--
ALTER TABLE `stadiums`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `team_match`
--
ALTER TABLE `team_match`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `yellow_cards`
--
ALTER TABLE `yellow_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
