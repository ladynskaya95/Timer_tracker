import React from 'react';
import TimerItem from "./TimerItem.jsx"
import { useSelector } from "react-redux";

const TimerList = ({time, running, setRunning}) => {
const items = useSelector((state) => state.item);

    return (
      <div className="timerList">
        {items.map((item) => (
         
   <TimerItem
            key={item.id}
            time={time}
            running={running}
            setRunning={setRunning}
            title={item.title}
            id={item.id}
            items={items}
          />
          )
        )}
      </div>
    );
};

export default TimerList;


