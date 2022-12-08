import State from "./state.js";

export const playerStateIds = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    WALKING_LEFT: 2,
    WALKING_RIGHT: 3,
    JUMP_INTRO_LEFT: 4,
    JUMP_INTRO_RIGHT: 5,
    JUMP_UP_LEFT: 6,
    JUMP_UP_RIGHT: 7,
    JUMP_DOWN_LEFT: 8,
    JUMP_DOWN_RIGHT: 9,
    CRASH_LEFT: 10,
    CRASH_RIGHT: 11,
    LIE_LEFT: 12,
    LIE_RIGHT: 13,
    GET_UP_LEFT: 14,
    GET_UP_RIGHT: 15,
    ATTACK_LEFT: 16,
    ATTACK_RIGHT: 17
}

const playerStateAnimations = {
    STANDING_LEFT: 17,
    STANDING_RIGHT: 16,
    WALKING_LEFT: 15,
    WALKING_RIGHT: 14,
    JUMP_INTRO_LEFT: 13,
    JUMP_INTRO_RIGHT: 12,
    JUMP_UP_LEFT: 11,
    JUMP_UP_RIGHT: 10,
    JUMP_DOWN_LEFT: 9,
    JUMP_DOWN_RIGHT: 8,
    CRASH_LEFT: 7,
    CRASH_RIGHT: 6,
    LIE_LEFT: 5,
    LIE_RIGHT: 4,
    GET_UP_LEFT: 3,
    GET_UP_RIGHT: 2,
    ATTACK_LEFT: 1,
    ATTACK_RIGHT: 0,
}



export class PlayerStandingLeft extends State{
    constructor(){
        super("Player Standing Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.STANDING_LEFT);
        manager.movement.stopWalk();
    }

    handleInput(input, state, manager){
        switch(input){
            case "RIGHT PRESS":
                state.set(playerStateIds.STANDING_RIGHT);
                break;
            case "LEFT PRESS":
                state.set(playerStateIds.WALKING_LEFT);
                break;
            case "JUMP PRESS":
                state.set(playerStateIds.JUMP_INTRO_LEFT);
                break;
            case "ATTACK PRESS":
                state.set(playerStateIds.ATTACK_LEFT);
                break;
        }
    }
}

export class PlayerStandingRight extends State{
    constructor(){
        super("Player Standing Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.STANDING_RIGHT);
        manager.movement.stopWalk();
    }

    handleInput(input, state, manager){
        switch(input){
            case "LEFT PRESS":
                state.set(playerStateIds.STANDING_LEFT);
                break;
            case "RIGHT PRESS":
                state.set(playerStateIds.WALKING_RIGHT);
                break;
            case "JUMP PRESS":
                state.set(playerStateIds.JUMP_INTRO_RIGHT);
                break;
            case "ATTACK PRESS":
                state.set(playerStateIds.ATTACK_RIGHT);
                break;
        }
    }
}

export class PlayerWalkingLeft extends State{
    constructor(){
        super("Player Walking Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.WALKING_LEFT);
        manager.movement.walk(true);
    }

    handleInput(input, state, manager){
        switch(input){
            case "RIGHT PRESS":
                state.set(playerStateIds.WALKING_RIGHT);
                break;
            case "LEFT RELEASE":
                state.set(playerStateIds.STANDING_LEFT);
                break;
            case "JUMP PRESS":
                state.set(playerStateIds.JUMP_INTRO_LEFT);
                break;
            case "ATTACK PRESS":
                state.set(playerStateIds.ATTACK_LEFT);
                break;
        }
    }
}

export class PlayerWalkingRight extends State{
    constructor(){
        super("Player Walking Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.WALKING_RIGHT);
        manager.movement.walk(false);
    }

    handleInput(input, state, manager){
        switch(input){
            case "LEFT PRESS":
                state.set(playerStateIds.WALKING_LEFT);
                break;
            case "RIGHT RELEASE":
                state.set(playerStateIds.STANDING_RIGHT);
                break;
            case "JUMP PRESS":
                state.set(playerStateIds.JUMP_INTRO_RIGHT);
                break;
            case "ATTACK PRESS":
                state.set(playerStateIds.ATTACK_RIGHT);
                break;
        }
    }
}

export class PlayerJumpIntroLeft extends State{
    constructor(){
        super("Player Jumping Intro Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.JUMP_INTRO_LEFT);
    }

    handleInput(input, state, manager){
        if(manager.sprite.isAtAnimationEnd()){
            state.set(playerStateIds.JUMP_UP_LEFT);
        }
    }
}

export class PlayerJumpIntroRight extends State{
    constructor(){
        super("Player Jumping Intro Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.JUMP_INTRO_RIGHT);
    }

    handleInput(input, state, manager){
        if(manager.sprite.isAtAnimationEnd()){
            state.set(playerStateIds.JUMP_UP_RIGHT);
        }
    }
}

export class PlayerJumpUpLeft extends State{
    constructor(){
        super("Player Jumping Up Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.JUMP_UP_LEFT);
        manager.movement.stopWalk();
        manager.movement.jump();
    }

    handleInput(input, state, manager){
        if(manager.movement.isAtPeak()){
            state.set(playerStateIds.JUMP_DOWN_LEFT);
        }
    }
}

export class PlayerJumpUpRight extends State{
    constructor(){
        super("Player Jumping Up Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.JUMP_UP_RIGHT);
        manager.movement.stopWalk();
        manager.movement.jump();
    }

    handleInput(input, state, manager){
        if(manager.movement.isAtPeak()){
            state.set(playerStateIds.JUMP_DOWN_RIGHT);
        }
    }
}

export class PlayerJumpDownLeft extends State{
    constructor(){
        super("Player Jumping Down Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.JUMP_DOWN_LEFT);
    }

    handleInput(input, state, manager){
        if(manager.movement.isOnGround(manager.size)){
            state.set(playerStateIds.CRASH_LEFT);
        }
    }
}

export class PlayerJumpDownRight extends State{
    constructor(){
        super("Player Jumping Down Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.JUMP_DOWN_RIGHT);
    }

    handleInput(input, state, manager){
        if(manager.movement.isOnGround(manager.size)){
            state.set(playerStateIds.CRASH_RIGHT);
        }
    }
}

export class PlayerCrashLeft extends State{
    constructor(){
        super("Player Crashing Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.CRASH_LEFT);
    }

    handleInput(input, state, manager){
        if(manager.sprite.isAtAnimationEnd()){
            state.set(playerStateIds.LIE_RIGHT);
        }
    }
}

export class PlayerCrashRight extends State{
    constructor(){
        super("Player Crashing Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.CRASH_RIGHT);
    }

    handleInput(input, state, manager){
        if(manager.sprite.isAtAnimationEnd()){
            state.set(playerStateIds.LIE_LEFT);
        }
    }
}

export class PlayerLieLeft extends State{
    constructor(){
        super("Player Lie Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.LIE_LEFT);
    }

    handleInput(input, state, manager){
        switch(input){
            case "UP PRESS":
                state.set(playerStateIds.GET_UP_LEFT);
                break;
        }
    }
}

export class PlayerLieRight extends State{
    constructor(){
        super("Player Lie Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.LIE_RIGHT);
    }

    handleInput(input, state, manager){
        switch(input){
            case "UP PRESS":
                state.set(playerStateIds.GET_UP_RIGHT);
                break;
        }
    }
}

export class PlayerGetUpLeft extends State{
    constructor(){
        super("Player Getting Up Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.GET_UP_LEFT);
    }

    handleInput(input, state, manager){
        if(manager.sprite.isAtAnimationEnd()){
            state.set(playerStateIds.STANDING_LEFT);
        }
    }
}

export class PlayerGetUpRight extends State{
    constructor(){
        super("Player Getting Up Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.GET_UP_RIGHT);
    }

    handleInput(input, state, manager){
        if(manager.sprite.isAtAnimationEnd()){
            state.set(playerStateIds.STANDING_RIGHT);
        }
    }
}

export class PlayerAttackLeft extends State{
    constructor(){
        super("Player Attack Left");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.ATTACK_LEFT);
    }

