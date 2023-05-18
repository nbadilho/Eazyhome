import styled from "styled-components";

export const OrangeCard = styled.li`
  min-width: 280px;
  max-width: 350px;
  position: relative;
  color: var(--color-grey100);
  font-size: 18px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div > p {
    width: 70%;
    text-align: center;
  }
  & > div > p > span {
    color: var(--color-grey50);
  }
  @media (min-width: 900px) {
    margin-left: 40%;
    max-width: 500px;
  }
`;

export const TopMark = styled.img`
  width: 30px;
  height: 30px;
  @media (min-width: 900px) {
    width: 37px;
    height: 37px;
    margin-left: 50px;
  }
`;
export const BottomMark = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;

  @media (min-width: 900px) {
    width: 37px;
    height: 37px;
    right: 25px;
    bottom: -20px;
  }
`;
