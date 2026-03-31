const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.role.create({
    data: { name: "Admin" }
  });

  const user = await prisma.role.create({
    data: { name: "User" }
  });

  await prisma.employee.createMany({
    data: [
      {
        name: "Sukh",
        email: "sukh@example.com",
        roleId: admin.id
      },
      {
        name: "Test User",
        email: "test@example.com",
        roleId: user.id
      }
    ]
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());