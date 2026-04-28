import { Routes, Route, Navigate, Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { EmployeesPage } from "./pages/EmployeesPage"
import { OrganizationPage } from "./pages/OrganizationPage"

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Link to="/employees">Employees</Link>
        <Link to="/organization">Organization</Link>

        <div style={{ marginLeft: "auto" }}>
          <SignedOut>
            <SignInButton mode="modal">
              <button>Sign In</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/employees" replace />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/organization" element={<OrganizationPage />} />
      </Routes>
    </>
  )
}

export default App