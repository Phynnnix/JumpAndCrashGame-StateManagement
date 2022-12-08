export function onscreenLog(ctx, player, input){
    ctx.font = "16px serif";
    ctx.fillStyle = "#000";
    ctx.fillText(player.stateName, 10, 32);
    ctx.fillText(input.last.key, 10, 64);
}

export const direction = {
    LEFT: -1,
    RIGHT: 1,
    UP: -1,
    DOWN: 1,
    NONE: 0
}