// =======================================
// O/tmp.orbit.js · Deep Space Orbit
// =======================================

import { AxiomEngine } from "../H/AxiomEngine.js";
import { RESPO_MATRIX } from "../B/RESPO_MATRIX.js";
import { AxiomTriangle } from "../T/axiom.triangle.js";
import { continuum } from "../T/würfel.continuum.js";
import { allxall } from "../T/würfel.allxall.js";

import { DS9_Station } from "../D/tmp.station.js";
import { DS9_WormholeGate } from "../D/tmp.station.js";

import { OPTA } from "../S/opta.vector.js";

// =======================================
// ORBIT START
// =======================================

export function OrbitStart(scene){

    const animatePlanets = API_OrbitHeatmap(scene);
    const animateStationLinear = DS9_Station(scene);

    return function animateAll(){
        animatePlanets();
        animateStationLinear();
    };
}

// =======================================
// ORBIT COMPUTE
// =======================================

export function OrbitCompute(input){

    const engine = new AxiomEngine(RESPO_MATRIX);
    const score = engine.decide(input, "ds9-orbit");

    const tri = new AxiomTriangle();
    const triScore = tri.triangle(score);

    const cont = continuum(triScore);
    const ax = allxall(score, triScore, cont);

    const gate = DS9_WormholeGate(score);

    return {
        score,
        triScore,
        cont,
        ax,
        gate,
        opta: OPTA.orbitEnter("O")
    };
}
