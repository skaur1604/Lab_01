import { useQuery } from "@tanstack/react-query"
import { EmployeeList } from "../components/EmployeeList"
import { EmployeeForm } from "../components/EmployeeForm"
import { employeeRepo } from "../repositories/employeeRepo"

export function EmployeesPage() {
  const {
    data: employees = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ["employees"],
    queryFn: employeeRepo.getEmployees
  })

  if (isLoading) {
    return <p>Loading employee directory...</p>
  }

  if (isError) {
    return <p>Could not load employees. Please try again later.</p>
  }

  return (
    <>
      <h2>Employees</h2>
      <EmployeeList employees={employees} />
      <EmployeeForm />
    </>
  )
}