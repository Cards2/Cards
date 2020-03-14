import React, { Component } from 'react'
import Tilt from "react-tilt";

export default class Card extends Component {
    render() {
        return (
            <Tilt
            className='card Tilt'
            options={{ max: 15 }}
            style={{
              height: 220,
              width: 350,
              transformStyle: "preserve-3d",
              backgroundImage: `url(${"https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})`,
              backgroundSize: "cover",
              borderRadius: "6px"
            }}
          >
            <div className='Tilt-inner innerCard'>
              {" "}
                <h1 className='cardName'>Isaac</h1>
                <h3 className='cardTitle'>Graphic Designer</h3>{" "}
            </div>
          </Tilt>
        )
    }
}

