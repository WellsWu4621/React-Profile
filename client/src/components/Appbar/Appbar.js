import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const styles = {
  links: {
    textDecoration: 'none',
    color: 'inherit'
  },
  bar: {
    marginBottom: 15,
  },
  brand: {
    marginLeft: 25,
  }
}

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar dark expand='md' style={styles.bar}>
        <NavbarBrand style={styles.brand}>
          <Link to='/about' style={styles.links}>
            WW
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink>
                <Link exact to='/about' activeClassName="active" style={styles.links}>
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link exact to='/portfolio' activeClassName="active" style={styles.links}>
                  Portfolio
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/contact' activeClassName="active" style={styles.links}>
                  Contact
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/resume' activeClassName="active" style={styles.links}>
                  Resume
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Appbar