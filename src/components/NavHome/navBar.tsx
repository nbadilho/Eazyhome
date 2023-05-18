import { BtnMenuNav, DivLinksNav, DivLogo, DivSideMenu, NavBar } from "./style";
import logo from "../../assets/img/logoEazyHomeVersao4.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

export function NavHome() {
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
        <a href="#about_us" onClick={() => setMenu(false)}>
          SOBRE NÓS
        </a>
        <a href="#services" onClick={() => setMenu(false)}>
          SERVIÇOS
        </a>
        <a href="#comments" onClick={() => setMenu(false)}>
          AVALIAÇÕES
        </a>
        <a href="#footer" onClick={() => setMenu(false)}>
          CONTATOS
        </a>
        <Link to="/register">CADASTRE-SE</Link>
        <Link to="/login">LOGIN</Link>
      </DivSideMenu>
      <DivLinksNav>
        <a href="#about_us">SOBRE NÓS</a>
        <a href="#services">SERVIÇOS</a>
        <a href="#comments">AVALIAÇÕES</a>
        <a href="#footer">CONTATOS</a>
        <Link to="/register">CADASTRE-SE</Link>
        <Link to="/login">LOGIN</Link>
      </DivLinksNav>
    </NavBar>
  );
}
