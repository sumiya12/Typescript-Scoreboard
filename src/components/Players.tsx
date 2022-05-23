import Score from "./Score";
import "./player.css";
type Props = {
  data: Player;
  modify: (pm: string, index: number) => void;
  index: number;
  remMydata: (num: number) => void;
  avarage: number;
  highscore: number;
};
interface Player {
  name: string;
  age: number | null;
  score: number;
  gender: string | null;
}

function Players(props: Props): JSX.Element {
  // console.log(props);

  const handleRem = () => {
    props.remMydata(props.index);
  };

  const display = {
    display: "flex",
    width: "80vw",
    height: "10vh",
    marginTop: "auto",
    justifyContent: "space-around",
    padding: "10px",
    // textAlign: "center",
    div: { border: "0px solid", padding: "10px" },
  };
  const style = {
    border: "none",
  };
  // console.log(props.data);

  return (
    <div
      style={display}
      className={
        props.avarage > props.data.score ? "playerscore" : "playerscore1"
      }
    >
      {props.highscore === props.data.score ? (
        <span id="h">👑</span>
      ) : (
        <span id="h"></span>
      )}
      <div style={display.div}>
        {props.data.name}{" "}
        <button onClick={handleRem} style={style}>
          {" "}
          remove
        </button>{" "}
      </div>
      <Score score={props.data} index={props.index} modify={props.modify} />
    </div>
  );
}

export default Players;
