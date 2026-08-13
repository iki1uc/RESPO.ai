export function tmpRotate(tmp){
    return tmp.map((v, i) => (v * (i % 7 + 1)) ^ (v + 3));
}

export function sysRotate(value){
    return (value * 3) ^ (value % 11);
}
