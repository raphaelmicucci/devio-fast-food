import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              fastfood
            </NavLogo>
            <MobileIcon onClick={clickHandler}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={clickHandler} click={click}>
              <NavItem>
                <NavLinks to="/">Pedidos</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/cozinha">Cozinha</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/retirada">Retirada</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
