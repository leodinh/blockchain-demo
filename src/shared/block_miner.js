import { Utils } from './utility.js';

let utils = new Utils();
let timestamp,
  prevHash,
  data,
  index = null;

onmessage = function(e) {
  var obj = JSON.parse(e.data);
  timestamp = obj.timestamp;
  prevHash = obj.prevHash;
  data = obj.data;
  index = obj.index;
  utils.setDifficulty(obj.difficulty);

  createBlock();
};

function createBlock() {
  var returnBl = {
    timestamp: timestamp,
    data: data,
    previousHash: prevHash,
    index: index,
  };

  var nonce = utils.calculateNonce(returnBl);
  returnBl['nonce'] = nonce;
  var hash = utils.hashBlock(returnBl);
  returnBl['hash'] = hash;
  postMessage(returnBl);
}
