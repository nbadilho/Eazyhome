import styled from "styled-components";
import imgBackgroud from "./../../assets/img/backGroudRegisterPage.jpeg";

export const LoginBackGround = styled.main`
  max-width: 100vw;
  max-height: 100vh;
  min-height: 100vh;
  background: url(${imgBackgroud});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LoginConteiner = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: var(--color-white);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px 15px;

  & > div {
    width: 80%;
    text-align: center;
    color: var(--color-primary);
    p {
      font-size: var(--font-size-28);
      font-weight: 700;
      line-height: 24px;
    }
    button {
      background-color: transparent;
      border: solid transparent;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
  }

  @media (min-width: 700px) {
    & > div > p {
      font-size: var(--font-size-24);
    }
  }
`;

export const ErrorMsg = styled.p`
  color: var(--color-primary);
`;
