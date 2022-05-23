type Props = {
  score: Player;
  modify: (pm: string, index: number) => void;
  index: number;
};
interface Player {
  name: string;
  age: number | null;
  score: number;
  gender: string | null;
}
function Score(props: Props) {
  function handler(e: any) {
    if (e.target.textContent === "+") {
      props.modify("+", props.index);
    } else {
      props.modify("-", props.index);
    }
    // function handleRem() {
    //   props.highNum(playerData);
    // }
  }
  const display = {
    display: "flex",
    width: "20vw",
    margin: "auto",
    jsutifyContent: "space-around",

    div: { border: "0px solid", padding: "10px" },
  };
  return (
    <>
      <button onClick={(e) => handler(e)}>+</button>
      {props.score.score}
      <button onClick={(e) => handler(e)}>-</button>
    </>
  );
}

export default Score;
