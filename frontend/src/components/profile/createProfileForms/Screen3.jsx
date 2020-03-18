import React from "react";
import { TimeZone } from "../../partials/TimeZone";

export const Screen3 = props => {
  return (
    <>
      <h2 style={{ color: "white", padding: 5 }}> You're halfway done :)</h2>
      <h1 style={{ color: "white", padding: 5 }}> Lets keep going.</h1>

      <h3 style={{ color: "white", padding: 5 }}>
        Finding someone to work with is great - but it's not so great if you
        can't find time to work together{" "}
      </h3>

      <h3 style={{ color: "white", padding: 5 }}>
        Fill out this section to help others know when you'll be around{" "}
      </h3>
      <div>
        <h4>Avalibility</h4>
        <label htmlFor='monday'>Monday</label>
        <select onChange={props.handleChange} name='monday' required>
          <option value='none' selected disabled hidden>
            Select an Option
          </option>
          <option value='always'>Always</option>
          <option value='sometimes'>Sometimes</option>
          <option value='never'>Never</option>
        </select>
        <label htmlFor='tuesday'>Tuesday</label>
        <select onChange={props.handleChange} name='tuesday' required>
          <option value='none' selected disabled hidden>
            Select an Option
          </option>
          <option value='always'>Always</option>
          <option value='sometimes'>Sometimes</option>
          <option value='never'>Never</option>
        </select>
        <label htmlFor='wednesday'>Wednesday</label>
        <select onChange={props.handleChange} name='wednesday' required>
          <option value='none' selected disabled hidden>
            Select an Option
          </option>
          <option value='always'>Always</option>
          <option value='sometimes'>Sometimes</option>
          <option value='never'>Never</option>
        </select>
        <label htmlFor='thursday'>Thursday</label>
        <select onChange={props.handleChange} name='thursday' required>
          <option value='none' selected disabled hidden>
            Select an Option
          </option>
          <option value='always'>Always</option>
          <option value='sometimes'>Sometimes</option>
          <option value='never'>Never</option>
        </select>
        <label htmlFor='friday'>Friday</label>
        <select onChange={props.handleChange} name='friday' required>
          <option value='none' selected disabled hidden>
            Select an Option
          </option>
          <option value='always'>Always</option>
          <option value='sometimes'>Sometimes</option>
          <option value='never'>Never</option>
        </select>
        <label htmlFor='saturday'>Saturday</label>
        <select onChange={props.handleChange} name='saturday' required>
          <option value='none' selected disabled hidden>
            Select an Option
          </option>
          <option value='always'>Always</option>
          <option value='sometimes'>Sometimes</option>
          <option value='never'>Never</option>
        </select>
        <label htmlFor='sunday'>Sunday</label>
        <select onChange={props.handleChange} name='sunday' required>
          <option value='none' selected disabled hidden>
            Select an Option
          </option>
          <option value='always'>Always</option>
          <option value='sometimes'>Sometimes</option>
          <option value='never'>Never</option>
        </select>
      </div>
      <br></br>
      <div>
        <TimeZone handleChange={props.handleChange} user={props.user} />
      </div>

      <button onClick={props.transition3}> NEXT </button>
    </>
  );
};
