runCubeMind() {
    let result = 0;

    for (let i = 0; i < 9; i++) {          // 81-Schleife
        for (let j = 0; j < 9; j++) {
            const tmpScore = this.decide(
                this.matrix[i % 6].state,
                this.matrix[i % 6].transitions[j % 6]
            );
            this.tmp.push(tmpScore);
        }
    }

    // 756-Schleife
    for (let k = 0; k < 7; k++) {
        result += this.tmp[k * 108 % this.tmp.length];
    }

    return result;
}
