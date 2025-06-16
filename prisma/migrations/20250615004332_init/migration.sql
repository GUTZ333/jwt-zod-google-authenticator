-- CreateTable
CREATE TABLE `users` (
    `userId` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,
    `userAge` INTEGER NOT NULL,
    `userPswd` VARCHAR(191) NOT NULL,
    `userMobilePhone` CHAR(15) NOT NULL,
    `userCreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userUpdatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_userName_key`(`userName`),
    UNIQUE INDEX `users_userEmail_key`(`userEmail`),
    UNIQUE INDEX `users_userAge_key`(`userAge`),
    UNIQUE INDEX `users_userPswd_key`(`userPswd`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
