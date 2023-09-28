class PowerRanger {
    #nombre = "def nombre";
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    atacaA(unEnemigo) {
        console.log("Soy el Power Ranger " + this.getNombre());
        console.log("Atacando a " + unEnemigo.getNombre());
    }
}

class Enemigo {
    #nombre = "def nombre";
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
}

const unPowerRanger =  new PowerRanger();
const enemigo1 = new Enemigo();

enemigo1.setNombre("Zoor");
unPowerRanger.setNombre("Rojo");

unPowerRanger.atacaA(enemigo1);