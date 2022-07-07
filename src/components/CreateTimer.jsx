import React from 'react';
import { useDispatch } from "react-redux";
import { add } from "../redux/itemSlice";

const CreateTimer = ({running, setRunning, date}) => {
const [name, setName] = React.useState("");

 const dispatch = useDispatch();
 

    return (
      <div className="createTimer">
        <label htmlFor="name">
          <input
            className="input_Timer"
            autoComplete="off"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            placeholder="Enter tracker name"
          />
          <button
            onClick={() => dispatch(add(name))}
            className="btnAdd"
          ></button>
        </label>
      </div>
    );
};

export default CreateTimer;