export function OPTA_Move(frameDrift, stationDrift, heatSync, ncStab){

    // XI = IN‑Move (Eingang)
    const XI = {
        frame: frameDrift,
        station: stationDrift
    };

    // IX = OUT‑Move (Ausgang)
    const IX = {
        heat: heatSync,
        nc: ncStab
    };

    // x4 = Multi‑Move (4‑fach‑Vektor)
    const x4 = {
        frame: frameDrift,
        station: stationDrift,
        heat: heatSync,
        nc: ncStab
    };

    return { XI, IX, x4 };
}
