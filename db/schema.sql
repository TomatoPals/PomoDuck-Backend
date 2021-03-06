CREATE DATABASE pomodoro_db;
USE pomodoro_db;

CREATE TABLE User (
    id INT(11) NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255) COLLATE UTF8_UNICODE_CI NOT NULL,
    lastName VARCHAR(255) COLLATE UTF8_UNICODE_CI NOT NULL,
    email VARCHAR(128) COLLATE UTF8_UNICODE_CI NOT NULL,
    password VARCHAR(255) NOT NULL,
    country VARCHAR(128) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
    alias VARCHAR(200) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
    aliasImage VARCHAR(255) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
    displayPref TINYINT(3) DEFAULT '0',
    pomTime INT(11) DEFAULT '25',
    smallBreakTime INT(11) DEFAULT '5',
    bigBreakTime INT(11) DEFAULT '15',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);

CREATE TABLE Task (
    id INT(11) NOT NULL AUTO_INCREMENT,
    userId INT(11) NOT NULL,
    taskName TEXT DEFAULT NULL,
    estimatedPoms TINYINT(3) NOT NULL,
    completedPoms TINYINT(3) DEFAULT '0',
    completedSmallBreak  TINYINT(3) DEFAULT '0',
    completedBigBreak  TINYINT(3) DEFAULT '0',
    pomMinutes  SMALLINT DEFAULT '0',
    smallBreakMinutes SMALLINT DEFAULT '0',
    bigBreakMinutes  SMALLINT DEFAULT '0',
    isComplete TINYINT(3) DEFAULT '0',
    startDate DATETIME DEFAULT NULL,
    completeDate DATETIME DEFAULT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    PRIMARY KEY (id)
);
