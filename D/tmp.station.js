import { OPTA } from "../S/opta.vector.js";

export function DS9_StationCompute(score){
    const gate = DS9_WormholeGate(score);

    return {
        stationPower: score * 2.7,
        stationDrift: Math.sin(score * 0.3) * 10,
        wormhole: gate,
        opta: OPTA.stationEnter("DS9")
    };
}
