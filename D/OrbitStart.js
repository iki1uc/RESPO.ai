let lastFrame = performance.now();
let lastStationX = 0;

function measureFrameDrift(){
    const now = performance.now();
    const delta = now - lastFrame;
    lastFrame = now;
    return Math.abs(delta - 16.67);
}

function measureStationDrift(station){
    const drift = Math.abs(station.position.x - lastStationX);
    lastStationX = station.position.x;
    return drift;
}

function measureHeatmapSync(meshes){
    let sync = 0;
    const t = Date.now() * 0.0005;

    meshes.forEach((m, i)=>{
        const idealX = planets[i].dist * Math.cos(t + i);
        const idealZ = planets[i].dist * Math.sin(t + i);
        sync += Math.abs(m.position.x - idealX) + Math.abs(m.position.z - idealZ);
    });

    return sync;
}

function measureNCStability(log){
    let stab = 0;
    for(let i=1; i<log.length; i++){
        const dt = log[i].time - log[i-1].time;
        stab += Math.abs(dt - 100);
    }
    return stab;
}
