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

			setError("First name should have at least 3 letters")

			return

		}

		if (!department) {

			setError("Please choose a department")

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
			<h3>Add employee</h3>

			{error && <p style={{ color: "red" }}>{error}</p>}

			<input

				type="text"

				placeholder="First name"

				value={firstName}

				onChange={e => setFirstName(e.target.value)}

			/>

			<input

				type="text"

				placeholder="Last name"

				value={lastName}

				onChange={e => setLastName(e.target.value)}

			/>

			<select

				value={department}

				onChange={e => setDepartment(e.target.value)}
			>
				<option value="">Choose department</option>

				{departments.map((dept: string) => (
					<option key={dept} value={dept}>

						{dept}
					</option>

				))}
			</select>

			<button type="submit">Add employee</button>
		</form>

	)

}

