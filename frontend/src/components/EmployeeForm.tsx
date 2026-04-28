import { useEffect, useState } from "react"
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react"
import { useQueryClient } from "@tanstack/react-query"
import { employeeRepo } from "../repositories/employeeRepo"

export function EmployeeForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [department, setDepartment] = useState("")
  const [departments, setDepartments] = useState<string[]>([])
  const [message, setMessage] = useState("")

  const { getToken } = useAuth()
  const queryClient = useQueryClient()

  useEffect(() => {
    employeeRepo.getDepartments().then(setDepartments)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage("")

    try {
      const token = await getToken()

      await employeeRepo.createEmployee(
        { firstName, lastName, department },
        token || ""
      )

      await queryClient.refetchQueries({ queryKey: ["employees"] })
      
      setFirstName("")
      setLastName("")
      setDepartment("")
      setMessage("Employee added successfully.")
    } catch {
      setMessage("Unable to add employee.")
    }
  }

  return (
    <>
      <SignedOut>
        <p>Please <SignInButton mode="modal">login</SignInButton> to add employees.</p>
      </SignedOut>

      <SignedIn>
        <form onSubmit={handleSubmit}>
          <h3>Add Employee</h3>
          {message && <p>{message}</p>}

          <input placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <input placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />

          <select value={department} onChange={e => setDepartment(e.target.value)}>
            <option value="">Select Department</option>
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <button type="submit">Add Employee</button>
        </form>
      </SignedIn>
    </>
  )
}