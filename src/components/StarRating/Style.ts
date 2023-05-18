import styled from "styled-components";

type Props = {
  ratingColor: number;
};

export const DivRating = styled.div<Props>`
  width: 180px;
  & p {
    margin-top: 16px;
    text-align: center;
  }
  & span {
    color: ${(props) =>
      props.ratingColor < 3
        ? "#ff0707"
        : props.ratingColor === 3
        ? "#ffc107 "
        : "#39ff07"};
  }

  & input[type="radio"] {
    display: none;
  }

  & label {
    cursor: pointer;
    margin-right: 16px;
  }
`;
