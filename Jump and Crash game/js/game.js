import Player from "./player.js";
import InputHandler from "./input.js";
import {onscreenLog} from "./utils.js";
import StateManager from "./manager/stateManager.js";
import { playerStateIds, playerStates } from "./player_states.js";
import MovementManager from "./manager/movementManager.js";
import SizeManager from "./manager/sizeManager.js";
import SpriteManager from "./manager/spriteManager.js";
import DrawManager from "./manager/drawManager.js";

class Game{
    constructor(){
        this.cv = null;
        this.ctx = null;
        this.player = null;
        this.input = null;

        this.lastTime = new Date().getTime();
    }

    initialize(){
        this.cv = document.getElementById("canvas");
        this.ctx = this.cv.getContext("2d");
    
        this.cv.width = 1024;
        this.cv.height = 576;

        this.input = new InputHandler();
    
        let playerSheet = document.getElementById("player_sprite_sheet");
        let playerSheetRows = [12,12,12,12,12,12,12,12,12,12,12,12,8,8,12,12,12,12];

        let sizeM = new SizeManager(this.cv.width, this.cv.height, 128, 128);
        let spriteM = new SpriteManager(playerSheet, 128, 128, playerSheetRows, 15, 1000/20);
        let movementM = new MovementManager(sizeM.getCanvasHCenter(), sizeM.getCanvasVCenter(),
                                            0,0,0,0,0,0);
                                            
        let stateM = new StateManager(playerStates, playerStateIds.STANDING_LEFT, {size: sizeM, sprite: spriteM, movement: movementM});
        let drawM = new DrawManager(this.ctx);
        this.player = new Player(stateM, movementM, sizeM, spriteM, drawM);

        requestAnimationFrame(() => this.animate());
    }
    
    clear(){
        this.ctx.fillStyle = "#F2F2F2";
        this.ctx.fillRect(0,0,this.cv.width,this.cv.height);
    }
    
    animate(){
        let time = new Date().getTime();
        let dt = (time - this.lastTime) / 1000;
        
        this.clear();
        onscreenLog(this.ctx, this.player, this.input);
        
        this.player.handle(this.input.last.key);
        this.player.update(dt, time);
        this.player.draw();
    
    
        this.lastTime = time;
        requestAnimationFrame(() => this.animate());
    }
}


function startup(){
    
    document.getElementById("load_screen").style.display = "none";
    
    g.initialize();
}

const g = new Game();
window.addEventListener("load", startup);