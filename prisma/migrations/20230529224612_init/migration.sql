-- CreateTable
CREATE TABLE `Usuario` (
    `IdUsu` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`IdUsu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataCompYear` (
    `IdData` INTEGER NOT NULL AUTO_INCREMENT,
    `IdRel` INTEGER NOT NULL,
    `Ano` INTEGER NULL,
    `Availability` DOUBLE NULL,
    `DupToReceive` DOUBLE NULL,
    `Stock` DOUBLE NULL,
    `Loan` DOUBLE NULL,
    `Wage` DOUBLE NULL,
    `Tax` DOUBLE NULL,
    `ShareCapital` DOUBLE NULL,
    `ProfitReserve` DOUBLE NULL,
    `AccumulatedProfit` DOUBLE NULL,
    `GrossSales` DOUBLE NULL,
    `Deductions` DOUBLE NULL,
    `CPV` DOUBLE NULL,
    `OperatingExpenses` DOUBLE NULL,
    `FinancialExpenses` DOUBLE NULL,
    `IRCS` DOUBLE NULL,

    PRIMARY KEY (`IdData`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relfina` (
    `IdRel` INTEGER NOT NULL AUTO_INCREMENT,
    `IdUsu` INTEGER NOT NULL,

    PRIMARY KEY (`IdRel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataCompYear` ADD CONSTRAINT `DataCompYear_IdRel_fkey` FOREIGN KEY (`IdRel`) REFERENCES `Relfina`(`IdRel`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relfina` ADD CONSTRAINT `Relfina_IdUsu_fkey` FOREIGN KEY (`IdUsu`) REFERENCES `Usuario`(`IdUsu`) ON DELETE RESTRICT ON UPDATE CASCADE;
