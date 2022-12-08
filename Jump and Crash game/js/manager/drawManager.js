export default class DrawManager{
    constructor(context){
        this.ctx = context;
    }

    draw(sprite, movement, size){
        if(sprite.hasSheet()){
            this.ctx.drawImage(sprite.getSheet(), 
                            sprite.getX(), sprite.getY(), sprite.getW(), sprite.getH(),  
                            movement.getX(), movement.getY(), size.getDrawW(), size.getDrawH());
        }else{
            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(movement.getX(), movement.getY(), size.getDrawW(), size.getDrawW());
        }
    }
}