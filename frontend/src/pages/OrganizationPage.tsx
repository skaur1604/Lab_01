import { useState, useEffect } from "react"
import { organizationRepo } from "../repositories/organizationRepository"
import { OrganizationForm } from "../components/OrganizationForm"

export function OrganizationPage() {
  const [roles, setRoles] = useState<string[]>([])

  useEffect(() => {
    organizationRepo.getDepartments().then(setRoles)
  }, [])

  return (
    <>
      <ul>
        {roles.map((r, index) => (
          <li key={index}>
            {r}
          </li>
        ))}
      </ul>

      <OrganizationForm setRoles={setRoles} />
    </>
  )
}