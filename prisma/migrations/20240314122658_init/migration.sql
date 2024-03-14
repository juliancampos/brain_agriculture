/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[documentNumber]` on the table `Producer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Farm" ADD COLUMN     "cultivation" TEXT[];

-- DropTable
DROP TABLE "Product";

-- CreateIndex
CREATE UNIQUE INDEX "Producer_documentNumber_key" ON "Producer"("documentNumber");
