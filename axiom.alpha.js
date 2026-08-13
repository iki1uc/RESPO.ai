export function axiomAlpha(state, input) {
    return (state === "ai" || input.includes("→ai")) ? 1 : 0;
}

