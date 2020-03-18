import React from "react";

export const Screen4 = props => {
  return (
      <>
        <h2 style={{ color: "white", padding: 5 }}>
          {" "}
          It's all coming together
        </h2>
        <h1 style={{ color: "white", padding: 5 }}>
          Tells us about yourself.{" "}
        </h1>

        <h3 style={{ color: "white", padding: 5 }}>
          You have name and the skills but... who are you?{" "}
        </h3>

        <div>
          <label>
            <h4>About Me</h4>
          </label>
          <input
            onChange={props.handleChange}
            type='text'
            name='aboutMe'
            placeholder='About Me'
          />
        </div>
        <div>
          <label>
            <h4>Portfolio</h4>
          </label>
          <input
            onChange={props.handleChange}
            type='text'
            name='portfolio'
            placeholder='Portfolio'
          />
        </div>
        <div>
          <label>
            <h4>Contact</h4>
          </label>
          <input
            onChange={props.handleChange}
            type='text'
            name='contact'
            placeholder='Contact'
          />
        </div>
        <button type='submit'>Submit</button>
      </>
  );
};
