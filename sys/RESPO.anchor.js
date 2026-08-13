// RESPO.ai · System-Anker

import { AxiomEngine } from "../H/AxiomEngine.js";
import { RESPO_MATRIX } from "../B/RESPO_MATRIX.js";
import { CubeMind } from "../B/cubemind.js";
import { AxiomTriangle } from "../T/axiom.triangle.js";
import { RESPO_CHANNEL } from "../T/axiom.channel.js";

export function RESPO(){
    const engine = new AxiomEngine(RESPO_MATRIX);
    const cube = new CubeMind(engine);

    const cubeScore = cube.runCubeMind();

    const tri = new AxiomTriangle();
    const triScore = tri.triangle(cubeScore);

    return {
        cubeScore,
        triScore,
        HY: RESPO_CHANNEL.HY(triScore),
        PE: RESPO_CHANNEL.PE(triScore),
        PER: RESPO_CHANNEL.PER(triScore)
    };
}
