export default class StateManager{
    constructor(stateArray, initialState, manager){
        this.states = stateArray;
        this.current = stateArray[initialState];
        this.manager = manager;
    }

    currentName(){
        return this.current.getName();
    }

    set(stateId){
        this.current = this.states[stateId];
        this.current.enter(this.manager);
    }

    handleInput(input){
        this.current.handleInput(input, this, this.manager);
    }
}