-- CreateTable
CREATE TABLE "Checklist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "mission" TEXT NOT NULL,
    "deadline" DATETIME,
    "listId" INTEGER NOT NULL,
    CONSTRAINT "Task_listId_fkey" FOREIGN KEY ("listId") REFERENCES "Checklist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DoneTasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "done" BOOLEAN NOT NULL DEFAULT true,
    "mission" TEXT NOT NULL,
    "deadline" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "Checklist_name_key" ON "Checklist"("name");
