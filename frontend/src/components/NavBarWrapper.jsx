import { Outlet } from "react-router"
import NavBar from "./NavBar"

const NavBarWrapper = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default NavBarWrapper