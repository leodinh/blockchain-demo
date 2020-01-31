import React from "react";
import "./AddBlock.scss";
import * as actions from "../../store/actions/blockChain";
import Icon from "../../assets/icon/sprite.svg";
import MiningIcon from "../../assets/icon/mining.svg";
import { connect } from "react-redux";
function AddBlock(props) {
  const [data, setData] = React.useState("");
  const onChangeData = e => {
    setData(e.target.value);
  };

  return (
    <div className="add__block">
      <div className="title">
        <div className="title__label">
          <span>DATA</span>
        </div>
        <input
          type="text"
          className="title__input"
          placeholder="Add your data"
          onChange={event => onChangeData(event)}
        />
      </div>
      {props.isMining === true ? (
        <img src={MiningIcon} alt="mining" className="mining" />
      ) : (
        <button
          className="add"
          onClick={() =>
            props.addBlock(
              data,
              props.prevHash.hash,
              props.index,
              props.difficulty
            )
          }
        >
          <svg className="add-icon">
            <use xlinkHref={`${Icon}#icon-add`} />
          </svg>
          <span>Add New Block</span>
        </button>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    prevHash: state.blockChain[state.blockChain.length - 1],
    index: state.blockChain.length,
    difficulty: state.difficulty,
    isMining: state.isMining
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBlock: (data, prevHash, index, difficulty) =>
      dispatch(actions.addBlock(data, prevHash, index, difficulty))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddBlock);
