export default class InputHandler{
    constructor(){
        this.lastKey = "NONE";
        window.addEventListener("keydown", (e) => {
            switch(e.key){
                case "ArrowLeft":
                case "a":
                    this.lastKey = "LEFT PRESS";
                    break;
                case "ArrowRight":
                case "d":
                    this.lastKey = "RIGHT PRESS";
                    break;
                case "ArrowUp":
                case "w":
                    this.lastKey = "UP PRESS";
                    break;
                case "ArrowDown":
                case "s":
                    this.lastKey = "DOWN PRESS";
                    break;
                case " ":
                    this.lastKey = "JUMP PRESS";
                    break;
                case "y":
                case "z":
                case "j":
                    this.lastKey = "ATTACK PRESS";
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch(e.key){
                case "ArrowLeft":
                case "a":
                    this.lastKey = "LEFT RELEASE";
                    break;
                case "ArrowRight":
                case "d":
                    this.lastKey = "RIGHT RELEASE";
                    break;
                case "ArrowUp":
                case "w":
                    this.lastKey = "UP RELEASE";
                    break;
                case "ArrowDown":
                case "s":
                    this.lastKey = "DOWN RELEASE";
                    break;
                case " ":
                    this.lastKey = "JUMP RELEASE";
                    break;
                case "y":
                case "z":
                case "j":
                    this.lastKey = "ATTACK RELEASE";
                    break;
            }
        });
    }

    get last(){
        return {key: this.lastKey};
    }
}