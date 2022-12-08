export default class SizeManager{
    constructor(canvasW, canvasH, drawW, drawH){
        this.canvas = {w: canvasW, h: canvasH};
        this.draw = {w: drawW, h: drawH};
    }

    getCanvasW(){
        return this.canvas.w;
    }

    getCanvasH(){
        return this.canvas.h;
    }

    getDrawW(){
        return this.draw.w;
    }

    getDrawH(){
        return this.draw.h;
    }

    getCanvasBottom(){
        return this.canvas.h - this.draw.h;
    }

    getCanvasTop(){
        return 0;
    }

    getCanvasLeft(){
        return 0;
    }

    getCanvasRight(){
        return this.canvas.w - this.draw.w;
    }

    getCanvasHCenter(){
        return this.canvas.w / 2 - this.draw.h / 2;
    }

    getCanvasVCenter(){
        return this.canvas.h / 2 - this.draw.h / 2;
    }
}