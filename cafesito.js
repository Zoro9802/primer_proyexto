function crearCafetera(elAgua, elCafe, elAzucar, laLeche) {

    let cafetera = {
        nivelAgua: elAgua,
        cafeRestante: elCafe,
        azucarRestante: elAzucar,
        leche: laLeche,
        Prepararuncafesito: function (azucar, agua, cafe, conLeche) {
            if (this.nivelAgua < agua) return 'no hay agua'
            if (this.cafeRestante < cafe) return 'no hay cafe'
            if (this.azucarRestante < azucar) return 'no hay azucar'
            if (conLeche && (this.leche < 1)) return 'no hay leche'
            function agregarAgua(agua) {
                console.log('hechando Agua')
            }
            function agregarCafe(cafe) {
                console.log('hechando cafe')
            }
            function agregarAzucar(azucar) {
                console.log('hechando azucar')
            }
            function agregarLeche() {
                console.log('hechando leche')
            }
            agregarAgua(agua)
            agregarCafe(cafe)
            agregarAzucar(azucar)
            if (conLeche) agregarLeche()
            let siUseLeche = 0
            if (conLeche) siUseLeche = 1
            let restates = {
                niveldeAgua: cafetera.nivelAgua - agua,
                cafeRestante: cafetera.cafeRestante - cafe,
                azucarRestante: cafetera.azucarRestante - azucar,
                lecheRestante: cafetera.leche - siUseLeche
            }

            console.table(restates)
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

console.table(crearCafetera(2500, 15, 15, 15));
let laCafetera = crearCafetera(2500, 15, 15, 15)
console.log(laCafetera.Prepararuncafesito(1, 350, 1, false))