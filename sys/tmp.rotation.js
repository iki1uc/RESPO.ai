export function tmpRotate(tmp){
    return tmp.map((v, i) => (v * (i % 7 + 1)) ^ (v + 3));
}

