import styled from "styled-components";

export const ModalDiv = styled.div`
  /* width: 50%;
  max-width: 700px;
  min-width: 300px; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  padding-bottom: 1rem;
  /* position: relative; */
  gap: 15px;

  /* @media (min-width: 700px) {
    /* min-width: 500px;
    padding-left: 4rem; */
  /* 
  }  */
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

export const ItemImage = styled.div`
  min-width: 4rem;
  max-width: 4rem;
  min-height: 4rem;
  max-height: 4rem;
  border: 2px solid var(--color-grey20);
  /* margin: 1rem; */
  border-radius: var(--radius-1);
  /* position: absolute;
  top: 0;
  right: 0; */

  & > img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    border-radius: var(--radius-1);
  }

  @media (min-width: 700px) {
    min-width: 6rem;
    width: 6rem;
    min-height: 6rem;
    height: 6rem;
    /* position: relative;
    right: 0;
    top: 0; */
  }
`;

export const ItemBody = styled.div`
  /* min-width: 80%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: 0 1rem 0 0; */
  gap: 0.5rem;
  font-size: 14px;
  color: var(--color-grey100);
  @media (min-width: 700px) {
    font-size: 18px;
  }
  /* scroll-padding-left: 1rem; */
`;

export const HireButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  & > button {
    background-color: var(--color-primary);
    border-radius: var(--radius-1);
    border: 2px solid var(--color-primary);
    font-size: var(--font-size-16);

    padding: 0.5rem 1.5rem;
    font-weight: 500;
    line-height: 24px;
    color: var(--color-white);

    :hover {
      background-color: transparent;
      border: 2px solid var(--color-primary);
      color: var(--color-primary);
    }
  }
`;

export const ModalContainer = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: var(--color-white);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
`;

export const CloseModalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 1rem;
  position: absolute;
  top: 0.5rem;
  right: 0rem;
  z-index: 99;

  & > button {
    background-color: transparent;
    border-radius: var(--radius-1);
    border: var(--color-primary);
    font-size: var(--font-size-16);
    padding: 0.5rem 0.8rem;
    font-weight: 500;
    line-height: 24px;
    color: var(--color-primary);

    :hover {
      background-color: var(--color-grey0);
      border: var(--color-tertiary);
    }
  }
`;
