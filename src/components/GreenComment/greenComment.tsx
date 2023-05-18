import { GreenCard, TopMark, BottomMark } from "./style";
import markorange from "../../assets/img/markorange.png";
import inversemarkgreen from "../../assets/img/inversemarkgreen.png";

interface iProp {
  text: string;
  user: string;
}

export function GreenComment({ text, user }: iProp) {
  return (
    <GreenCard>
      <TopMark src={markorange} />
      <div>
        <p>
          {text}
          <span> -{user}</span>
        </p>
      </div>
      <BottomMark src={inversemarkgreen} />
    </GreenCard>
  );
}
