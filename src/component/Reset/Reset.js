import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Reset.scss';
import * as actions from '../../store/actions/index';
function Reset() {
  const dispatch = useDispatch();
  const changeDifficulty = level => {
    if (difficulty !== diffValue) {
      dispatch(actions.changeDifficulty(level));
    }
  };
  const difficulty = useSelector(state => {
    return state.difficulty;
  });
  const [diffValue, setDiffValue] = useState(difficulty);
  const decreaseDiffValue = () => {
    if (diffValue > 1) {
      setDiffValue(diffValue - 1);
    }
  };
  const increaseDiffValue = () => {
    setDiffValue(diffValue + 1);
  };
  return (
    <div className="reset">
      <div className="difficulty">
        Current Difficulty Level:
        <span>{difficulty}</span>
      </div>
      <div className="configure__diff">
        <button className="configure__diff-incre" onClick={increaseDiffValue}>
          +
        </button>
        <span>{diffValue}</span>
        <button className="configure__diff-decre" onClick={decreaseDiffValue}>
          -
        </button>
      </div>
      <button
        className="reset-btn btn"
        onClick={() => changeDifficulty(diffValue)}
      >
        Change Difficulty
      </button>
    </div>
  );
}

export default Reset;
