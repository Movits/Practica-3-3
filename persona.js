export class Persona {
    #nombre = "def nombre";

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }

    darComida(perro) {
        if (perro.setHambre(true)) {
            console.log("Aca esta la comida")
            perro.getHambre();
        } else {
            console.log("Ya voy")
        }
    }
}