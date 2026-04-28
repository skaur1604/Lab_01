import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.employee.deleteMany()
  await prisma.role.deleteMany()

  await prisma.role.createMany({
    data: [
      { name: "Administration" },
      { name: "Audit" },
      { name: "Banking Operations" },
      { name: "Communications" },
      { name: "Information Technology" }
    ],
    skipDuplicates: true
  })

  await prisma.employee.createMany({
    data: [
      { firstName: "Zoë", lastName: "Robins", department: "Administration" },
      { firstName: "Madeleine", lastName: "Madden", department: "Administration" },
      { firstName: "Josha", lastName: "Sadowski", department: "Audit" },
      { firstName: "Kate", lastName: "Fleetwood", department: "Audit" },
      { firstName: "Priyanka", lastName: "Bose", department: "Banking Operations" },
      { firstName: "Álvaro", lastName: "Morte", department: "Banking Operations" }
    ]
  })
}

main()
  .then(async () => {
    console.log("Database seeded successfully")
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })