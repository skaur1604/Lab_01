import { useQuery } from "@tanstack/react-query"
import { organizationRepo } from "../repositories/organizationRepo"
import { OrganizationForm } from "../components/OrganizationForm"

type Role = {
  id: number
  name: string
}

export function OrganizationPage() {
  const {
    data: roles = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ["roles"],
    queryFn: organizationRepo.getRoles
  })

  if (isLoading) return <p>Loading organization roles...</p>
  if (isError) return <p>Roles could not be loaded.</p>

  return (
    <>
      <h2>Organization</h2>

      <ul>
        {roles.map((role: Role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>

      <OrganizationForm />
    </>
  )
}