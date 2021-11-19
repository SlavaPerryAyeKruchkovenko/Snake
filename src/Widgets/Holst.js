import React from 'react'
import Point from '../Models/Point'
import { Stage, Layer, Circle } from "react-konva";
import Head from './Head'
import Proptypes from 'prop-types'

const styles = {
    canvas:{
        background: 'white',
        padding: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block'
    },
}

function Holst({weight,height,body,radius,vector,foodLoc}){
    function correctLoc(el){
        if(el.position.X > weight){
            el.position = new Point(0,el.position.Y)}
        if(el.position.Y > height){
            el.position = new Point(el.position.X,0)}
        if(el.position.X < 0){
            el.position = new Point(weight,el.position.Y)}
        if(el.position.Y < 0){
            el.position = new Point(el.position.X,height)}
        return el.position}

    return(
        <React.Fragment>
            <Stage width={weight}
                   height={height}
                   style={styles.canvas}>
                <Layer>
                    <div>
                        {body.map(el => {
                        const x = correctLoc(el).X
                        const y = correctLoc(el).Y
                        return  el.isHead
                            ?<Head x={x} y={y} radius={radius}
                                 vector={vector}/>
                            :<Circle fill="red" stroke="black"
                                 x={x}
                                 y={y}
                                 radius={radius}
                                 strokeWidht={5}/>})}
                        <Circle fill="red"
                            radius={radius}
                            x={foodLoc.X}
                            y={foodLoc.Y}/>
                    </div>
                </Layer>
            </Stage>
        </React.Fragment>
    );
}
Holst.prototype = {
    weight: Proptypes.number.isRequired,
    height: Proptypes.number.isRequired,
}
export default Holst

