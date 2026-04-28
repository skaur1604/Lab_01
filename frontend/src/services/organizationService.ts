import { organizationRepo } from "../repositories/organizationRepository"

type RoleInput = {
  name: string
}

export const organizationService = {
  async createRole(data: RoleInput) {
    const cleanedName = data.name.trim()

    if (cleanedName.length < 2) {
      return {
        success: false,
        message: "Role name must be at least 2 characters."
      }
    }

    const roles = await organizationRepo.getRoles()

    if (roles.includes(cleanedName)) {
      return {
        success: false,
        message: "This role already exists."
      }
    }

    return {
      success: true
    }
  }
}