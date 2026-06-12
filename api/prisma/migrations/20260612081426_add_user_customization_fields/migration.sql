-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ONLINE', 'IDLE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT NOT NULL DEFAULT 'hi im new here',
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'IDLE';
