import styled from "styled-components";

export const DivFooter = styled.div`
  padding: 20px;
  background-color: var(--color-primary);

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: var(--color-white);
  }

  & > div > a {
    font-weight: 400;
    text-decoration: underline;
    color: white;
  }

  & > div > a:hover {
    color: var(--color-grey100);
  }

  @media (min-width: 800px) {
    & > div {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;

export const DivContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 60%;

  @media (min-width: 650px) {
    & {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const DivContactsIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & > a:hover {
    color: var(--color-grey100);
  }

  @media (min-width: 650px) {
    & {
      align-items: flex-start;
    }
  }
`;

export const DivContactsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 150%;

  @media (min-width: 650px) {
    & {
      width: 60%;
      align-items: flex-end;
    }
  }
`;
