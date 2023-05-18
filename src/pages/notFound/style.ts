import styled from "styled-components";
import imgBackgroud from "./../../assets/img/backGroudRegisterPage.jpeg";

export const NotFoundMain = styled.main`
  width: 100%;
  height: 100vh;
  width: 100%;
  height: 100vh;
  background: url(${imgBackgroud});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: clamp(2em, 2em + 3vw, 10em);
    color: var(--color-white);
    text-align: center;
  }
`;
