export default class SpriteManager{
    constructor(sheet, spriteWidth, spriteHeight, rowLengths, initRow, duration){
        this.sheet = sheet;
        this.cell = {row: initRow, col: 0};
        this.dimensions = {w: spriteWidth, h: spriteHeight};
        this.rowLengths = rowLengths;
        this.lastChangeTime = new Date().getTime();
        this.frameDuration = duration;
    }

    getSheet(){
        return this.sheet;
    }

    setSheet(sheet){
        this.sheet = sheet;
    }

    hasSheet(){
        return this.sheet !== null;
    }

    getW(){
        return this.dimensions.w;
    }

    getH(){
        return this.dimensions.h;
    }

    getX(){
        return this.cell.col * this.dimensions.w;
    }

    getY(){
        return this.cell.row * this.dimensions.h;
    }

    requestNextFrame(time){
        if(time - this.lastChangeTime >= this.frameDuration){
            this.forceNextFrame(time);
            return true;
        }
        return false;
    }

    forceNextFrame(time){
        this.cell.col = (this.cell.col + 1) % this.rowLengths[this.cell.row];
        this.lastChangeTime = time;
    }

    isAtAnimationStart(){
        return this.cell.col == 0;
    }

    isAtAnimationEnd(){
        return this.cell.col == this.rowLengths[this.cell.row] - 1;
    }
    
    setAnimation(row){
        this.cell.row = row;
        this.cell.col = 0;
        this.lastChangeTime = new Date().getTime();
    }
}