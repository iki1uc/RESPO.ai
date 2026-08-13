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
const RESPO_MATRIX = {
    ai:     ["ai→ai","ai→echo","ai→tight","ai→break","ai→nok","ai→root"],
    echo:   ["echo→ai","echo→echo","echo→tight","echo→break","echo→nok","echo→root"],
    tight:  ["tight→ai","tight→echo","tight→tight","tight→break","tight→nok","tight→root"],
    break:  ["break→ai","break→echo","break→tight","break→break","break→nok","break→root"],
    nok:    ["nok→ai","nok→echo","nok→tight","nok→break","nok→nok","nok→root"],
    root:   ["root→ai","root→echo","root→tight","root→break","root→nok","root→root"]
};
