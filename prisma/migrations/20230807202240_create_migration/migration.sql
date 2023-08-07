-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_phone" TEXT NOT NULL,
    "user_addrress_cep" TEXT NOT NULL,
    "user_addrress_road" TEXT NOT NULL,
    "user_addrress_number" TEXT NOT NULL,
    "user_addrress_district" TEXT NOT NULL,
    "user_addrress_city" TEXT NOT NULL,
    "user_addrress_state" TEXT NOT NULL,
    "user_addrress_complement" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Discard" (
    "disc_id" TEXT NOT NULL,
    "disc_item" TEXT NOT NULL,
    "disc_address" TEXT NOT NULL,
    "disc_date" TIMESTAMP(3) NOT NULL,
    "disc_responsible_name" TEXT NOT NULL,
    "disc_status" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Discard_pkey" PRIMARY KEY ("disc_id")
);

-- CreateTable
CREATE TABLE "Company" (
    "comp_id" TEXT NOT NULL,
    "comp_name" TEXT NOT NULL,
    "comp_cnpj" TEXT NOT NULL,
    "comp_cnae" TEXT NOT NULL,
    "comp_email" TEXT NOT NULL,
    "comp_password" TEXT NOT NULL,
    "comp_phone" TEXT NOT NULL,
    "comp_type" TEXT NOT NULL,
    "comp_addrress_cep" TEXT NOT NULL,
    "comp_addrress_road" TEXT NOT NULL,
    "comp_addrress_number" TEXT NOT NULL,
    "comp_addrress_district" TEXT NOT NULL,
    "comp_addrress_city" TEXT NOT NULL,
    "comp_addrress_state" TEXT NOT NULL,
    "comp_addrress_complement" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("comp_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "User"("user_email");

-- AddForeignKey
ALTER TABLE "Discard" ADD CONSTRAINT "Discard_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
