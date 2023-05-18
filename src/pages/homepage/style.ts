import styled from "styled-components";
import imagemHome from "../../assets/img/imagemhome.jpg";
import { Link } from "react-router-dom";

export const BodyHome = styled.body`
  margin-top: 85px;
`;

export const HeaderHome = styled.div`
  scroll-margin-top: 90px;
  height: 350px;
  background-image: url(${imagemHome});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 700px) {
    & {
      height: 540px;
    }
  }
`;

export const ContentHeader = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  & > div > h1 {
    font-size: var(--font-size-20);
    text-align: center;
    line-height: 150%;
    color: var(--color-white);
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    min-width: 85%;
    max-width: 85%;
    border: 2px solid var(--color-primary);
    padding: 25px 20px;
  }
  & > div > p {
    font-size: 14px;
    text-align: center;
    line-height: 150%;
    color: var(--color-white);
  }

  @media (min-width: 700px) {
    & {
      min-width: 50%;
      max-width: 50%;
    }
    & > div {
      border: none;
      align-items: flex-start;
    }
    & > div > h1 {
      font-size: 38px;
      text-align: left;
    }
    & > div > p {
      text-align: left;
      font-size: 16px;
    }
  }
`;

export const HeaderBtns = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  font-size: var(--font-size-20);

  @media (min-width: 700px) {
    & {
      display: flex;
      min-width: 180px;
      max-width: 180px;
      margin-top: 10px;
    }
  }
`;

export const LinksHeader = styled(Link)`
  width: 100px;
  padding: 0 6px 0 6px;
  height: 35px;
  background-color: var(--color-primary);
  border: 2px transparent;
  color: var(--color-white);
  font-size: 14px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: transparent;
    border: 2px solid var(--color-white);
  }
  @media (min-width: 700px) {
    & {
      min-height: 40px;
      min-width: 110px;
    }
  }
`;

export const DivAboutUs = styled.div`
  scroll-margin-top: 90px;
  margin: auto;
  display: flex;
  align-items: center;
  max-width: 1400px;
  justify-content: center;

  @media (min-width: 700px) {
    padding-top: 40px;
    padding-bottom: 40px;

    & strong {
      color: var(--color-primary);
    }
  }
`;

export const DivContentAboutUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 15px;
  margin-top: -25px;

  & > div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  & > div > h3 {
    margin-top: 40px;
    color: var(--color-primary);
    font-size: var(--font-size-28);
  }
  & > div > img {
    display: none;
  }

  @media (min-width: 990px) {
    & > div > img {
      display: flex;
      width: 550px;
      border: 2px solid var(--color-primary);
      height: 480px;
      object-fit: cover;
    }
    & {
      flex-direction: row;
      margin-left: -15%;
      margin-top: 0px;
    }
  }
`;

export const DivTextAboutUs = styled.div`
  width: 90%;
  max-width: 650px;
  padding: 20px;
  position: relative;
  background-color: var(--color-white);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 20;

  & > div {
    border: 2px solid var(--color-primary);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: var(--color-grey100);
    font-size: var(--font-size-16);
  }

  @media (min-width: 990px) {
    & {
      position: absolute;
      left: 400px;
      width: 70%;
      max-width: 700px;
      top: 25%;
    }
  }
`;

export const Services = styled.div`
  scroll-margin-top: 90px;
  background-color: var(--color-grey0);
  padding: 12px;
  margin-top: 30px;
`;

export const ContentServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h3 {
    color: var(--color-primary);
    font-size: var(--font-size-28);
  }
`;

export const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-row-gap: 24px;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 10px;

  @media (min-width: 400px) {
    & {
      grid-template-columns: 100px 100px 100px;
      grid-row-gap: 12px;
      gap: 12px;
    }
  }
  @media (min-width: 500px) {
    & {
      grid-template-columns: 100px 100px 100px 100px;
    }
  }
  @media (min-width: 760px) {
    & {
      grid-row-gap: 24px;
      gap: 24px;
    }
  }

  @media (min-width: 900px) {
    & {
      grid-template-columns: 100px 100px 100px 100px 100px 100px;
      gap: 28px;
      grid-row-gap: 28px;
    }
  }
`;

export const Comments = styled.div`
  scroll-margin-top: 85px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  background-color: rgba(150, 150, 180, 0.1);

  & > div {
    width: 100%;
    height: 70px;
    position: absolute;
    background-color: rgba(255, 102, 0, 0.3);
  }
  & > h3 {
    color: var(--color-white);
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 15px 15px;
    position: relative;
    text-align: center;
    z-index: 10;
    height: 50px;
    background-color: rgba(255, 102, 0, 1);
  }
`;

export const ListComments = styled.ul`
  min-height: 300px;
  max-height: max-content;
  min-width: 100%;
  max-width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 16px;
  display: flex;
  overflow: scroll;
  padding-left: 15px;
  gap: 20px;

  @media (min-width: 900px) {
    flex-direction: column;
    overflow: hidden;
    align-items: center;
  }
`;
