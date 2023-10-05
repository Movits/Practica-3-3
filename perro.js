export class Perro {
    #nombre = "def nombre";
    #hambre = false;

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setHambre(hambre) {
        this.#hambre = hambre;
    }
    getHambre() {
        return this.#hambre;
    }

    tieneHambre(perro) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    
        let hambrePerro = getRandomInt(100)

        if (hambrePerro <= 30) {
            console.log("au au, humano quiero comida");
            perro.setHambre(true);

        } else if (hambrePerro > 30 && hambrePerro < 60) {
            console.log("au au, en un rato tengo hambre");
            perro.setHambre(false);

        } else {
            console.log("au au, estoy lleno");
            perro.setHambre(false);
        }

        setInterval(() => {
            hambrePerro--
            console.log(hambrePerro);
        }, 1000);
    }

    /* alimentarseCon(comida) {
        hambrePerro += 50
    } */
    
}