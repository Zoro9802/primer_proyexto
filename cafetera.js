function crearCafetera(elAgua, elCafe, elAzucar, laLeche) {
    console.log('cafetera')
    return {
        nivelAgua: elAgua,
        cafeRestante: elCafe,
        azucarRestamte: elAzucar,
        leche: laLeche,
    }
}
console.log(crearCafetera(1000, 10, 10, 10))
