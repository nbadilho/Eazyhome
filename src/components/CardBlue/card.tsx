import { BlueItem } from "./style";

interface iProp {
  img: string;
  type: string;
  onClick?: () => void;
}

export function BlueCard({ img, type, onClick }: iProp) {
  return (
    <BlueItem>
      <div>
        <img src={img} onClick={onClick} />
      </div>
      <p>{type}</p>
    </BlueItem>
  );
}
