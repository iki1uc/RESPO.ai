// API.ghost.js – echtes ghostReady Event
export function ghostReady(){
    const evt = new Event("ghostReady");
    window.dispatchEvent(evt);
}
