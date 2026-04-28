import { employeeRepo } from "../repositories/employeeRepository"

type EmployeeInput = {
  firstName: string
  lastName: string
  department: string
}

export const employeeService = {
  async createEmployee(data: EmployeeInput) {
    const departments = await employeeRepo.getDepartments()

    if (data.firstName.trim().length < 3) {
      return {
        success: false,
        message: "First name must be at least 3 characters."
      }
    }

    if (data.lastName.trim().length < 2) {
      return {
        success: false,
        message: "Last name must be at least 2 characters."
      }
    }

    if (!departments.includes(data.department)) {
      return {
        success: false,
        message: "Please choose an existing department."
      }
    }

    const employees = await employeeRepo.createEmployee({
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      department: data.department
    })

    return {
      success: true,
      employees
    }
  }
}