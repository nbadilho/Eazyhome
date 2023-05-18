import {
  BtnMenuNav,
  DivAvatar,
  DivLinksNav,
  DivLogo,
  DivSideMenu,
  NavBar,
} from "./style";
import logo from "../../assets/img/logoEazyHomeVersao4.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";

export function NavDashboardClient() {
  const [menu, setMenu] = useState(false);
  const { userLogout } = useContext(UserContext);
  const { photo } = useContext(ProfileContext);

  return (
    <NavBar>
      <DivLogo>
        <img src={logo} alt="Logo" />
      </DivLogo>
      <BtnMenuNav onClick={() => setMenu(!menu)}>
        {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </BtnMenuNav>
      <DivSideMenu display={menu}>
        <DivAvatar>
          <img src={photo} alt="Imagem de Perfil" />
        </DivAvatar>
        <Link to="/login" onClick={() => userLogout()}>
          LOGOUT
        </Link>
      </DivSideMenu>
      <DivLinksNav>
        <Link to="/login" onClick={() => userLogout()}>
          LOGOUT
        </Link>
        <DivAvatar>
          <img src={photo} alt="Cliente" />
        </DivAvatar>
      </DivLinksNav>
    </NavBar>
  );
}
