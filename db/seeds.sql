-- Users 
INSERT INTO `User` ( `firstName`, `lastName`, `email`, `password`, `country`, `alias`,`totalPomSeconds`,`totalSmallBreakSeconds`,`totalBigBreakSeconds`, `createdAt` )
VALUES( 'Patrick', 'Lloyd', 'test@test.com', '1234', 'USA', 'AngryFinger','7500','3000','4200', '2021-02-03 01:04:43' );
    
INSERT INTO `User` ( `firstName`, `lastName`, `email`, `password`, `country`, `alias`,`totalPomSeconds`,`totalSmallBreakSeconds`,`totalBigBreakSeconds`, `createdAt` )
VALUES( 'Homer', 'Simpson', 'don@doh.com', '1234', 'USA', 'maxPower','7500','3000','4200', '2021-02-03 01:04:43' );

INSERT INTO `User` ( `firstName`, `lastName`, `email`, `password`, `country`, `alias`,`totalPomSeconds`,`totalSmallBreakSeconds`,`totalBigBreakSeconds`, `createdAt` )
VALUES( 'Kerri', 'Sexton', 'kerri@kerri.com', '1234', 'USA', 'kas1330','7500','3000','4200', '2021-02-03 01:04:43' );

INSERT INTO `User` ( `firstName`, `lastName`, `email`, `password`, `country`, `alias`,`totalPomSeconds`,`totalSmallBreakSeconds`,`totalBigBreakSeconds`, `createdAt` )
VALUES( 'Kerri', 'Sexton', 'test@test.com.com', '1234', 'USA', 'kas1330','7500','3000','4200', '2021-02-03 01:04:43' );
    
INSERT INTO `User` ( `firstName`, `lastName`, `email`, `password`, `country`, `alias`,`totalPomSeconds`,`totalSmallBreakSeconds`,`totalBigBreakSeconds`, `createdAt` )
VALUES( 'Michael', 'Curtis', 'michael@michael.com', '1234', 'USA', 'mcereal','7500','3000','4200', '2021-02-03 01:04:43' );

-- Tasks 
INSERT INTO `Task` ( `userId`, `taskName`, `estimatedPoms`, `completedPoms`, `completedSmallBreak`, `createdAt` )
VALUES( '1', 'Work on backend integration for web app.', '4', '1', '2', '2021-02-04 11:04:43' );
    
INSERT INTO `Task` ( `userId`, `taskName`, `estimatedPoms`, `completedPoms`, `completedSmallBreak`, `createdAt` )
VALUES( '2', 'Eat lots of Krusty Burgers.', '2', '1', '1', '2021-02-04 15:04:43' );

INSERT INTO `Task` ( `userId`, `taskName`, `estimatedPoms`, `completedPoms`, `completedSmallBreak`,`completedBigBreak`,`pomMinutes`,`smallBreakMinutes`,`bigBreakMinutes`, `createdAt` )
VALUES( '5', 'Work on modal for updating stats.', '4', '1', '2', '2','70','15','45', '2021-02-04 11:04:43' );
    
INSERT INTO `Task` ( `userId`, `taskName`, `estimatedPoms`, `completedPoms`, `completedSmallBreak`,`completedBigBreak`,`pomMinutes`,`smallBreakMinutes`,`bigBreakMinutes`, `createdAt` )
VALUES( '5', 'Feed cat', '2', '1', '1', '2','70','15','45','2021-02-04 15:04:43' );

INSERT INTO `Task` ( `userId`, `taskName`, `estimatedPoms`, `completedPoms`, `completedSmallBreak`,`completedBigBreak`,`pomMinutes`,`smallBreakMinutes`,`bigBreakMinutes`, `createdAt` )
VALUES( '5', 'Chart.js for the stats page', '2', '1', '1', '2','70','15','45', '2021-02-04 15:04:43' );

INSERT INTO `Task` ( `userId`, `taskName`, `estimatedPoms`, `completedPoms`, `completedSmallBreak`,`completedBigBreak`,`pomMinutes`,`smallBreakMinutes`,`bigBreakMinutes`, `createdAt` )
VALUES( '5', 'Wash dog', '2', '1', '1','2','70','15','45', '2021-02-04 15:04:43' );