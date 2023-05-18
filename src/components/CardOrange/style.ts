import styled from "styled-components";

export const OrangeItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-primary);
  width: 100%;
  max-width: 80px;
  height: 135px;
  border-radius: 40px;
  margin-top: 16px;
  margin-bottom: 15px;
  margin-left: 15px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
  }

  &:hover > div {
    transform: scale(1.2);
    transition: 0.3s ease;
  }

  @media (min-width: 400px) {
    & {
      margin-left: 0px;
    }
  }

  & > div {
    width: 100%;
    height: 60%;
    background-color: var(--color-grey20);
    border-radius: 50%;
    border: 3px solid var(--color-grey20);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div > img {
    width: 75%;
    height: 75%;
    border-radius: 50%;
  }

  & > p {
    margin-bottom: 25px;
    font-size: 12px;
    text-align: center;
    color: var(--color-white);
  }

  @media (min-width: 760px) {
    & {
      min-width: 100px;
      max-width: 100px;
      height: 160px;
      border-radius: 55px;
    }

    & > p {
      font-size: 14px;
    }
  }
`;
