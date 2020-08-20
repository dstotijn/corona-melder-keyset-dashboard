const byteToHex = new Array(0xff);

for (let n = 0; n <= 0xff; ++n) {
  const hexOctet = n.toString(16).padStart(2, "0");
  byteToHex[n] = hexOctet;
}

export function uint8ArrayToHex(arr: Uint8Array, join: string): string {
  const hexOctets = new Array(arr.length);

  for (let i = 0; i < arr.length; ++i) {
    hexOctets[i] = byteToHex[arr[i]];
  }
  return hexOctets.join(join);
}

export default uint8ArrayToHex;
