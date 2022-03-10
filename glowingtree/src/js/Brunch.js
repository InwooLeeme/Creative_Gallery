export class Brunch{
    constructor(startX,startY,endX,endY, lineWidth){
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.color = 'black';
        this.lineWidth = lineWidth;
    }

    draw(ctx){
        ctx.beginPath();

        ctx.moveTo(this.startX, this.startY); // 선의 시작 위치 지정
        ctx.lineTo(this.endX, this.endY); // 시작 위치에서 입력된 위치까지 선 그리기

        if (this.lineWidth < 3) {
            ctx.lineWidth = 0.5;
          } else if (this.lineWidth < 7) {
            ctx.lineWidth = this.lineWidth * 0.7;
          } else if (this.lineWidth < 10) {
            ctx.lineWidth = this.lineWidth * 0.9;
          } else {
            ctx.lineWidth = this.lineWidth;
          }

        ctx.lineWidth = this.lineWidth; // 선 두께
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        ctx.stroke();
        ctx.closePath(); // 선 그리기 종료
    }
}