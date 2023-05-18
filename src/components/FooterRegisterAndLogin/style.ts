import styled from "styled-components";

export const DivFooter = styled.div`
  padding: 10px;
  background-color: var(--color-primary);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--color-white);
  width: 100%;
  gap: 10px;
  padding-left: 8%;
  padding-right: 8%;
  @media (min-width: 700px) {
    bottom: -100px;
  }
`;

export const DivContactsIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  align-items: flex-start;

  & > a:hover {
    color: var(--color-grey100);
  }
`;

export const DivContactsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 150%;
  align-items: flex-end;

  @media (min-width: 650px) {
    & {
      width: 60%;
    }
  }
`;
