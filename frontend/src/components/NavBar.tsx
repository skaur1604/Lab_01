import { Link } from "react-router-dom"
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/clerk-react"

export default function NavBar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/employees">Employees</Link>
      <span> | </span>
      <Link to="/organization">Organization</Link>

      <div style={{ marginTop: "1rem" }}>
        <SignedOut>
          <SignInButton mode="modal">
            <button>Login</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}