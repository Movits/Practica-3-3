import { Perro } from "./perro.js";
import { Persona } from "./persona.js";

const a = new Persona();
const b = new Persona();
const c = new Perro();
const d = new Perro();

a.setNombre("a");
a.setEdad("1");
b.setNombre("b");
b.setEdad("2");
c.setNombre("c");
c.setColor("negro");
d.setNombre("d");
d.setColor("blanco");

const PersonaArray = [
    a,b
];

const PerroArray = [
    c,d
];

console.log();

console.log("Persona");
console.table(PersonaArray);

console.log();

console.log("Perro")
console.table(PerroArray);