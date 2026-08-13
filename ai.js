class AxiomEngine {
    constructor(matrix) {
        this.matrix = matrix;      // 6×6 Übergänge
        this.tmp = [];             // Obfuskation Layer
        this.alpha = this.applyAlpha.bind(this);
        this.beta  = this.applyBeta.bind(this);
        this.gamma = this.applyGamma.bind(this);
    }

    // 1. Alpha – Absicht
    applyAlpha(state, input) {
        return (state === "ai" || input.includes("→ai")) ? 1 : 0;
    }

    // 2. Beta – Relevanz
    applyBeta(state, input) {
        return input.includes("root") ? 1 : 0;
    }

    // 3. Gamma – Lösung
    applyGamma(state, input) {
        return input.includes("tight") ? 1 : 0;
    }

    // Cube-Mind Entscheidung
    decide(state, input) {
        const a = this.alpha(state, input);
        const b = this.beta(state, input);
        const g = this.gamma(state, input);

        const score = (a * 3) + (b * 5) + (g * 7); // 360° Harmonie

        return score;
    }
}
