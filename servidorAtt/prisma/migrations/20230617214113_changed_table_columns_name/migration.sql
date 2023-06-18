/*
  Warnings:

  - You are about to drop the column `name` on the `pedido` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `pedido` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `pedido` table. All the data in the column will be lost.
  - Added the required column `productName` to the `pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productPrice` to the `pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pedido` DROP COLUMN `name`,
    DROP COLUMN `price`,
    DROP COLUMN `uid`,
    ADD COLUMN `productName` VARCHAR(191) NOT NULL,
    ADD COLUMN `productPrice` DOUBLE NOT NULL,
    MODIFY `userId` INTEGER NOT NULL DEFAULT 1;
