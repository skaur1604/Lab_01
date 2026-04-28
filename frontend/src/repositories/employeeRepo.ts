export const employeeRepo = {
  async getEmployees() {
    const res = await fetch("http://localhost:3000/api/employees")

    if (!res.ok) {
      throw new Error("Failed to fetch employees")
    }

    const data = await res.json()
    return data.employees ?? data
  },

  async getDepartments() {
    const res = await fetch("http://localhost:3000/api/employees/departments")

    if (!res.ok) {
      throw new Error("Failed to fetch departments")
    }

    return res.json()
  },

  async createEmployee(
    employee: {
      firstName: string
      lastName: string
      department: string
    },
    token: string
  ) {
    const res = await fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(employee)
    })

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(errorText || "Failed to create employee")
    }

    return res.json()
  }
}