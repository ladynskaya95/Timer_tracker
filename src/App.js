import  React from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import {add, remove, toggleTimer} from "./redux/itemSlice"

import CreateTimer from "./components/CreateTimer.jsx";
import TimerList from "./components/TimerList.jsx"

function App() {
  const dispatch = useDispatch();
  // const {time, running} = useSelector((state) => state.item)
  
  const [date, setDate] = React.useState(new Date());
//  const [items, setItems] = React.useState([
//    { id: 1, title: "ffffff", time: "0", running: false },
//    { id: 2, title: "fff", time: "0", running: false },
//    { id: 3, title: "ffffff", time: "0", running: false }
//  ]);
 const [time, setTime] = React.useState(0);
 const [running, setRunning] = React.useState(false)
 React.useEffect(() => {
   let interval;
   if (running) {
    setDate(new Date())
     interval = setInterval(() => {
       setTime((prevTime) => prevTime + 10);
     }, 10);
     return date ;
   } else if (!running) {
     clearInterval(interval);
   }
   return () => clearInterval(interval);
 }, [running]);
 console.log(date)

//  const addItem = React.useCallback(() => {
//   const item = {
//     id: 1 + Math.max(0, ...items.map((item) => item.id)),
//     title: name ? name : date.toDateString(),
//     running: true
//   }
//   setItems([...items, item]);
//  }, [items, name, date]);

//  const removeItem = React.useCallback((id) => {
//   setItems((xs) => xs.filter((x) => x.id !==id))
//  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>tracker</h1>
        <CreateTimer running={running} setRunning={setRunning} />
        <TimerList time={time} running={running} setRunning={setRunning} />
      </div>
    </div>
  );
}

export default App;
