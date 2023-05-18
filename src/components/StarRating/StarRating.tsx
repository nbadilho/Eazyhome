import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { DivRating } from "./Style";

interface iRating {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

export const StarRating = ({ rating, setRating }: iRating) => {
  const [hover, setHover] = useState(null || Number);

  return (
    <DivRating ratingColor={rating}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={20}
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating)}
            />
          </label>
        );
      })}
      <p>
        Avaliação: <span>{rating}</span>
      </p>
    </DivRating>
  );
};
