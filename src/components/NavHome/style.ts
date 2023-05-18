import styled from "styled-components";
import { keyframes } from "styled-components";

interface iDiv {
  display: boolean;
}

const menuAnimation = keyframes`
  0% {
   margin-left: -50px;
    opacity: 0;
  }

  100% {
    margin-left: 0px;
    opacity: 1;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 85px;
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;

  background-color: var(--color-white);

  @media (min-width: 700px) {
    height: 100px;
  }
`;

export const DivLogo = styled.div`
  width: 150px;
  height: 100%;

  @media (min-width: 700px) {
    width: 200px;
  }
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const DivLinksNav = styled.div`
  display: none;
  color: var(--color-grey100);
  font-weight: 600;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    font-size: 14px;
  }

  @media (min-width: 1030px) {
    gap: 25px;
    font-size: 16px;
  }
  & > Link {
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-primary) 50%,
      var(--color-grey100) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
  }
  & > Link:hover {
    color: var(--color-primary);
    text-decoration: underline;
    background-position: 0 100%;
  }
  & > a {
    position: relative;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-primary) 50%,
      var(--color-grey100) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
  }
  & > a:hover {
    color: var(--color-primary);
    text-decoration: underline;
    background-position: 0 100%;
  }
`;

export const BtnMenuNav = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);

  &:hover {
    color: var(--color-grey100);
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const DivSideMenu = styled.div<iDiv>`
  animation-name: ${menuAnimation};
  animation-iteration-count: 1;
  animation-duration: 0.5s;
  background-color: var(--color-grey100);
  display: flex;
  left: 0px;
  top: 0px;
  padding: 30px 20px;
  color: pink;
  font-weight: 600;
  gap: 25px;
  font-size: 16px;
  height: 100vh;
  width: 60%;
  max-width: 250px;
  display: ${({ display }) => (display === true ? "flex" : " none")};
  flex-direction: column;
  position: absolute;

  @media (min-width: 900px) {
    display: none;
  }
  & > Link {
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-primary) 50%,
      var(--color-grey100) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
  }
  & > Link:hover {
    color: var(--color-primary);
    text-decoration: underline;
    background-position: 0 100%;
  }
  & > a {
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-primary) 50%,
      var(--color-grey0) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
  }
  & > a:hover {
    color: var(--color-primary);
    background-position: 0 100%;
  }
`;
