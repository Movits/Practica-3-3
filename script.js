const COLOR_POWER_RANGER = '\x1b[31m%s\x1b[0m';
class PowerRanger {
    #nombre = "def nombre";
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    atacaA(unEnemigo) {
        console.log(COLOR_POWER_RANGER, "Soy el Power Ranger " + this.getNombre());
        console.log(COLOR_POWER_RANGER, "Atacando a " + unEnemigo.getNombre());
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