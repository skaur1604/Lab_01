import { useState } from "react"
import { Header } from "./components/Header"
import { EmployeeList } from "./components/EmployeeList"
import { Footer } from "./components/Footer"
import { EmployeeForm } from "./components/EmployeeForm"
import { employeeData } from "./data/employees"
 
function App() {
  const [employees, setEmployees] = useState(employeeData)
 
  return (
<>
<Header />
<EmployeeList employees={employees} />
<EmployeeForm employees={employees} setEmployees={setEmployees} />
<Footer />
</>
  )
}
 
export default App