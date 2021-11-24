import React from 'react'
import Point from '../Models/Point'
import { Stage, Layer, Circle } from "react-konva";
import Head from './Head'
import Proptypes from 'prop-types'

const styles = {
    canvas:{
        background: 'white',
        padding: '0px',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block'
    },
    food:{
        position: 'absolute',
    },
    default:{
        margin: '0px',
        padding: '0px',
    },
    snakeEl:{
        position: '-webkit-sticky',
    },
}

function Holst(props){
    const {weight} = props
    const {height} = props
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
        <Stage width={props.weight}
               height={props.height}>
            <Layer style={styles.canvas}>
                <div className={styles.default}>
                    {props.body.map(el => {
                    const x = correctLoc(el).X
                    const y = correctLoc(el).Y
                    return  el.isHead
                        ?<Head x={x} y={y} radius={el.radius}
                             vector={props.vector}/>
                        :<Circle fill="red" stroke="black"
                             style={styles.snakeEl}
                             x={x}
                             y={y}
                             radius={el.radius}
                             strokeWidht={5}/>})}
                    <Circle styles={styles.food}
                        radius={props.radius}
                        x={props.foodLoc.X}
                        y={props.foodLoc.Y}
                        fill='yellow' stroke="black"
                        strokeWidht={5}/>
                </div>
            </Layer>
        </Stage>
    );
}
Holst.prototype = {
    weight: Proptypes.number.isRequired,
    height: Proptypes.number.isRequired,
    radius: Proptypes.number.isRequired,
}
export default Holst

