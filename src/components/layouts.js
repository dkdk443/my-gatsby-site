import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'
const Layout = ({pageTitle, children}) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>TOP</Link></li>
          <li><Link to="/about">About</Link></li>
          <li></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout;