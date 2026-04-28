import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const employeeRepository = {
  async getEmployees(page = 1, limit = 5) {
    const skip = (page - 1) * limit

    const employees = await prisma.employee.findMany({
      skip,
      take: limit,
      orderBy: { id: "asc" }
    })

    const total = await prisma.employee.count()

    return {
      employees,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  },

  async createEmployee(data: {
    firstName: string
    lastName: string
    department: string
  }) {
    return prisma.employee.create({
      data: {
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        department: data.department.trim()
      }
    })
  },

  async getDepartments() {
    const roles = await prisma.role.findMany({
      orderBy: { name: "asc" }
    })

    return roles.map(role => role.name)
  }
}