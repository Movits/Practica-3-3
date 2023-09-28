class PowerRanger {
    atacaA(unEnemigo) {
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
unPowerRanger.atacaA(enemigo1);