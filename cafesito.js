let cafetera = {
    nivelAgua: 1000,
    cafeRestante: 10,
    azucarRestante: 10,
    leche: 10,
    Prepararuncafesito: function (azucar, agua, cafe, conLeche) {
        if (this.nivelAgua < agua) return 'no hay agua'
        if (this.cafeRestante < cafe) return 'no hay cafe'
        if (this.azucarRestante < azucar) return 'no hay azucar'
        if (conLeche && (this.leche < 1)) return 'no hay leche'
        function agregarAgua(agua) {
            this.nivelAgua = this.nivelAgua - agua
            console.log('hechando Agua')
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
            this.leche = this.leche - 1
            console.log('hechando leche')
        }
        agregarAgua(agua)
        console.log('nivel de agua', this.nivelAgua - agua)
        agregarCafe(cafe)
        console.log('cafe restante', this.cafeRestante - cafe)
        agregarAzucar(azucar)
        console.log('azucar restante', this.azucarRestante - azucar)
        if (conLeche) agregarLeche()
        if (conLeche) console.log('leche restante', this.leche - 1)
        let indicador1 = 'sin'
        if (conLeche) indicador1 = 'con'
        return 'cafesito ' + indicador1 + ' leche y ' + azucar + ' porcion de azucar y ' + agua + ' ml de agua'

    }
}
let resultado = cafetera.Prepararuncafesito(1, 250, 1, false)
console.log(resultado)
