import Players from "./Players";
import "../App";
import MyApp from "./MyApp";
import Button from "./Button";
import { useEffect, useState } from "react";
import AddButton from "./AddButton";
// import { useMyContext } from "./Context";

// type Props = {
//   player: Player;
//   modify: () => void;
//   key: number;
//   remMydata: () => void;
// };
interface Player {
  name: string;
  age: number | null;
  score: number;
  gender: string | null;
}
// interface AddData {
//   name: string;
//   age: number | null;
//   score: number;
//   gender: string | null;
// }

function Main(): JSX.Element {
  const [players, setPlayers] = useState<Array<Player>>([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.players);
        setPlayers(res.players);
      });
  }, []);
  // const [max, setMax] = useState(0);
  // const [players, setPlayers] = useMyContext();
  // const [mySort, setMySort] = useState(players);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    if (players.length !== 0) {
      localStorage.setItem("players", JSON.stringify(players));
    }
  }, [players]);

  const sortName = () => {
    let newData = new Array(...players);
    newData.sort((a, b) => {
      return a.name < b.name ? 1 : -1;
    });
    setPlayers(newData);
  };

  const sortScore = () => {
    let newData = new Array(...players);
    newData.sort((a, b) => {
      return a.score < b.score ? 1 : -1;
    });
    setPlayers(newData);
  };

  function modify(pm: string, index: number) {
    if (pm === "+") {
      players[index].score += 1;
    } else {
      players[index].score -= 1;
    }
    setPlayers([...players]);
  }

  function addmydata(player: Player) {
    setPlayers([...players, player]);
  }

  function remMydata(num: number) {
    setPlayers(
      players.filter((e, i) => {
        return i !== num;
      })
    );
  }

  // remMydata(2);

  const getHighscore = () => {
    let scores: Array<number> = [];
    players &&
      players.map((person) => {
        scores.push(person.score);
      });
    let highScore = Math.max(...scores);
    // console.log(highScore);
    return highScore;
  };

  function Avg() {
    let total = 0;
    for (let i = 0; i < players.length; i++) {
      total += players[i].score;
    }
    let avg = total / players.length;
    return avg;
  }

  let ava = Avg();
  let highscore = getHighscore();
  return (
    <div>
      <MyApp too={players.length} />
      <Button sortName={sortName} sortScore={sortScore} />
      {players &&
        players.map((value: Player, index: number) => {
          return (
            <Players
              key={index}
              data={value}
              modify={(pm: string) => modify(pm, index)}
              index={index}
              avarage={ava}
              highscore={highscore}
              remMydata={remMydata}
              // max={max}
            />
          );
        })}
      <AddButton addmydata={addmydata} />
    </div>
  );
}

export default Main;
