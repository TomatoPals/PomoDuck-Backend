INSERT INTO `User` ( `firstName`, `lastName`, `email`, `password`, `country`, `alias`, `createdAt` )
VALUES( 'Patrick', 'Lloyd', 'test@test.com', '1234', 'USA', 'AngryFinger', '2021-02-03 01:04:43' );
    
INSERT INTO `User` ( `firstName`, `lastName`, `email`, `password`, `country`, `alias`, `createdAt` )
VALUES( 'Homer', 'Simpson', 'don@doh.com', '1234', 'USA', 'maxPower', '2021-02-03 01:04:43' );

INSERT INTO `Task` ( `userId`, `taskName`, `estimatedPoms`, `completedPoms`, `completedSmallBreak`, `createdAt` )
VALUES( '1', 'Work on backend integration for web app.', '4', '1', '2', '2021-02-04 11:04:43' );
    
INSERT INTO `Task` ( `userId`, `taskName`, `estimatedPoms`, `completedPoms`, `completedSmallBreak`, `createdAt` )
VALUES( '2', 'Eat lots of Krusty Burgers.', '2', '1', '1', '2021-02-04 15:04:43' );