import { Brunch } from "./Brunch.js";

export class Tree{
    constructor(ctx, posX, posY){
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.depth = 5;
        this.brunches = []; // 가지를 담을 공간

        this.init();
    }

    init(){
        // -90도를 주어서 위로 자라게 하고, 초기 깊이를 0으로 설정함.
        this.createBrunch(this.posX, this.posY, -90, 0);
        this.draw(this.ctx);
    }

    createBrunch(startX, startY, angle, depth){
        if(this.depth === depth) return;
        // 가지 생성
        const len = 100;
        const endX = startX + len * this.cos(angle);
        const endY = startY + len * this.sin(angle);

        this.brunches.push(new Brunch(startX, startY, endX, endY));

        // recursive
        this.createBrunch(endX,endY, angle - 30, depth + 1);
        this.createBrunch(endX,endY, angle + 30, depth + 1);
    }
    draw(ctx){
        // 가지를 그린다
        for(let i = 0; i < this.brunches.length; i++){
            this.brunches[i].draw(ctx);
        }
    }
    /* 각도 관련 삼각함수들 */
    cos(angle){
        return Math.cos(this.degToRad(angle));
    }
    sin(angle){
        return Math.sin(this.degToRad(angle));
    }
    degToRad(angle){
        return (angle / 180.0) * Math.PI;
    }
    // 각도 랜덤 함수
    random(min, max){
        return min + Math.floor(Math.random() * (max - min + 1));
    }
}