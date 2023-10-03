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

    tieneHambre() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    
        let hambrePerro = getRandomInt(100)
        let hambreToF = false

        if (hambrePerro <= 30) {
            console.log("au au, humano quiero comida")
            hambreToF = true
        } else if (hambrePerro > 30 && hambrePerro < 60) {
            console.log("au au, en un rato tengo hambre")
            hambreToF = false
        } else {
            console.log("au au, estoy lleno")
            hambreToF = false
        }

        setInterval(() => {
            hambrePerro--
        }, 1000);
    }
}