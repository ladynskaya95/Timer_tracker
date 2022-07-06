import React from 'react';
import Timer from "./Timer.jsx"

const TimerItem = ({time, running, setRunning, items, title, removeItem, id}) => {

    console.log(items)
    return (
      <div className="item_container">
        <div className="item_title">{title}</div>
        <Timer time={time}/>
        <div className="buttons">
          <button
            className="run"
            onClick={() => setRunning(!running)}
          >
            | |
          </button>
          <button
          onClick={() => removeItem(id)}
            className="delete"
          >
            -
          </button>
        </div>
      </div>
    );
};

export default TimerItem;