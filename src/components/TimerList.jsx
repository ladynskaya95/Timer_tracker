import React from 'react';
import TimerItem from "./TimerItem.jsx"

const TimerList = ({time, running, setRunning, items, removeItem, id }) => {
    return (
      <div className="timerList">
        {items.map((item) => (
          <TimerItem
            key={item.id}
            time={time}
            running={running}
            setRunning={setRunning}
            items={items}
            title={item.title}
            removeItem={removeItem}
            id={item.id}
          />
        ))}
      </div>
    );
};

export default TimerList;

