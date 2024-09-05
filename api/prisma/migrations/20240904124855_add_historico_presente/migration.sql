/*
  Warnings:

  - You are about to drop the column `emailDeQuemDeu` on the `Presente` table. All the data in the column will be lost.
  - You are about to drop the column `quemDeu` on the `Presente` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Presente` table. All the data in the column will be lost.
  - Added the required column `image` to the `Presente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Presente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Presente" DROP COLUMN "emailDeQuemDeu",
DROP COLUMN "quemDeu",
DROP COLUMN "status",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "quantidade" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "HistoricoPresente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HistoricoPresente_pkey" PRIMARY KEY ("id")
);
