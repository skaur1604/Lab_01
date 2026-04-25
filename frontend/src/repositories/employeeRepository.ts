export const employeeRepository = {
  async getEmployees(page = 1, limit = 3) {
  const res = await fetch(`http://localhost:3000/api/employees?page=${page}&limit=${limit}`)
  return res.json()
  },

  async getDepartments() {
    const res = await fetch("http://localhost:3000/api/roles")
    const roles = await res.json()
    return roles.map((r: any) => r.name)
  },

  async createEmployee(employee: {
    firstName: string
    lastName: string
    department: string
  }) {
    const res = await fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    })

    return res.json()
  }
}