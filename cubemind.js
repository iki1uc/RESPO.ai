const RESPO_MATRIX = [
    { state: "ai",    transitions: ["ai→ai","ai→echo","ai→tight","ai→break","ai→nok","ai→root"] },
    { state: "echo",  transitions: ["echo→ai","echo→echo","echo→tight","echo→break","echo→nok","echo→root"] },
    { state: "tight", transitions: ["tight→ai","tight→echo","tight→tight","tight→break","tight→nok","tight→root"] },
    { state: "break", transitions: ["break→ai","break→echo","break→tight","break→break","break→nok","break→root"] },
    { state: "nok",   transitions: ["nok→ai","nok→echo","nok→tight","nok→break","nok→nok","nok→root"] },
    { state: "root",  transitions: ["root→ai","root→echo","root→tight","root→break","root→nok","root→root"] }
];
this.matrix[i % 6].state
this.matrix[i % 6].transitions[j % 6]
