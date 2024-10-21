export function primeraMayus(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function mayusArray(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}
