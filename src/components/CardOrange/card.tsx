import { OrangeItem } from "./style";

interface iProp {
  img: string;
  type: string;
  onClick?: () => void;
}

export function OrangeCard({ img, type, onClick }: iProp) {
  return (
    <OrangeItem>
      <div onClick={onClick}>
        <img src={img} alt="" />
      </div>
      <p>{type}</p>
    </OrangeItem>
  );
}
