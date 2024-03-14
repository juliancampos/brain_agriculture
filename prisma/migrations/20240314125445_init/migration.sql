/*
  Warnings:

  - You are about to drop the column `productableArea` on the `Farm` table. All the data in the column will be lost.
  - You are about to drop the column `vegetableArea` on the `Farm` table. All the data in the column will be lost.
  - Added the required column `productiveArea` to the `Farm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vegetationArea` to the `Farm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Farm" DROP COLUMN "productableArea",
DROP COLUMN "vegetableArea",
ADD COLUMN     "productiveArea" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vegetationArea" DOUBLE PRECISION NOT NULL;
