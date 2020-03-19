import React from "react";

export const Screen1 = props => {
  console.log(props);
  return (
    <>
      <div>
        <h2 style={{ color: "white", padding: 5 }}> Hi There! </h2>
        <h1 style={{ color: "white", padding: 5 }}>
          {" "}
          Now that you're a part of the Card community, lets make your card!!{" "}
        </h1>
        <h2 style={{ color: "white", padding: 5 }}>
          Your card is like a tiny resume! it'll help other users determine if
          you're a good fit for their team! lets start with the basics (don't
          worry you can change all of this later){" "}
        </h2>
        <label>
          <h4>Username</h4>
        </label>
        <input
          onChange={props.handleChange}
          type='text'
          name='username'
          value={props.user.username}
          required
        />
      </div>
      <div>
        <label>
          <h4>Title</h4>
        </label>
        <input
          onChange={props.handleChange}
          type='text'
          name='title'
          placeholder='eg. Programmer, Artist, etc.'
          required
        />
      </div>
      <br></br>
      <button onClick={props.transition1}> NEXT </button>
    </>
  );
};
