export class Perro {
    #nombre = "def nombre";
    #color = "def color";

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setColor(color) {
        this.#color = color;
    }
    getNombre() {
        return this.#nombre;
    }
    getColor() {
        return this.#color;
    }
}