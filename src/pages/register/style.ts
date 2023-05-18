import styled from "styled-components";
import imgBackgroud from "./../../assets/img/backGroudRegisterPage.jpeg";

export const RegisterConteiner = styled.main`
  max-width: 100%;
  min-height: 100vh;
  background: url(${imgBackgroud});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const RegisterButtonsCoteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  gap: 35px;
  padding-top: 10px;
  padding-bottom: 15px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const DivTitleCard = styled.div`
  text-align: center;
  width: 70%;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  color: var(--color-grey100);
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  padding: 20px;
  height: 300px;
  background-color: var(--colo-white-opacity50);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (min-width: 800px) {
    & {
      max-width: 371px;
      max-height: 301px;
    }
  }
`;

export const ImgClient = styled.img`
  margin-bottom: 11px;
`;
