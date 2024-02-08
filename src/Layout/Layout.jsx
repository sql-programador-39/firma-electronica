import { Outlet } from "react-router-dom"

import Nav from "../components/Nav/Nav"
import AsideMenu from "../components/AsideMenu/AsideMenu"

import './Layout.css'

const Layout = () => {
  return (
    <>
      <header>
      <Nav />
      </header>


      <main>
        <aside>
          <AsideMenu />
        </aside>
        <div className="main-content">
          <Outlet />
        </div>
      </main> 
    </>
  )
}

export default Layout
