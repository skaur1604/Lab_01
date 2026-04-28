import { useState } from "react"
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react"
import { useQueryClient } from "@tanstack/react-query"
import { organizationRepo } from "../repositories/organizationRepo"

export function OrganizationForm() {
  const [roleName, setRoleName] = useState("")
  const [message, setMessage] = useState("")

  const { getToken } = useAuth()
  const queryClient = useQueryClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage("")

    try {
      const token = await getToken()

      await organizationRepo.createRole({ name: roleName.trim() }, token || "")

      await queryClient.invalidateQueries({ queryKey: ["roles"] })

      setRoleName("")
      setMessage("Role added successfully.")
    } catch {
      setMessage("Unable to add role.")
    }
  }

  return (
    <>
      <SignedOut>
        <p>Please <SignInButton mode="modal">login</SignInButton> to add roles.</p>
      </SignedOut>

      <SignedIn>
        <form onSubmit={handleSubmit}>
          <h3>Add Role</h3>
          {message && <p>{message}</p>}

          <input
            placeholder="Role Name"
            value={roleName}
            onChange={e => setRoleName(e.target.value)}
          />

          <button type="submit">Add Role</button>
        </form>
      </SignedIn>
    </>
  )
}