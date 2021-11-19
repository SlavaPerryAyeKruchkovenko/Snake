import React from 'react'
import { Circle } from "react-konva";

export default function Head({x,y,radius,vector}){
    const x1 = x-vector.Y*(radius/4+2)
    const y1 = y+vector.X*(radius/4+2)
    const x2 = x+vector.Y*(radius/4+2)
    const y2 = y-vector.X*(radius/4+2)
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
                    x={x1}
                    y={y1}
                    radius={radius/4}
                    strokeWidht={1}/>
            <Circle fill="white"
                    stroke="black"
                    x={x2}
                    y={y2}
                    radius={radius/4}
                    strokeWidht={1}/>
            <Circle fill="black"
                    x={x1}
                    y={y1}
                    radius={2}/>
            <Circle fill="black"
                    x={x2}
                    y={y2}
                    radius={2}/></div>
    )
}