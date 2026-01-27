import { useState } from "react"

export function EmployeeForm({ employees, setEmployees }: any) {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [department, setDepartment] = useState("")
	const [error, setError] = useState("")

	const departments = [...new Set(employees.map((e: any) => e.department))]

	function handleSubmit(e: any) {
		e.preventDefault()
		setError("")

		if (firstName.trim().length < 3) {
			setError("First name must be at least 3 characters")
			return
		}

		if (!department) {
			setError("Please select a department")
			return
		}

		setEmployees([
			...employees,
			{ firstName, lastName, department }
		])

		setFirstName("")
		setLastName("")
		setDepartment("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<h3>Add New Employee</h3>

			{error && <p style={{ color: "red" }}>{error}</p>}

			<input
				type="text"
				placeholder="First Name"
				value={firstName}
				onChange={e => setFirstName(e.target.value)}
			/>

			<input
				type="text"
				placeholder="Last Name"
				value={lastName}
				onChange={e => setLastName(e.target.value)}
			/>

			<select
				value={department}
				onChange={e => setDepartment(e.target.value)}
			>
				<option value="">Select Department</option>
				{departments.map((dept: string) => (
					<option key={dept} value={dept}>
						{dept}
					</option>
				))}
			</select>

			<button type="submit">Add Employee</button>
		</form>
	)
}



