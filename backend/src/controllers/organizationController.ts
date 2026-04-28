 import { Request, Response } from "express"
import { organizationService } from "../services/organizationService"

export const organizationController = {
  async getRoles(req: Request, res: Response) {
    try {
      const roles = await organizationService.getRoles()
      res.json(roles)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  async createRole(req: Request, res: Response) {
    try {
      const role = await organizationService.createRole(req.body)
      res.status(201).json(role)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }
}