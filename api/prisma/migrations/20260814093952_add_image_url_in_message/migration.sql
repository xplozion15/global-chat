-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "messageBody" DROP NOT NULL;
