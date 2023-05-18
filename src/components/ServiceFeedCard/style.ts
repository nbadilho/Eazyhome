import styled, { css } from "styled-components";

interface iStyledFeedProps {
  colorOfCardFeed?: string;
}

export const FeedItem = styled.li<iStyledFeedProps>`
  width: 90%;
  max-width: 700px;
  min-width: 300px;
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: var(--radius-1);
  padding: 1rem;
  position: relative;

  ${({ colorOfCardFeed }) => {
    if (colorOfCardFeed === "primary") {
      return css`
        border: 1px solid var(--color-primary);
        &:hover {
          background-color: var(--color-primary-20);
        }
      `;
    } else if (colorOfCardFeed === "opposite") {
      return css`
        border: 1px solid var(--color-opposite-1);
        &:hover {
          background-color: var(--color-opposite-1-20);
        }
      `;
    } else if (colorOfCardFeed === "tertiary") {
      return css`
        border: 1px solid var(--color-tertiary);
        &:hover {
          background-color: var(--color-tertiary-20);
        }
      `;
    } else {
      return css`
        border: 1px solid var(--color-negative);
        &:hover {
          background-color: var(--color-negative-20);
        }
      `;
    }
  }}

  @media (min-width: 500px) {
    min-width: 400px;
    min-height: 240px;
  }

  @media (min-width: 800px) {
    max-width: 80%;
  }
`;

export const FeedItemImage = styled.div`
  width: 4rem;
  height: 4rem;
  border: 1px solid var(--color-grey20);
  margin: 1rem;
  border-radius: var(--radius-1);
  position: absolute;
  top: 0;
  right: 0;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-1);
  }

  @media (min-width: 700px) {
    width: 5rem;
    height: 5rem;
    position: relative;
    right: 0;
    top: 0;
  }
`;

export const FeedItemBody = styled.div`
  min-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem 1rem 0;
  gap: 0.5rem;
`;

export const FeedItemHeader = styled.div<iStyledFeedProps>`
  min-width: 12rem;
  max-width: 80%;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey20);
  background-color: transparent;

  padding: 0.5rem 0 0.5rem 0;
  position: relative;

  & span {
    ${({ colorOfCardFeed }) => {
      if (colorOfCardFeed === "primary") {
        return css`
          color: var(--color-primary);
        `;
      } else if (colorOfCardFeed === "opposite") {
        return css`
          color: var(--color-opposite-1);
        `;
      } else if (colorOfCardFeed === "tertiary") {
        return css`
          color: var(--color-tertiary);
        `;
      } else {
        return css`
          color: var(--color-negative);
        `;
      }
    }};
  }

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const FeedRating = styled.div`
  position: absolute;
  top: 2.6rem;

  @media (min-width: 700px) {
    position: relative;
    top: 0;
  }
`;

export const FeedItemTitle = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0;
  margin-top: 1rem;
  gap: 0.5rem;

  @media (min-width: 700px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

export const FeedItemDetails = styled.div`
  font-weight: 700;
  display: flex;
  max-width: 75%;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  & > div {
    max-width: 100%;
    font-weight: 400;
  }
  @media (min-width: 700px) {
    margin-top: 0;
  }
`;

export const FeedCardButton = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 1rem;
  bottom: 0.8rem;

  & > button {
    background-color: var(--color-primary);
    border-radius: var(--radius-1);
    border: var(--color-primary);
    font-size: var(--font-size-16);
    width: fit-content;
    padding: 0.5rem 1.5rem;
    font-weight: 500;
    line-height: 16px;
    color: var(--color-grey0);

    :hover {
      background-color: var(--color-secondary);
      border: var(--color-secondary);
    }
  }

  @media (min-width: 700px) {
    position: absolute;
    bottom: 1.5rem;
    right: 2rem;
  }
`;