    handleInput(input, state, manager){
        if(manager.sprite.isAtAnimationEnd()){
            switch(input){
                case "LEFT PRESS":
                    state.set(playerStateIds.WALKING_LEFT);
                    break;
                case "RIGHT PRESS":
                    state.set(playerStateIds.WALKING_RIGHT);
                    break;
                default:
                    state.set(playerStateIds.STANDING_LEFT);
            }
        }
    }
}

export class PlayerAttackRight extends State{
    constructor(){
        super("Player Attack Right");
    }

    enter(manager){
        manager.sprite.setAnimation(playerStateAnimations.ATTACK_RIGHT);
    }

    handleInput(input, state, manager){
        if(manager.sprite.isAtAnimationEnd()){
            switch(input){
                case "LEFT PRESS":
                    state.set(playerStateIds.WALKING_LEFT);
                    break;
                case "RIGHT PRESS":
                    state.set(playerStateIds.WALKING_RIGHT);
                    break;
                default:
                    state.set(playerStateIds.STANDING_RIGHT);
            }
        }
    }
}


export const playerStates = [
    new PlayerStandingLeft(), new PlayerStandingRight(), 
    new PlayerWalkingLeft(), new PlayerWalkingRight(),
    new PlayerJumpIntroLeft(), new PlayerJumpIntroRight(),
    new PlayerJumpUpLeft(), new PlayerJumpUpRight(),
    new PlayerJumpDownLeft(), new PlayerJumpDownRight(),
    new PlayerCrashLeft(), new PlayerCrashRight(),
    new PlayerLieLeft(), new PlayerLieRight(),
    new PlayerGetUpLeft(), new PlayerGetUpRight(),
    new PlayerAttackLeft(), new PlayerAttackRight()

];