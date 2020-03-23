//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [secondsT, setSecondsT] = useState(0);
  let [minute, setMinute] = useState(0);
  let [minuteT, setMinuteT] = useState(0);

  let homeTouchDown = () => {
    setScore(homeScore + 7);
  };
  let awayTouchDown = () => {
    setAwayScore(awayScore + 7);
  };
  let homeFieldgoal = () => {
    setScore(homeScore + 3);
  };
  let awayFieldgoal = () => {
    setAwayScore(awayScore + 3);
  };

  useEffect(() => {
    setInterval(() => {
      if (minuteT === 1 && minute === 5) {
        setMinuteT((minuteT = 0));
        setMinute((minute = 0));
      } else if (minute === 10) {
        setMinute((minute = 0));
        setMinuteT(++minuteT);
      } else if (secondsT > 4 && seconds === 9) {
        setSeconds((seconds = 0));
        setSecondsT((secondsT = 0));
        setMinute(++minute);
      } else if (seconds === 9) {
        setSeconds((seconds = 0));
        setSecondsT(++secondsT);
      } else if (seconds >= 0) {
        setSeconds(++seconds);
      }
    }, 1000);
  }, []);

  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className='home__score'>{homeScore}</div>
          </div>
          <div className='timer'>
            {minuteT}
            {minute}:{secondsT}
            {seconds}
          </div>
          <div className='away'>
            <h2 className='away__name'>Tigers</h2>
            <div className='away__score'>{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className='buttons'>
        <div className='homeButtons'>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchDown} className='homeButtons__touchdown'>
            Home Touchdown
          </button>
          <button onClick={homeFieldgoal} className='homeButtons__fieldGoal'>
            Home Field Goal
          </button>
        </div>
        <div className='awayButtons'>
          <button onClick={awayTouchDown} className='awayButtons__touchdown'>
            Away Touchdown
          </button>
          <button onClick={awayFieldgoal} className='awayButtons__fieldGoal'>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
