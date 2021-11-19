import React from 'react'
import { Circle } from "react-konva";

export default function Head({x,y,radius,vector}){
    return(
        <div>
            <Circle fill="#dc143c"
                    stroke="black"
                    x={x}
                    y={y}
                    radius={radius}
                    strokeWidht={5}/>
            <Circle fill="white"
                    stroke="black"
                    x={x-vector.Y*(radius/4+2)}
                    y={y+vector.X*(radius/4+2)}
                    radius={radius/4}
                    strokeWidht={1}/>
            <Circle fill="white"
                    stroke="black"
                    x={x+vector.Y*(radius/4+2)}
                    y={y-vector.X*(radius/4+2)}
                    radius={radius/4}
                    strokeWidht={1}/></div>
    )
}