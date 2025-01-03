export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        console.log('Position outside range');
    }
    const buffer = new ArrayBuffer(length);
    const int8 = new Int8Array(buffer, 0, length);
    int8.set([value], position);
    return new DataView(buffer);
}