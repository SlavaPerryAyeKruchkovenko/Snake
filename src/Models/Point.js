export default class Point{
    constructor(x,y) {
        this.X = x
        this.Y = y
    }
    X;
    Y;
}
function rndNum(min,max) {return Math.floor(Math.random() * (max - min + 1) + min)}