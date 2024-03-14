-- CreateTable
CREATE TABLE "Producer" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farm" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "totalArea" BIGINT NOT NULL,
    "productableArea" BIGINT NOT NULL,
    "vegetableArea" BIGINT NOT NULL,
    "producerId" INTEGER,

    CONSTRAINT "Farm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Farm" ADD CONSTRAINT "Farm_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
