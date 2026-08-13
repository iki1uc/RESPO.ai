import { DS9_Station } from "../D/tmp.station.js";

const animateStationLinear = DS9_Station(scene);

return function animateAll(){
    animatePlanets();
    animateStation();
    animateStationLinear();
};
import { OPTA } from "../S/opta.vector.js";

export function OrbitCompute(input){
    const engine = new AxiomEngine(RESPO_MATRIX);
    const score = engine.decide(input, "ds9-orbit");

    return {
        score,
        opta: OPTA.orbitEnter("O")
    };
}
