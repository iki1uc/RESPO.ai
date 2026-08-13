import { RESPO_MATRIX } from "../B/RESPO_MATRIX.js";
import { AxiomTriangle } from "../T/axiom.triangle.js";
import { continuum } from "../T/würfel.continuum.js";

export function WuerfelWelt(score){

    const tri = new AxiomTriangle();
    const triScore = tri.triangle(score);

    const cont = continuum(triScore);

    return {
        matrix: RESPO_MATRIX,
        triangle: triScore,
        continuum: cont
    };
}

