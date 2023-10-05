export class Perro {
    #nombre = "def nombre";
    #hambre = false;
    #hambrePerro = 0;

    constructor(){
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        
        this.#hambrePerro = getRandomInt(100)

        console.log(this.#hambrePerro);
        this.tieneHambre(this);
    };

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

        if (this.#hambrePerro <= 30) {
            console.log("au au, humano quiero comida");
            perro.setHambre(true);

        } else if (this.#hambrePerro > 30 && this.#hambrePerro < 60) {
            console.log("au au, en un rato tengo hambre");
            perro.setHambre(false);

        } else {
            console.log("au au, estoy lleno");
            perro.setHambre(false);
        }

        setInterval(() => {
            /* this.tieneHambre(this); */
            this.#hambrePerro--
            console.log(this.#hambrePerro);
        }, 1000);
    }

    alimentarseCon() {
        hambrePerro += 50
    }

}