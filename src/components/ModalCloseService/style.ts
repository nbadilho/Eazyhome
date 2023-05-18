import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 50%;
  max-width: 700px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  position: relative;

  @media (min-width: 700px) {
    min-width: 500px;
    padding-left: 4rem;
  }
`;

export const ItemImage = styled.div`
  min-width: 4rem;
  /* min-height: 4rem; */

  border: 1px solid var(--color-grey20);
  margin: 1rem;
  border-radius: var(--radius-1);
  /* position: absolute;
  top: 0;
  right: 0; */

  & > img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-1);
  }

  @media (min-width: 700px) {
    min-width: 5rem;
    /* min-height: 5rem; */
    /* position: relative;
    right: 0;
    top: 0; */
  }
`;

export const ItemBody = styled.div`
  min-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem 0 0;
  gap: 0.5rem;
  scroll-padding-left: 1rem;
`;

export const CloseButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;

  & > button {
    background-color: var(--color-primary);
    border-radius: var(--radius-1);
    border: 2px solid var(--color-primary);
    font-size: var(--font-size-16);

    padding: 0.5rem 1.5rem;
    font-weight: 500;
    line-height: 24px;
    color: var(--color-grey0);

    :hover {
      background-color: transparent;
      color: var(--color-primary);
    }
  }
`;

export const ModalContainer = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: var(--color-white);
  border-radius: 10px;
  padding: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  font-size: var(--font-size-14);
  @media (min-width: 700px) {
    font-size: var(--font-size-16);
  }
`;

export const CloseModalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 1rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
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

export const StatusDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  padding-bottom: 1rem;

  @media (min-width: 700px) {
    min-width: 500px;
    padding-left: 6rem;
  }
`;
export const FirstLine = styled.div`
  min-width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 1rem;

  & > div {
    width: 50%;
  }
`;

export const SecondLine = styled.div`
  width: 80%;
`;

export const RatingDiv = styled.div`
  width: 75%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  padding-bottom: 1rem;
  margin-left: 1rem;

  @media (min-width: 700px) {
    min-width: 500px;
    padding-left: 4rem;
  }
`;

export const LeftColumn = styled.div``;

export const RightColumn = styled.div`
  width: 40%;
  position: absolute;
  bottom: 0.5rem;
  right: -1.5rem;

  & > button {
    background-color: var(--color-opposite-1);
    border-radius: var(--radius-1);
    border: var(--color-primary);
    font-size: var(--font-size-16);
    padding: 0.5rem 1.5rem;
    font-weight: 500;
    line-height: 24px;
    color: var(--color-grey0);

    :hover {
      background-color: var(--color-opposite-2);
      border: var(--color-opposite-2);
    }
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
