import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import LeaderboardTable from "../components/LeaderboardTable";
import { firestore } from "../firebase";
import allLevelData from "../allLevelData";

const Leaderboard = ({
  level,
  setLevel,
  setInGame,
  setInLeaderboard,
  setInHome,
  setInInfo,
}) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  setInGame(false);
  setInHome(false);
  setInInfo(false);
  setInLeaderboard(true);

  useEffect(() => {
    const getLeaderboardData = async () => {
      const leaderArray = [];
      const firestoreData = await firestore.collection("highscores").get();
      firestoreData.forEach((doc) => {
        leaderArray.push(doc.data());
      });

      function compare(a, b) {
        const score1 = a.time;
        const score2 = b.time;

        let comparison = 0;
        if (score1 > score2) {
          comparison = 1;
        } else if (score1 < score2) {
          comparison = -1;
        }
        return comparison;
      }
      leaderArray.sort(compare);
      setLeaderboardData(leaderArray);
    };
    getLeaderboardData();
  }, []);

  const levelsArr = Object.keys(allLevelData)?.map((num) => {
    const number = parseInt(num);
    const level = allLevelData[number];
    return { name: level.name, image: level.board, number };
  });

  const Levels = () => {
    return levelsArr.map((i) => {
      return (
        <Card
          img={i.image}
          alt={i.name}
          small
          active={level === i.number}
          clicked={() => setLevel(i.number)}
          key={i.number}
        >
          {i.name}
        </Card>
      );
    });
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-levels-grid">
        <Levels />
      </div>
      <span className={`leaderboard-level-title ${allLevelData[level].name}`}>
        {allLevelData[level].name}
      </span>
      <LeaderboardTable values={leaderboardData} level={level} />
    </div>
  );
};

export default Leaderboard;
