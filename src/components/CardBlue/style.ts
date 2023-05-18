import styled from "styled-components";


export const BlueItem = styled.li`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  background-color: var(--color-opposite-2);
  width: 100%;
  max-width: 80px;
  height: 135px;
  border-radius: 40px;
  margin-top: 16px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
  }

  &:hover > div {
    transform: scale(1.2);
    transition: 0.3s ease;
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
  & > p {
    margin-top: 25px;
    font-size: 12px;
    text-align: center;
    color: var(--color-white);
  }

  & > div > img {
    width: 75%;
    height: 75%;
    object-fit: cover;
    border-radius: 50%;
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
