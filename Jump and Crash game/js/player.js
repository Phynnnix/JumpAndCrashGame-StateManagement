
export default class Player{
    constructor(stateM, movementM, sizeM, spriteM, drawM){
        this.sprite = spriteM;
        this.movement = movementM;
        this.state = stateM;
        this.size = sizeM;
        this.drawing = drawM;
    }

    get stateName(){
        return this.state.currentName();
    }

    handle(input){
        this.state.handleInput(input, this.sprite, this.movement);
    }

    update(dt, time){
        this.movement.elapseTime(dt, this.size);
        this.sprite.requestNextFrame(time);
    }

    draw(){
        this.drawing.draw(this.sprite, this.movement, this.size);
    }
}