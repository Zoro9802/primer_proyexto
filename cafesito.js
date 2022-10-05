const { readFile, saveonFile } = require('./file.fns')

let path = 'cafetera.json'

function agregarAgua(totalAgua, agua) {
    console.log('hechando Agua')
    return totalAgua - agua
}
function agregarCafe(cafeRestante, cafe) {
    console.log('hechando cafe')
    return cafeRestante - cafe
}
function agregarAzucar(azucarRestante, azucar) {
    console.log('hechando azucar')
    return azucarRestante - azucar
}
function agregarLeche(lecheRestante, siUseLeche) {
    console.log('hechando leche')
    return lecheRestante - siUseLeche
}
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

            let siUseLeche = 0
            if (conLeche) siUseLeche = 1
            this.nivelAgua = agregarAgua(this.nivelAgua, agua)
            this.cafeRestante = agregarCafe(this.cafeRestante, cafe)
            this.azucarRestante = agregarAzucar(this.azucarRestante, azucar)
            this.lecheRestante = agregarLeche(this.lecheRestante, siUseLeche)

            let restates = {
                niveldeAgua: cafetera.nivelAgua,
                cafeRestante: cafetera.cafeRestante,
                azucarRestante: cafetera.azucarRestante,
                lecheRestante: cafetera.lecheRestante
            }

            console.table(restates)
            let indicador1 = 'sin'
            if (conLeche) indicador1 = 'con'
            let indicador2 = 'claro'
            if (cafe === 2) indicador2 = 'medio'
            if (cafe >= 3) indicador2 = 'oscuro'
            return 'cafesito ' + indicador2 + ' ' + indicador1 + ' leche y ' + azucar + ' porcion de azucar y ' + agua + ' ml de agua'

        },
        //notificaciones
        aviso: function (niveldeAgua) {
            if (niveldeAgua < 200) return 'queda poca agua'


        }


    }
    return cafetera

}

let niveles = readFile(path)
let laCafetera = crearCafetera(niveles.nivelAgua, niveles.cafeRestante, niveles.azucarRestante, niveles.lecheRestante)
console.table(laCafetera);
console.log(laCafetera.Prepararuncafesito(1, 250, 1, false))
console.log(laCafetera.aviso(niveles.nivelAgua))
saveonFile(path, laCafetera)



// notificacion mediante email de los niveles al estar cerca y al estar empty
// como rellenar los recibe el item y recibe los valores que deseamos agregar

