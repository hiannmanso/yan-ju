-- AlterTable
ALTER TABLE "Convidado" ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'pendente';
