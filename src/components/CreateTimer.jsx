import React from 'react';


const CreateTimer = ({running, setRunning, name, setName, addItem}) => {




    return (
      <div className="createTimer">
          <label htmlFor="name">
            <input
              className="input_Timer"
              autoComplete="off"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value) }
              name="name"
              placeholder='Enter tracker name'
            />
            <button 
            onClick={() => addItem()}
            className="btnAdd"></button>
          </label>
       
      </div>
    );
};

export default CreateTimer;