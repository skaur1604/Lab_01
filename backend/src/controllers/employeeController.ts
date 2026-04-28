import { Request, Response } from "express"
import { employeeService } from "../services/employeeService"

export const employeeController = {
  async getEmployees(req: Request, res: Response) {
    try {
      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 50

      const result = await employeeService.getEmployees(page, limit)
      res.json(result)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  async getDepartments(req: Request, res: Response) {
    try {
      const departments = await employeeService.getDepartments()
      res.json(departments)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  async createEmployee(req: Request, res: Response) {
    try {
      const newEmployee = await employeeService.createEmployee(req.body)
      res.status(201).json(newEmployee)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }
}