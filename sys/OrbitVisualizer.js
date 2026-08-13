export function OrbitVisualizer(scene){

    const geo = new THREE.SphereGeometry(1.2, 32, 32);
    const mat = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe:true });
    const sphere = new THREE.Mesh(geo, mat);

    scene.add(sphere);

    return sphere;
}

