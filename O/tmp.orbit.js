import { DS9_Station } from "../D/tmp.station.js";

const animateStationLinear = DS9_Station(scene);

return function animateAll(){
    animatePlanets();
    animateStation();
    animateStationLinear();
};
