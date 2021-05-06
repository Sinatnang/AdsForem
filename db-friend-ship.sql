-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 09, 2021 at 10:54 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `friendship_club`
--

-- --------------------------------------------------------

--
-- Table structure for table `archievestatus`
--

CREATE TABLE `archievestatus` (
  `id` int(11) NOT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `archievestatus`
--

INSERT INTO `archievestatus` (`id`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Actived', NULL, NULL),
(0, 'Archieved', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bannerpage`
--

CREATE TABLE `bannerpage` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `banner_image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `archieve_id` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `campaign`
--

CREATE TABLE `campaign` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `restaurant_maps` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `web_site` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `campaign_image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `date` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state_id` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Restaurants', NULL, NULL),
(2, 'Shopping', NULL, NULL),
(3, 'Sports', NULL, NULL),
(4, 'Events', NULL, NULL),
(5, 'Visit', NULL, NULL),
(6, 'Gym', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contactinformation`
--

CREATE TABLE `contactinformation` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_cell` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_blog` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `contact_image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_blog_kh` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://www.postkhmer.com/',
  `company_maps` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contactinformation`
--

INSERT INTO `contactinformation` (`id`, `company_name`, `company_address`, `company_email`, `company_cell`, `company_blog`, `created_at`, `updated_at`, `contact_image`, `company_blog_kh`, `company_maps`) VALUES
(1, 'Post Media Co Ltd', 'The Elements Condominium, Level 7, Hun Sen Boulevard Phum Prek Talong, Sangkat Chak Angre Krom Phnom Penh, 12353', 'support@phnompenhpost.com', '855(0) 23 888 161 / 162', 'https://www.phnompenhpost.com/', NULL, NULL, '', 'https://www.postkhmer.com/', '');

-- --------------------------------------------------------

--
-- Table structure for table `contact_user`
--

CREATE TABLE `contact_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `countrydraft`
--

CREATE TABLE `countrydraft` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `countryicon`
--

CREATE TABLE `countryicon` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `file_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `archieve_id` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `countrylists`
--

CREATE TABLE `countrylists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `state_id` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countrylists`
--

INSERT INTO `countrylists` (`id`, `name`, `address`, `city`, `created_at`, `updated_at`, `state_id`) VALUES
(1, 'American', 'New York city', 'New York', NULL, NULL, 1),
(2, 'Cambodia', 'Phnom Penh city', 'Phnom Penh', NULL, NULL, 1),
(3, 'Japan', 'Tokyo city', 'Tokyo', NULL, NULL, 1),
(4, 'Malaysia', 'Kuala Lumpur city', 'Kuala Lumpur', NULL, NULL, 1),
(5, 'France', 'Paris City', 'Paris', NULL, NULL, 1),
(6, 'China', 'Beijing city', 'Beijing', NULL, NULL, 1),
(7, 'Thailand', 'Bangkok city', 'Bangkok', NULL, NULL, 1),
(8, 'Singapore', 'Singapore city', 'Singapore', NULL, NULL, 1),
(9, 'Myanmar', 'Naypyidaw city', 'Naypyidaw', NULL, NULL, 1),
(10, 'Germany', 'Berlin city', 'Berlin', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `countrylogo`
--

CREATE TABLE `countrylogo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `file_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `archieve_id` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_07_17_072708_add_avatar_to_users_table', 1),
(4, '2019_07_17_072916_create_roles_table', 1),
(5, '2019_07_21_140849_create_countrylists_table', 1),
(6, '2019_07_21_152326_create_countryicon_table', 1),
(7, '2019_07_22_035308_create_posts_table', 1),
(8, '2019_07_23_031632_create_countrylogo_table', 1),
(9, '2019_07_23_094817_add_country_id_to_countryicon_table', 1),
(10, '2019_07_23_095225_add_country_id_to_countrylogo_table', 1),
(11, '2019_07_25_063313_add_role_id_to_users_table', 1),
(12, '2019_07_25_095228_create_userstatus_table', 1),
(13, '2019_07_25_095348_add_status_id_to_users_table', 1),
(14, '2019_07_26_100419_create_poststatus_table', 1),
(15, '2019_07_26_100606_add_status_id_to_posts_table', 1),
(16, '2019_07_29_065001_add_country_id_to_users_table', 1),
(17, '2019_07_30_023554_create_categories_table', 1),
(18, '2019_07_30_060312_add_category_id_to_posts_table', 1),
(19, '2019_07_31_013630_add_country_id_to_posts_table', 1),
(20, '2019_08_01_035127_create_bannerpage_table', 1),
(21, '2019_08_01_035319_add_country_id_to_bannerpage_table', 1),
(22, '2019_08_05_042117_create_archievestatus_table', 1),
(23, '2019_08_05_045429_add_archieve_id_to_posts_table', 1),
(24, '2019_08_05_090922_add_state_id_to_countrylists_table', 1),
(25, '2019_08_07_015154_add_archieve_id_to_countrylogo_table', 1),
(26, '2019_08_07_023330_add_archieve_id_to_countryicon_table', 1),
(27, '2019_08_08_091810_add_archieve_id_to_bannerpage_table', 1),
(28, '2019_08_09_044355_create_contactinformation_table', 1),
(29, '2019_08_09_044420_add_contact_image_to_contactinformation_table', 1),
(30, '2019_08_14_085511_create_campaign_table', 1),
(31, '2019_08_14_085659_add_campaign_image_to_campaign_table', 1),
(32, '2019_08_14_090010_add_country_id_to_campaign_table', 1),
(33, '2019_08_16_091846_create_contact_user_table', 1),
(34, '2019_08_21_085521_add_user_id_to_posts_table', 1),
(35, '2019_08_26_091317_add_date_to_campaign_table', 1),
(36, '2019_08_27_072953_add_state_id_to_campaign_table', 1),
(37, '2019_09_18_085705_create_countrydraft_table', 1),
(38, '2019_11_04_164402_add_company_blog_kh_to_contactinformation_table', 1),
(39, '2019_11_05_091119_add_company_maps_to_contactinformation_table', 1),
(40, '2020_06_16_094819_add_clos_time_to_posts_table', 1),
(41, '2020_06_16_094831_add_open_time_to_posts_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `restaurant_maps` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `web_site` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `tags` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_image` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status_id` int(11) NOT NULL DEFAULT '1',
  `category_id` int(10) UNSIGNED NOT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `archieve_id` int(11) NOT NULL DEFAULT '1',
  `user_id` int(10) UNSIGNED NOT NULL,
  `clos_time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `open_time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `restaurant_maps`, `phone`, `web_site`, `address`, `description`, `tags`, `post_image`, `created_at`, `updated_at`, `status_id`, `category_id`, `country_id`, `archieve_id`, `user_id`, `clos_time`, `open_time`) VALUES
(1, 'Chinese investors', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7818.854332013234!2d104.9214077767331!3d11.52118447995464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950b80fbea4ed%3A0xb2d4e629f32c072a!2sSangkat%20Chak%20Angrae%20Leu%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1592209785975!5m2!1sen!2skh', '08477444', 'chinese.com', 'Chinese investors', '<h3>&nbsp;</h3>\r\n\r\n<p><strong>Phearum said the 1,066 Chinese nationals arrived on direct flights. Since May 23, three to four direct flights each week from China had landed in Cambodia and authorities are carefully monitoring the health of the passengers.</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Test samples were taken and sent to be analysed at the Institute Pasteur du Cambodge (IPC). The passengers were also required to quarantine for 14 days.</p>', 'Shop,Sports,View', '', '2020-06-17 04:05:13', '2020-06-22 03:27:35', 1, 2, 2, 0, 1, 'Tueday', 'Monday'),
(2, 'Chinese investors', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7818.854332013234!2d104.9214077767331!3d11.52118447995464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950b80fbea4ed%3A0xb2d4e629f32c072a!2sSangkat%20Chak%20Angrae%20Leu%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1592209785975!5m2!1sen!2skh', '08477444', 'chinese.com', 'Chinese investors', '<p><strong>Phearum said the 1</strong>,066 Chinese nationals arrived on direct flights. Since May 23, three to four direct flights each week from China had landed in Cambodia and authorities are carefully monitoring the health of the passengers.</p>\r\n\r\n<hr />\r\n<p>&nbsp;flights. Since May 23, three to four direct flights each week from China had landed in Cambodia and <strong>authorities</strong> are carefully monitoring the health of the passengers.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<hr />\r\n<p><a href=\"https://www.phnompenhpost.com/lifestyle-food-drink/learning-cook-traditional-food-and-dine-locals\">Phearum said the 1,066 Chinese nationals arrived on direct flights. Since May 23, three to four direct flights each week from China had landed in Cambodia and authorities are carefully monitoring the health of the passengers.</a></p>', 'Shop,Sports,View', '1592366743705907_16013015120039511369.jpg,15923667433169a70482f2bae9599678138abf39ef.jpg,1592366743f7865fc4a815a321c70bd149fa60d6db.jpg', '2020-06-17 04:05:43', '2020-07-06 03:01:50', 1, 2, 2, 1, 1, 'Tueday', 'Monday');

-- --------------------------------------------------------

--
-- Table structure for table `poststatus`
--

CREATE TABLE `poststatus` (
  `id` int(11) NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `poststatus`
--

INSERT INTO `poststatus` (`id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Unpublish', NULL, NULL),
(0, 'Publish', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', NULL, NULL),
(2, 'User', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default-male.png',
  `role_id` int(11) NOT NULL DEFAULT '1',
  `status_id` int(11) NOT NULL DEFAULT '1',
  `country_id` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `gender`, `email`, `password`, `phone`, `position`, `company`, `remember_token`, `created_at`, `updated_at`, `avatar`, `role_id`, `status_id`, `country_id`) VALUES
(1, 'Administrator', 'Male', 'admin@gmail.com', '$2y$10$U4vh/m6KWYKXvP43MbxNm.auMxXLRw5eCjtVzuuV5VPFon/qFc/4O', '0979290546', 'Development', 'Post Media', NULL, NULL, NULL, 'default-male.png', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `userstatus`
--

CREATE TABLE `userstatus` (
  `id` int(11) NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `userstatus`
--

INSERT INTO `userstatus` (`id`, `status`, `created_at`, `updated_at`) VALUES
(0, 'Active', NULL, NULL),
(1, 'Disabled', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bannerpage`
--
ALTER TABLE `bannerpage`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bannerpage_country_id_unique` (`country_id`);

--
-- Indexes for table `campaign`
--
ALTER TABLE `campaign`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Indexes for table `contactinformation`
--
ALTER TABLE `contactinformation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `contactinformation_company_cell_unique` (`company_cell`),
  ADD UNIQUE KEY `contactinformation_company_blog_unique` (`company_blog`),
  ADD UNIQUE KEY `contactinformation_company_blog_kh_unique` (`company_blog_kh`);

--
-- Indexes for table `contact_user`
--
ALTER TABLE `contact_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countrydraft`
--
ALTER TABLE `countrydraft`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countryicon`
--
ALTER TABLE `countryicon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `countryicon_country_id_unique` (`country_id`);

--
-- Indexes for table `countrylists`
--
ALTER TABLE `countrylists`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `countrylists_name_unique` (`name`);

--
-- Indexes for table `countrylogo`
--
ALTER TABLE `countrylogo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `countrylogo_country_id_unique` (`country_id`);

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
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bannerpage`
--
ALTER TABLE `bannerpage`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `campaign`
--
ALTER TABLE `campaign`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contactinformation`
--
ALTER TABLE `contactinformation`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact_user`
--
ALTER TABLE `contact_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countrydraft`
--
ALTER TABLE `countrydraft`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countryicon`
--
ALTER TABLE `countryicon`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countrylists`
--
ALTER TABLE `countrylists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `countrylogo`
--
ALTER TABLE `countrylogo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
