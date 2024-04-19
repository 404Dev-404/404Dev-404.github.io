const canvas = document.getElementById("screensaver");
const ctx = canvas.getContext("2d");

class BouncyThing {
    constructor(size, xp, yp, xs, ys, color) {
        this.size = size;
        this.xp = xp;
        this.yp = yp;
        this.xs = xs;
        this.ys = ys;
        this.color = color;
    }

    update() {
        this.xp += this.xs;
        this.yp += this.ys;
    }

    draw() {
        ctx.lineWidth = 10;
        ctx.strokeStyle = this.color;
        ctx.rect(this.xp, this.yp, this.size + this.xp, this.size + this.yp);
    }
}

const b1 = new BouncyThing(50, 0, 0, 3, 3, '#ffff00');

function draw() {

    b1.update();
    b1.draw();

    console.log("it do it");

    requestAnimationFrame(draw);
    console.log("it do it 2: electric boogaloo");
}

window.addEventListener("load", draw);