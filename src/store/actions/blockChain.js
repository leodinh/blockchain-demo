/*eslint import/no-webpack-loader-syntax: off*/
import * as actionTypes from "./actionTypes";

// eslint-disable-next-line
import BlockMiner from "worker-loader!../../shared/block_miner.js";
//const miner = new BlockMiner();
export const initBlock = (data, difficulty) => {
  return dispatch => {
    dispatch(addBlock(data, false, false, difficulty));
  };
};
export const addBlockStart = () => {
  return {
    type: actionTypes.ADD_BLOCK_START
  };
};
export const addBlock = (data, prevHash, index, difficulty) => {
  return dispatch => {
    dispatch(addBlockStart());
    let miner = new BlockMiner();
    miner.postMessage(
      JSON.stringify({
        timestamp: new Date().toLocaleString(),
        prevHash: prevHash || 0,
        data: data,
        index: index || 0,
        difficulty: difficulty
      })
    );
    miner.onmessage = event => {
      dispatch(addBlockSuccess(event.data));
      miner.terminate();
    };
  };
};
export const addBlockSuccess = block => {
  return {
    type: actionTypes.ADD_BLOCK_SUCCESS,
    block: block
  };
};
export const modifyData = (data, index) => {
  return {
    type: actionTypes.MODIFY_BLOCK,
    data: data,
    index: index
  };
};
export const revalidDate = (block, difficulty) => {
  return dispatch => {
    let miner = new BlockMiner();
    dispatch(revalidDateStart(block.index));
    miner.postMessage(
      JSON.stringify({
        timestamp: block.timestamp,
        prevHash: block.previousHash,
        data: block.data,
        index: block.index,
        difficulty: difficulty
      })
    );
    miner.onmessage = function(event) {
      dispatch(revalidDateSuccess(event.data));
      miner.terminate();
    };
  };
};
export const revalidDateStart = index => {
  return {
    type: actionTypes.REVALIDATE_BLOCK_START,
    index: index
  };
};
export const revalidDateSuccess = block => {
  return {
    type: actionTypes.REVALIDATE_BLOCK_SUCCESS,
    block: block
  };
};
export const changeDifficulty = level => {
  return {
    type: actionTypes.CHANGE_DIFFICULTY,
    level: level
  };
};
