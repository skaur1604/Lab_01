export const organizationRepo = {
  async getRoles() {
    const res = await fetch("http://localhost:3000/api/roles")

    if (!res.ok) {
      throw new Error("Failed to fetch roles")
    }

    return res.json()
  },

  async createRole(data: { name: string }, token: string) {
    const res = await fetch("http://localhost:3000/api/roles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(errorText || "Failed to create role")
    }

    return res.json()
  }
}