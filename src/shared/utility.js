import { ethers } from 'ethers';
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};
export class Utils {
  setDifficulty(difficulty) {
    this.difficulty = difficulty;
  }

  hashBlock(blockToHash) {
    let stringifiedBl = JSON.stringify(blockToHash);
    let hexifiedBl = this.toHex(stringifiedBl);
    return ethers.utils.keccak256(hexifiedBl);
  }

  calculateNonce(block) {
    let clonedBlock = JSON.parse(JSON.stringify(block));
    let nonce = 0;
    clonedBlock['nonce'] = nonce;
    let hash = this.hashBlock(clonedBlock);

    while (
      !(hash.substring(2, this.difficulty + 2) === this.getLeadingZeros())
    ) {
      nonce++;
      clonedBlock['nonce'] = nonce;
      hash = this.hashBlock(clonedBlock);
    }
    return nonce;
  }

  verifyBlock(block) {
    var blockWithoutHash = {
      timestamp: block.timestamp,
      data: block.data,
      previousHash: block.previousHash,
      index: block.index,
      nonce: block.nonce,
    };

    var hash = this.hashBlock(blockWithoutHash);
    return hash === block.hash;
  }

  getLeadingZeros() {
    var result = '';
    for (let i = 0; i < this.difficulty; i++) {
      result = result.concat('0');
    }
    return result;
  }

  toHex(input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
      result += input.charCodeAt(i).toString(16);
    }
    return '0x' + result;
  }
}
