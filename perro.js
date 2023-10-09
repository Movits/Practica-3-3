export class Perro {
    #nombre = "def nombre";
    #hambre = false;
    #hambrePerro = 0;

    constructor(){
<<<<<<< HEAD
        this.#hambrePerro = this.getRandomInt(100)
        console.log(this.#hambrePerro);
        this.tieneHambre(this);

        setInterval(() => {
            this.#hambrePerro--;
            console.log(this.#hambrePerro);
            this.tieneHambre();
        }, 1000);
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

=======
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        
        this.#hambrePerro = getRandomInt(100)

        console.log(this.#hambrePerro);
        this.tieneHambre(this);
    };

>>>>>>> df5735cdfc7ae57ab352dc5fc24140f49d2a40f2
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
    
<<<<<<< HEAD
    tieneHambre() {

        if (this.#hambrePerro <= 30) {
            console.log("au au, humano quiero comida");
            this.setHambre(true);

        } else if (this.#hambrePerro > 30 && this.#hambrePerro < 60) {
            console.log("au au, en un rato tengo hambre");
            this.setHambre(false);

        } else {
            console.log("au au, estoy lleno");
            this.setHambre(false);
        }
    }

    alimentarseCon() {
        this.#hambrePerro += 50;
    }
=======
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

>>>>>>> df5735cdfc7ae57ab352dc5fc24140f49d2a40f2
}