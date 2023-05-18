import React from "react";

interface IButtonProps {
  type?: "submit" | "button";
  text: string;
  callback?: () => void;
  id?: string;
}

export const Button = ({ text, type, id, callback }: IButtonProps) => {
  return (
    <>
      <button id={id} onClick={callback} type={type}>
        {text}
      </button>
    </>
  );
};
