export default class MovementManager{
    constructor(x0, y0, vx0, vy0, ax0, ay0, fricX, fricY){
        this.position = {x: x0, y: y0};
        this.velocity = {x: vx0, y: vy0};
        this.acceleration = {x: ax0, y: ay0};
        this.friction = {x: fricX, y: fricY};
        this.standards = {
            walk: 1800, // acceleration for walking
            gravity: 1000, // acceleration for falling
            ground: 2.5, // friction on ground
            jump: -700, // initial velocity for jumping
            dash: 800, // velocity for dashing
        }
        this.boudaries = {
            vMaxWalking: 400,
            vMaxFalling: 600,
        }
        this.peak = false;
    }

    elapseTime(dt, size){
        if(this.isOnGround(size)){
            this.friction.x = this.standards.ground;
            this.acceleration.y = 0;
        }else{
            this.acceleration.y = this.standards.gravity;
            this.friction.x = 0;
        }

        this.calcVelocity(dt);

        this.checkBoundariesJumping();
        this.checkBoundariesWalking();

        this.calcPosition(dt);

        this.checkPositionBoundaries(size);
    }

    calcPosition(dt){
        let dx = this.velocity.x * dt;
        let dy = this.velocity.y * dt;
        this.setX(this.position.x + dx);
        this.setY(this.position.y + dy);
    }

    calcVelocity(dt){
        let dvx = (this.acceleration.x - this.velocity.x * this.friction.x) * dt;
        let dvy = (this.acceleration.y - this.velocity.y * this.friction.y) * dt;
        if(this.velocity.y <= 0 && (this.velocity.y + dvy) > 0){
            this.peak = true;
        }else{
            this.peak = false;
        }
        this.setVelocityX(this.velocity.x + dvx);
        this.setVelocityY(this.velocity.y + dvy);
    }

    checkPositionBoundaries(size){
        if(this.isBelowGround(size)){
            this.setY(size.getCanvasBottom());
        }
    }

    checkBoundariesWalking(){
        let outOfBounds = (this.velocity.x > this.boudaries.vMaxWalking || this.velocity.x < -this.boudaries.vMaxWalking);
        if(this.isAcceleratedHrizontally() && outOfBounds){
            if(this.velocity.x > 0){
                this.velocity.x = this.boudaries.vMaxWalking;
            }else{
                this.velocity.x = -this.boudaries.vMaxWalking;
            }
        }
    }

    checkBoundariesJumping(){
        let outOfBounds = this.velocity.y >  this.boudaries.vMaxFalling;
        if(outOfBounds){
            this.velocity.y = this.boudaries.vMaxFalling;
        }
    }

    jump(){
        this.velocity.y = this.standards.jump;
    }

    walk(left){
        if(left){
            this.acceleration.x = -this.standards.walk;
        }
        else{
            this.acceleration.x = +this.standards.walk;
        }
    }

    stopWalk(){
        this.acceleration.x = 0;
    }

    setFrictionX(fricX){
        this.friction.x = fricX;
    }

    setFrictionY(fricY){
        this.friction.y = fricY;
    }

    setAccelerationX(ax){
        this.acceleration.x = ax;
    }

    setAccelerationY(ay){
        this.acceleration.y = ay;
    }

    setVelocityX(vx){
        this.velocity.x = vx;
    }

    setVelocityY(vy){
        this.velocity.y = vy;
    }

    setX(x){
        this.position.x = x;
    }

    setY(y){
        this.position.y = y;
    }

    getX(){
        return this.position.x;
    }

    getY(){
        return this.position.y;
    }

    isAcceleratedHrizontally(){
        return this.acceleration.x != 0;
    }

    isMovingHorizontally(){
        return this.velocity.x != 0;
    }

    isMovingVertically(){
        return this.velocity.y != 0;
    }

    isBelowGround(size){
        return this.position.y > size.getCanvasBottom();
    }

    isOnGround(size){
        return this.position.y == size.getCanvasBottom();
    }

    isAtPeak(){
        return this.peak;
    }
}