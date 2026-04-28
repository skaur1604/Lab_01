import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const organizationRepository = {
  async getRoles() {
    return prisma.role.findMany({
      orderBy: { name: "asc" }
    })
  },

  async createRole(data: { name: string }) {
    return prisma.role.create({
      data: {
        name: data.name.trim()
      }
    })
  }
}