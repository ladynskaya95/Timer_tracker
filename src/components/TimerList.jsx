import React from 'react';
import TimerItem from "./TimerItem/TimerItem.jsx"
import { useSelector } from "react-redux";

const TimerList = () => {
const items = useSelector((state) => state.counters);

    return (
      <div className="timerList">
        {items.map((item) => ( 
        <TimerItem
           key={item.name}
           item={item}
          />)
        )}
      </div>
    );
};

export default TimerList;


