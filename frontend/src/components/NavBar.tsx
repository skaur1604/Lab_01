import { NavLink } from "react-router-dom"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react"

export function NavBar() {
  function getLinkStyle({ isActive }: { isActive: boolean }) {
    return {
      color: isActive ? "white" : "#222",
      backgroundColor: isActive ? "#333" : "#eee",
      padding: "8px 12px",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: 600
    }
  }

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "14px"
      }}
    >
      <NavLink to="/employees" style={getLinkStyle}>
        Employees
      </NavLink>

      <NavLink to="/organization" style={getLinkStyle}>
        Organization
      </NavLink>

      <div style={{ marginLeft: "auto" }}>
        <SignedOut>
          <SignInButton mode="modal">
            <button>Sign In</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}