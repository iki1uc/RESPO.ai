// =======================================
// OPTA.VECTOR · NC-Bewegungsvektor
// =======================================

export const OPTA = {

    // 1. Stage-Enter
    stageEnter(stage){
        return { move: "stage-enter", stage };
    },

    // 2. Stage-Exit
    stageExit(stage){
        return { move: "stage-exit", stage };
    },

    // 3. Orbit-Enter
    orbitEnter(layer){
        return { move: "orbit-enter", layer };
    },

    // 4. Orbit-Exit
    orbitExit(layer){
        return { move: "orbit-exit", layer };
    },

    // 5. Gate-Enter (Wurmloch)
    gateEnter(gate){
        return { move: "gate-enter", gate };
    },

    // 6. Gate-Exit
    gateExit(gate){
        return { move: "gate-exit", gate };
    },

    // 7. Station-Enter (DS9)
    stationEnter(station){
        return { move: "station-enter", station };
    },

    // 8. Station-Exit
    stationExit(station){
        return { move: "station-exit", station };
    }
};
