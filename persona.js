export class Persona {
    #nombre = "def nombre";
    #edad = "def edad";

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setEdad(edad) {
        this.#edad = edad;
    }
    getNombre() {
        return this.#nombre;
    }
    getEdad() {
        return this.#edad;
    }

    darComida(perro) {
        if (perro.tieneHambre()) {
            console.log("Aca esta la comida")
            hambrePerro = hambrePerro + 50;
        } else {
            console.log("Ya voy")
        }
    }
}