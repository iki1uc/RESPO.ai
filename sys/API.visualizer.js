// API.visualizer.js – echte OrbitHeatmap (Sonnensystem)

export function API_OrbitHeatmap(scene){

    // Sonne
    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(1.4, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xffcc00 })
    );
    scene.add(sun);

    // Planeten (H, B, T)
    const planets = [
        { color: 0xff4400, dist: 2.5 }, // H = Merkur
        { color: 0x00aaff, dist: 3.5 }, // B = Venus
        { color: 0x00ff88, dist: 4.5 }  // T = Erde
    ];

    const meshes = planets.map(p => {
        const m = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.MeshBasicMaterial({ color: p.color })
        );
        m.position.x = p.dist;
        scene.add(m);
        return m;
    });

    return function animatePlanets(){
        meshes.forEach((m, i)=>{
            const t = Date.now() * 0.0005;
            m.position.x = planets[i].dist * Math.cos(t + i);
            m.position.z = planets[i].dist * Math.sin(t + i);
        });
    };
}
