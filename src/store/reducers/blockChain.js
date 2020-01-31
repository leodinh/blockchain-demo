import * as actionTypes from "../actions/actionTypes";
import { updateObject, Utils } from "../../shared/utility";
const initialState = {
  blockChain: [],
  isMining: false,
  difficulty: 4,
  revalidatingBlock: []
};
const addBlockStart = (state, action) => {
  return updateObject(state, { isMining: true });
};
const addBlockSuccess = (state, action) => {
  return updateObject(state, {
    blockChain: [...state.blockChain, action.block],
    isMining: false
  });
};
const modifyData = (state, action) => {
  let blockChain = [...state.blockChain];
  let modifiedBlock = blockChain[action.index];
  modifiedBlock["data"] = action.data;
  let utils = new Utils();
  let newHashValue = utils.hashBlock(modifiedBlock);
  blockChain[action.index]["hash"] = newHashValue;
  for (let i = action.index + 1; i < blockChain.length; i++) {
    blockChain[i].previousHash = blockChain[i - 1].hash;
    blockChain[i].hash = utils.hashBlock(blockChain[i]);
  }
  return updateObject(state, {
    blockChain: blockChain
  });
};
const revalidateBlockStart = (state, action) => {
  return updateObject(state, {
    revalidatingBlock: [...state.revalidatingBlock, action.index]
  });
};
const revalidateBlockSuccess = (state, action) => {
  const newBlockChain = [...state.blockChain];
  newBlockChain.splice(action.block.index, 1, action.block);

  for (let i = action.block.index; i < newBlockChain.length; i++) {
    if (i > 0) {
      newBlockChain[i].previousHash = newBlockChain[i - 1].hash;
    }
  }
  const newRevalidatingBlock = state.revalidatingBlock.filter(
    index => index !== action.block.index
  );

  return updateObject(state, {
    blockChain: newBlockChain,
    revalidatingBlock: newRevalidatingBlock
  });
};
const changeDifficulty = (state, action) => {
  return updateObject(state, {
    difficulty: action.level,
    blockChain: []
  });
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BLOCK_START:
      return addBlockStart(state, action);
    case actionTypes.ADD_BLOCK_SUCCESS:
      return addBlockSuccess(state, action);
    case actionTypes.MODIFY_BLOCK:
      return modifyData(state, action);
    case actionTypes.REVALIDATE_BLOCK_START:
      return revalidateBlockStart(state, action);
    case actionTypes.REVALIDATE_BLOCK_SUCCESS:
      return revalidateBlockSuccess(state, action);
    case actionTypes.CHANGE_DIFFICULTY:
      return changeDifficulty(state, action);
    default:
      return state;
  }
};
