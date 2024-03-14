/*
  Warnings:

  - Added the required column `documentNumber` to the `Producer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Producer" ADD COLUMN     "documentNumber" TEXT NOT NULL;
