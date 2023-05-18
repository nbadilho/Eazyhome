import React from "react";
import { DivFooter, DivContactsIcons, DivContactsInfo } from "./style";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

interface iDiv {
  id: string;
}

export const Footer = ({ id }: iDiv) => {
  return (
    <DivFooter id={id}>
      <DivContactsIcons>
        <a href="https://www.facebook.com/">
          <SiFacebook size={24} />
        </a>
        <a href="https://twitter.com/home?lang=pt">
          <AiFillTwitterCircle size={26} />
        </a>
        <a href="#">
          <IoLogoWhatsapp size={26} />
        </a>
        <a href="https://www.instagram.com/">
          <AiFillInstagram size={26} />
        </a>
      </DivContactsIcons>

      <DivContactsInfo>
        <p>Telefone: (+11) 11 1234-5678 </p>
        <p>Email: eazyhome@mail.com</p>
      </DivContactsInfo>
    </DivFooter>
  );
};
