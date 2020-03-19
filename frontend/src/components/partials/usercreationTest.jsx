import React, { Component } from 'react';
import Tilt from "react-tilt";


class UsercreationTest extends Component {
    render() {
        return (
        <div>
            <div className="grid-container">
                <div className="grid-item1 card-item">
                <h6 style={{ color: "white",}}> Hi There! </h6>
                    <h4 style={{ color: "white", padding: 5 }}>
                    {" "}
                    Now that you're a part of the Card community, lets make your card!!{" "}
                    </h4>
                    <h6 style={{ color: "white", padding: 5 }}>
                    Your card is like a tiny resume! it'll help other users determine if
                    you're a good fit for their team! lets start with the basics (don't
                    worry you can change all of this later){" "}
                    </h6>
                </div>


                <div className="grid-item2 card-item">
                <Tilt
                className='card Tilt'
                options={{ max: 15 }}
                style={{
                  height: 220,
                  width: 350,
                  transformStyle: "preserve-3d",
                  backgroundImage: `url(${"https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})`,
                  backgroundSize: "cover",
                  borderRadius: "6px",
                  color: "white",
                }}
              >
                <div className='Tilt-inner innerCard'>
                  {" "}
                  <h1 className='cardName'>Currucu</h1>
                  <h3 className='cardTitle'> Mr. Turuku </h3>


                </div>
                
              </Tilt> </div>
                

                <div className="grid-item3 card-item">
                
                USERNAME
                <br></br>
                <input/>
                <br></br>
                TITLE
                <br></br>
                <input/>

                </div>






                <div className="grid-item4 card-item">                              
                </div>
                <div className="grid-item5 card-item">                              
                </div>
            </div>
        </div>
        );
    }
}

export default UsercreationTest;