import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Header(){
    return (
    <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <Navbar className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <Nav>
          <Nav.Link href="/men" className="nav-link px-2 link-body-emphasis fontHead">Men</Nav.Link>
          <Nav.Link href="/women" className="nav-link px-2 link-body-emphasis fontHead">Women</Nav.Link>
          <Nav.Link href="/watch" className="nav-link px-2 link-body-emphasis fontHead">Watch</Nav.Link>
          </Nav>
        </Navbar>

        <div className="col-7 logoHead">
          <h3>
            <a href="/" className="link-body-emphasis text-decoration-none">
              Shop logo
            </a>  
          </h3>
        </div>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        </form>

        <DropdownButton id="dropdown-basic-button"  title={<AccountCircleIcon/>}  >
          <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Cart</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  </header>
  );
}

export default Header;