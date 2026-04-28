type Employee = {
  id?: number
  firstName: string
  lastName: string
  department?: string
  role?: {
    name: string
  }
}

type Props = {
  employees: Employee[]
}

export function EmployeeList({ employees }: Props) {
  if (employees.length === 0) {
    return <p>No employees found.</p>
  }

  return (
    <ul>
      {employees.map((emp, index) => (
        <li key={emp.id ?? index}>
          {emp.firstName} {emp.lastName} - {emp.department ?? emp.role?.name}
        </li>
      ))}
    </ul>
  )
}