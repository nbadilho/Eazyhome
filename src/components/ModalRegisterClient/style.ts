import styled from "styled-components";

export const SelectConteiner = styled.div`
  min-width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DivTitleModal = styled.p`
  font-size: var(--font-size-20);
  font-weight: 600;
  color: var(--color-primary);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  & > button {
    background-color: transparent;
    border: none;
    opacity: 0.9;
    font-size: var(--font-size-20);
    font-weight: 600;
    color: var(--color-primary);
  }
  & > button:hover {
    opacity: 1;
  }
`;

export const DivState = styled.div`
  min-width: 30%;
  max-width: 30%;
`;

export const DivCity = styled.div`
  min-width: 60%;
  max-width: 60%;
`;

export const ErrorMsg = styled.p`
  color: var(--color-primary);
  font-size: 16px;
`;
