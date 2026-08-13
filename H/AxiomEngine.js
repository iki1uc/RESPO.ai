export class AxiomEngine {

    constructor(matrix){
        this.matrix = matrix;
        this.tmp = [];
    }

    H(state, input){
        const v = (state.length + input.length) % 3;
        const i = input.includes("ai") ? 1 : 0;
        const r = v ^ i;
        this.tmp.push(r);
        return r;
    }

    B(state, input){
        const v = (state.length * input.length) % 5;
        const i = input.includes("root") ? 1 : 0;
        const r = v ^ i;
        this.tmp.push(r);
        return r;
    }

    T(state, input){
        const v = (state.length - input.length + 7) % 7;
        const i = input.includes("tight") ? 1 : 0;
        const r = v ^ i;
        this.tmp.push(r);
        return r;
    }

    decide(state, input){
        const h = this.H(state, input);
        const b = this.B(state, input);
        const t = this.T(state, input);

        return (h * 3) + (b * 5) + (t * 7);
    }
}

