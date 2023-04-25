const zlib = require('zlib');

const data = 'Hello, world!';
console.log('Original data:', data);
const compressedData = zlib.deflateSync(data);
console.log('Compressed data:', compressedData);
const decompressedData = zlib.inflateSync(compressedData);
console.log('Decompressed data:', decompressedData.toString());