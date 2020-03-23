import React, { useState, useEffect } from "react";
import "./App.css";

const BottomRow = () => {
  let [quarter, setQuarter] = useState(1);
  let [posession, setPosession] = useState("Home");
  let [downCount, setDown] = useState(1);

  useEffect(() => {
    setInterval(() => {
      if (quarter < 4) {
        setQuarter(++quarter);
      } else {
        setQuarter(4);
      }
    }, 900000);
  });

  let changeDown = () => {
    if (downCount < 4) {
      setDown(++downCount);
    } else {
      setDown(1);
    }
  };

  let ChangePosession = () => {
    if (posession === "Home") {
      setPosession("Away");
    } else {
      setPosession("Home");
    }
  };

  return (
    <div className='bottomRow'>
      <div className='down'>
        <h3 className='down__title'>Down</h3>
        <div onClick={changeDown} className='down__value'>
          {downCount}
        </div>
      </div>

      <div className='ballOn'>
        <h3 className='ballOn__title'>posession</h3>
        <div className='ballOn__value'>{posession}</div>
        <button onClick={ChangePosession} className='homeButtons__touchdown'>
          switch
        </button>
      </div>
      <div className='quarter'>
        <h3 className='quarter__title'>Quarter</h3>
        <div className='quarter__value'>{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
