// API.system.js – automatische Modulprüfung

export function API_CheckModules(mods){
    const out = {};
    mods.forEach(m=>{
        out[m] = (typeof window[m] !== "undefined") ? "OK" : "FEHLT";
    });
    return out;
}
