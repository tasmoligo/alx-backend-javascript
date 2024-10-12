export default function hasValuesFromArray(set, array) {
    let contain = true;
    array.map((element) => {
        if (set.has(element) === false) {
            contain = false
        }
    });
    return contain;
}