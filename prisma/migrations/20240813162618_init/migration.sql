-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "body" VARCHAR(255) NOT NULL,
    "createdAt" VARCHAR(255) NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
