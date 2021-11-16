import React from 'react'
import Point from './Point'

export default class Snake{
    constructor(radius,startPosition) {
        this.radius = radius
        this.head = new SnakeEl(startPosition,radius,true)
        this.#body.push(this.head)
        this.enlargeSnake()
        this.enlargeSnake()
    }
    #body = []

    enlargeSnake(){
        const el = this.#body.pop()
        const point = el.position
        const position = new Point(point.X,point.Y + this.radius*2)
        this.#body.push(el)
        this.#body.push(new SnakeEl(position,this.radius,false))
    }

    moveSnake(direction,speed){
        this.#body.pop()
        const loc = new Point(
            (this.head.position.X+2*this.radius* direction.X)  * speed,
            (this.head.position.Y+2*this.radius* direction.Y)  * speed)
        const head = new SnakeEl(loc,this.head.radius,true)
        this.#body.unshift(head)
        this.head = head
        return head
    }
    getBody(){
        return this.#body
    }
}
class SnakeEl{
    constructor(position,radius,isHead) {
        this._position = position
        this.radius = radius
        this._isHead = isHead
    }
    set position(position){this._position = position}
    get position(){return this._position}
    get isHead(){return this._isHead}

}
