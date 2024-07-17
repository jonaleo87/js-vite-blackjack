/**
 * Esta funcion extrae el valor de la carta
 * @param {String} carta Es la carta extraida del deck
 * @returns {Number} Retorna el valor numerico de la carta
 */

export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}