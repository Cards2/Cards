import React from "react";

export const Screen2 = props => {
  return (
      <>
        <h1 style={{ color: "white", padding: 5 }}> Nice!</h1>
        <h1 style={{ color: "white", padding: 5 }}> So far, so good.</h1>

        <h2 style={{ color: "white", padding: 5 }}>
          Now is the time to test your humility!{" "}
        </h2>
        <h2 style={{ color: "white", padding: 5 }}>
          Rank yourself 1 - 10 in the following skills so that users have a
          better idea where your sick talents lies{" "}
        </h2>

        <h2 style={{ color: "white", padding: 5 }}>
          remember; humility (or not){" "}
        </h2>
        <div>
          <label htmlFor='art'>Art/Animation</label>
          <input
            onChange={props.handleChange}
            type='number'
            name='art'
            min='1'
            max='10'
            required
          ></input>
          <label htmlFor='programming'>Programming</label>
          <input
            onChange={props.handleChange}
            type='number'
            name='programming'
            min='1'
            max='10'
            required
          ></input>
          <label htmlFor='design'>Design</label>
          <input
            onChange={props.handleChange}
            type='number'
            name='design'
            min='1'
            max='10'
            required
          ></input>
          <label htmlFor='audio'>Audio</label>
          <input
            onChange={props.handleChange}
            type='number'
            name='audio'
            min='1'
            max='10'
            required
          ></input>
          <label htmlFor='writing'>Writing</label>
          <input
            onChange={props.handleChange}
            type='number'
            name='writing'
            min='1'
            max='10'
            required
          ></input>
        </div>
        <br></br>
        <button onClick={props.transition2}> NEXT </button>
      </>
  );
};
