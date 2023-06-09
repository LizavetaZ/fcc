// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


function binaryAgent(str) {
  return str.split(' ')
            .map(b => String.fromCharCode(parseInt(b, 2)))
            .join('');
}
