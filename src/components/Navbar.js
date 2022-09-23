import '../css/NavBar.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
} from 'reactstrap';
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (<>
    <Navbar
      className="my-1 turquesa"
      fixed="top"
      expand="md"
      container="md"
      light
      dark
    >
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="/logo.png"
          style={{
            height: 70,
            width: 70
          }}
        />
        
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Acerca de nosotros
              </DropdownToggle>
              <DropdownMenu end>
              <DropdownItem className='itemselect'>¿Quienes somos?</DropdownItem>
              <DropdownItem className='itemselect'>¿Como somos?</DropdownItem>
                <DropdownItem className='itemselect'>Mision</DropdownItem>
                <DropdownItem className='itemselect'>Vision</DropdownItem>
                <DropdownItem className='itemselect'>Valores</DropdownItem>
                <DropdownItem className='itemselect'>¿Que predicamos?</DropdownItem>
                <DropdownItem className='itemselect'>¿Que creemos?</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Material de edificacion
              </DropdownToggle>
              <DropdownMenu end>
              <DropdownItem className='itemselect'>Predicas</DropdownItem>
              <DropdownItem className='itemselect'>Material de estudio</DropdownItem>
                <DropdownItem className='itemselect'>Videos</DropdownItem>
                <DropdownItem className='itemselect'>Devocionales</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  </>);
}

export default NavBar;