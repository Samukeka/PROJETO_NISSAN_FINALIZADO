/*
  Warnings:

  - Added the required column `preco` to the `estoque` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estoque` ADD COLUMN `preco` DOUBLE NOT NULL;
