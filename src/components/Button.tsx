// import "../style/player.css";
// import Main from "./Main";
type Props = {
  sortName: () => void;
  sortScore: () => void;
};
export default function Button(props: Props): JSX.Element {
  // debugger;
  const style = {
    border: "none",
  };
  return (
    <div className="Button">
      <button onClick={props.sortName} style={style}>
        Names
      </button>
      <button onClick={props.sortScore} style={style}>
        Score
      </button>
    </div>
  );
}
