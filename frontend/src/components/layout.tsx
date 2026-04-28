import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"

export function Layout() {
  return (
    <main
      style={{
        maxWidth: "950px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Verdana, Arial, sans-serif"
      }}
    >
      <header
        style={{
          marginBottom: "28px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "16px"
        }}
      >
        <h1>Pixell River Financial</h1>
        <p>Employee and organization role management system.</p>
        <NavBar />
      </header>

      <Outlet />

      <footer
        style={{
          marginTop: "40px",
          color: "#555",
          fontSize: "0.85rem"
        }}
      >
        Pixell River Financial Employee App © {new Date().getFullYear()}
      </footer>
    </main>
  )
}