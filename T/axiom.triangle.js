export class AxiomTriangle {

    constructor(){
        this.tmp = [];
    }

    height(score){
        const h = (score * 0.13) + Math.sin(score) * 3;
        this.tmp.push(h);
        return h;
    }

    width(score){
        const w = (score * 0.17) + Math.cos(score) * 5;
        this.tmp.push(w);
        return w;
    }

    depth(score){
        const d = (score * 0.19) + Math.tan(score % 3) * 2;
        this.tmp.push(d);
        return d;
    }

    triangle(score){
        const h = this.height(score);
        const w = this.width(score);
        const d = this.depth(score);

        return (h + w + d) * (this.tmp.length % 7 + 1);
    }
}

