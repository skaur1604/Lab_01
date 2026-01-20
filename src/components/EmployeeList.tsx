import { employeeData } from "../data/employees"

export function EmployeeList() {
  const groupedEmployees = employeeData.reduce<Record<string, typeof employeeData>>(
    (groups, emp) => {
      if (!groups[emp.department]) {
        groups[emp.department] = []
      }
      groups[emp.department].push(emp)
      return groups
    },
    {}
  )

  return (
    <main>
      {Object.keys(groupedEmployees).map(dept => (
        <section key={dept}>
          <h2>{dept}</h2>

          <table>
            <tbody>
              {groupedEmployees[dept].map((emp, index) => (
                <tr key={index}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </main>
  )
}
