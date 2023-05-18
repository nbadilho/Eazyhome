import { BtnMenuNav, DivLinksNav, DivLogo, DivSideMenu, NavBar } from "./style";
import logo from "../../assets/img/logoEazyHomeVersao4.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useState } from "react";

export function NavRegister() {
  const [menu, setMenu] = useState(false);

  return (
    <NavBar>
      <DivLogo>
        <img src={logo} alt="Logo" />
      </DivLogo>
      <BtnMenuNav onClick={() => setMenu(!menu)}>
        {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </BtnMenuNav>
      <DivSideMenu display={menu}>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
      </DivSideMenu>
      <DivLinksNav>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
      </DivLinksNav>
    </NavBar>
  );
}
