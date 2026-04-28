import { employeeRepository } from "../repositories/employeeRepository"

export const employeeService = {
  async getEmployees(page = 1, limit = 50) {
    return employeeRepository.getEmployees(page, limit)
  },

  async getDepartments() {
    return employeeRepository.getDepartments()
  },

  async createEmployee(data: {
    firstName: string
    lastName: string
    department: string
  }) {
    if (!data.firstName || data.firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters.")
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
      throw new Error("Last name must be at least 2 characters.")
    }

    if (!data.department || data.department.trim().length === 0) {
      throw new Error("Department is required.")
    }

    return employeeRepository.createEmployee({
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      department: data.department.trim()
    })
  }
}