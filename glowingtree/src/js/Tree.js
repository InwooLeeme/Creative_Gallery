import { Brunch } from "./Brunch.js";

export class Tree{
    constructor(ctx, posX, posY){
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.depth = 11;
        this.brunches = []; // 가지를 담을 공간

        this.init();
    }

    init(){
        // -90도를 주어서 위로 자라게 하고, 초기 깊이를 0으로 설정함.
        this.createBrunch(this.posX, this.posY, -90, 0);
        this.draw(this.ctx);
    }

    createBrunch(startX, startY, angle, depth){
        if (depth === this.depth) return;
        
        // random 함수를 만들어 가지들의 길이를 랜덤으로 준다.
        // depth가 0 즉, 나무 기둥을 그릴땐 최소, 최대 길이를 달리한다.
        const len = depth === 0 ? this.random(10, 13) : this.random(0, 11);

        // 현재 depth의 역을 곱해주어 depth가 점점 늘어날 수록 길이가 가늘게 함
        const endX = startX + this.cos(angle) * len * (this.depth - depth);
        const endY = startY + this.sin(angle) * len * (this.depth - depth);

        this.brunches.push(
            new Brunch(startX, startY, endX, endY, this.depth - depth)
        );

        // 각도도 랜덤하게 부여
        this.createBrunch(endX, endY, angle - this.random(15, 23), depth + 1);
        this.createBrunch(endX, endY, angle + this.random(15, 23), depth + 1);
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