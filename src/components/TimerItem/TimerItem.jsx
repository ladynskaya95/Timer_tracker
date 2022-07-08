import React from 'react';
import styles from "./TimerItem.module.css"

import { useDispatch} from "react-redux";
import { DateTime, Duration } from "luxon";
import { deleteCounter, updateCounter } from "../../redux/actions";


const TimerItem = ({ item: { id, name, time, isRunning, date } }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = React.useState(time);
  const [isActive, setIsActive] = React.useState(isRunning);
  const [currentDate, setCurrentDate] = React.useState(date);

  React.useEffect(() => {
    const now = DateTime.now().toSeconds();
    if (isActive) {
      setCounter({ seconds: Math.ceil(now - currentDate + time.seconds) });
    }
  }, []);

  React.useEffect(() => {
    let timerId;
    dispatch(
      updateCounter({
        id,
        name,
        time: counter,
        isRunning: isActive,
        date: currentDate,
      })
    );
    if (isActive) {
      timerId = setInterval(() => {
        setCounter((prev) => {
          return { seconds: prev.seconds + 1 };
        });
        setCurrentDate(DateTime.now().toSeconds());
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [id, name, counter, isActive, currentDate, dispatch]);

  const isActivehandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={
        isActive
          ? styles.item_container + " " + styles.active
          : styles.item_container
      }>
      <div className={styles.item_title}>{name}</div>
      <div className={styles.timer}>
        {Duration.fromObject(counter).toISOTime({ suppressMilliseconds: true })}
      </div>
      <div className={styles.buttons}>
        <button
          className={isActive ? styles.pause : styles.run}
          onClick={() => isActivehandler()}
        ></button>
        <button
          onClick={() => dispatch(deleteCounter(id))}
          className={styles.delete}
        ></button>
      </div>
    </div>
  );
};

export default TimerItem;