import { organizationRepository } from "../repositories/organizationRepository"

export const organizationService = {
  async getRoles() {
    return organizationRepository.getRoles()
  },

  async createRole(data: { name: string }) {
    if (!data.name || data.name.trim().length < 2) {
      throw new Error("Role name must be at least 2 characters.")
    }

    return organizationRepository.createRole({
      name: data.name.trim()
    })
  }
}