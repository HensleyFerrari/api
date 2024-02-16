-- CreateTable
CREATE TABLE `pedidos` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `sala` VARCHAR(191) NOT NULL,
    `procedimento` VARCHAR(191) NOT NULL,
    `doutor` VARCHAR(191) NOT NULL,
    `paciente` VARCHAR(191) NOT NULL,
    `hospital` VARCHAR(191) NOT NULL,
    `data_cirurgia` DATETIME(3) NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observacao` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
