import React from 'react';
import { useDispatch} from "react-redux";
import { remove, toggleTimer } from "../redux/itemSlice";

const TimerItem = ({time, running, setRunning, title, id, items}) => {

const dispatch = useDispatch();
    
const toggleTimer = () => {
    dispatch(toggleTimer(id))
}

    const removeItem = () => {
        dispatch(remove(id))
    }

    return (
      <div className="item_container">
        <div className="item_title">{title}</div>
         <div className="timer">
        <span>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span>
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span>
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
         
        <div className="buttons">
          <button className="run" onClick={toggleTimer}>
            | |
          </button>
          <button onClick={removeItem} className="delete">
            -
          </button>
        </div>
      </div>
    );
};

export default TimerItem;