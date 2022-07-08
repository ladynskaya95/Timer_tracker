import React from 'react';
import { useDispatch } from "react-redux";
import { addCounter } from "../redux/actions";

const CreateTimer = () => {
const [name, setName] = React.useState("");
const dispatch = useDispatch();
 
 const changeName = React.useCallback((event) => {
   setName(event.currentTarget.value);
 }, []);

 const addTimer = React.useCallback(
   (event) => {
     event.preventDefault();
     dispatch(addCounter(name));
     setName("");
   },
   [dispatch, name]
 );

    return (
      <div className="createTimer">
        <form onSubmit={addTimer}>
          <label htmlFor="name">
            <input
              className="input_Timer"
              autoComplete="off"
              id="name"
              value={name}
              onChange={changeName}
              name="name"
              placeholder="Enter tracker name"
            />
            <button type="submit" className="btnAdd"></button>
          </label>
        </form>
      </div>
    );
};

export default CreateTimer;