import styled from "styled-components";

export const ProvidedServiceList = styled.ul`
  max-width: 100%;
  width: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  overflow-y: scroll;
`;

export const NoItemsFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  color: var(--color-primary);
  font-size: var(--font-size-20);
  text-align: center;

  & > div {
    color: rgba(255, 102, 0, 0.2);
    position: absolute;
  }
`;
