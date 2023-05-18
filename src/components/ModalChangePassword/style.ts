import styled from "styled-components";

export const BackGroudModalPassword = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: var(--color-overlay-black);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalPassword = styled.div`
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  height: max-content;
  padding: 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & > form {
    margin-top: 15px;
  }

  & label {
    color: var(--color-secondary);
  }

  & input {
    width: 350px;
    max-width: 100%;
  }

  & #closeButton {
    position: absolute;
    right: 15px;
    top: 15px;
    border: none;
    background-color: transparent;
    font-size: var(--font-size-24);
  }
  & #changePassword {
    background-color: var(--color-primary);
    border: 2px solid transparent;
    color: white;
  }
  & #changePassword:hover {
    background-color: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
  }
`;

export const DivTitleModal = styled.div`
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
    border: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  & > button:hover {
    opacity: 1;
    background-color: var(--color-grey20);
  }
`;
