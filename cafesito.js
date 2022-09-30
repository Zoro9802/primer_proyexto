const filefunction = require('./file.fns')
const readFile = filefunction.readFile
const saveonFile = filefunction.saveonFile

let path = 'cafetera.json'

function crearCafetera(elAgua, elCafe, elAzucar, laLeche) {
    let cafetera = {
        nivelAgua: elAgua,
        cafeRestante: elCafe,
        azucarRestante: elAzucar,
        lecheRestante: laLeche,
        Prepararuncafesito: function (azucar, agua, cafe, conLeche) {
            if (this.nivelAgua < agua) return 'no hay agua'
            if (this.cafeRestante < cafe) return 'no hay cafe'
            if (this.azucarRestante < azucar) return 'no hay azucar'
            if (conLeche && (this.lecheRestante < 1)) return 'no hay leche'
            function agregarAgua(totalAgua, agua) {
                console.log('hechando Agua')
                return totalAgua - agua
            }
            function agregarCafe(cafe) {
                this.cafeRestante = this.cafeRestante - cafe
                console.log('hechando cafe')
            }
            function agregarAzucar(azucar) {
                this.azucarRestante = this.azucarRestante - azucar
                console.log('hechando azucar')
            }
            function agregarLeche() {
                this.lecheRestante = this.lecheRestante - 1
                console.log('hechando leche')
            }
            this.nivelAgua = agregarAgua(this.nivelAgua, agua)
            agregarCafe(cafe)
            agregarAzucar(azucar)
            if (conLeche) agregarLeche()
            let siUseLeche = 0
            if (conLeche) siUseLeche = 1
            let restates = {
                niveldeAgua: cafetera.nivelAgua - agua,
                cafeRestante: cafetera.cafeRestante - cafe,
                azucarRestante: cafetera.azucarRestante - azucar,
                lecheRestante: cafetera.lecheRestante - siUseLeche
            }

            console.table(this)
            let indicador1 = 'sin'
            if (conLeche) indicador1 = 'con'
            let indicador2 = 'claro'
            if (cafe === 2) indicador2 = 'medio'
            if (cafe >= 3) indicador2 = 'oscuro'
            return 'cafesito ' + indicador2 + ' ' + indicador1 + ' leche y ' + azucar + ' porcion de azucar y ' + agua + ' ml de agua'

        }
    }
    return cafetera

}

let niveles = readFile(path)
let laCafetera = crearCafetera(niveles.nivelAgua, niveles.cafeRestante, niveles.azucarRestante, niveles.lecheRestante)
console.table(laCafetera);
saveonFile(path, laCafetera)

console.log(laCafetera.Prepararuncafesito(1, 350, 1, false))

// notificacion mediante email de los niveles al estar cerca y al estar empty
// como rellenar los recibe el item y recibe los valores que deseamos agregar

