import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchUserStart } from "../redux/actions";

const Header = () => {
  const [showBasic, setShowBasic] = useState(true);
  const [search, setSearch]= useState("");
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.prevetDefault();
    dispatch(searchUserStart(search));
    setSearch("");
  }

  return (
    <MDBNavbar expand="lg" light bgColor="primary">
      <MDBContainer fluid>
        <MDBNavbarBrand className="text-white">
          <span style={{ marginRight: "10px" }}>
            <MDBIcon fas icon="book-open" />
          </span>
          Contact
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="text-white"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon fas icon="bars"  />
        </MDBNavbarToggler>

        {/* Fix: Convert boolean to string */}
        <MDBCollapse navbar show={showBasic ? "true" : undefined}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className="nav-link text-white" to="/addUser">
                Add User
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="Search Name" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <MDBBtn color="dark" type="submit">Searh</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
