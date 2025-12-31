CREATE DATABASE IF NOT EXISTS praisevault_db;
USE praisevault_db;

CREATE TABLE IF NOT EXISTS Songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    duration VARCHAR(255),
    url TEXT,
    coverUrl TEXT,
    createdAt DATETIME,
    updatedAt DATETIME
);

CREATE TABLE IF NOT EXISTS Branches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    pastor VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    latitude FLOAT,
    longitude FLOAT,
    createdAt DATETIME,
    updatedAt DATETIME
);

CREATE TABLE IF NOT EXISTS Revivals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    liveLink TEXT,
    createdAt DATETIME,
    updatedAt DATETIME
);
