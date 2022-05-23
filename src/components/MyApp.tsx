// import "../style/player.css";
import Main from "./Main";
type Props = {
  too: number;
};
export default function MyApp(props: Props): JSX.Element {
  return (
    <div className="div">
      <h1>SCOREBOARD</h1>
      <p>
        PLAYER <span>{props.too}</span>
      </p>
    </div>
  );
}
