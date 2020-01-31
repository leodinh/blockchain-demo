import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import Icon from "../../assets/icon/sprite.svg";
import { Utils } from "../../shared/utility";
import "./Block.scss";
import CSSTransition from "react-transition-group/CSSTransition";
function Block(props) {
  const [mounted, setMounted] = React.useState(false);
  const utils = new Utils();
  const dispatch = useDispatch();
  const miningBlocks = useSelector(state => {
    return state.revalidatingBlock;
  });
  const isProcessingBlock = miningBlocks.includes(props.block.index);
  const isProcessingPreviousBlock = Math.min.apply(Math, miningBlocks) < 0;
  const difficulty = useSelector(state => {
    return state.difficulty;
  });
  const modifyBlock = (event, index) => {
    dispatch(actions.modifyData(event.target.value, index));
  };
  const reValidDateBlock = (block, difficulty) => {
    dispatch(actions.revalidDate(block, difficulty));
  };
  const isValidBlock = block => {
    return utils.verifyBlock(block);
  };
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <React.Fragment>
      <CSSTransition
        in={!!props.block.index}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames="faded"
      >
        <svg className="narrow_down">
          <use xlinkHref={`${Icon}#icon-chevron-down`} />
        </svg>
      </CSSTransition>

      <CSSTransition in={mounted} timeout={500} classNames="faded">
        <div className="block">
          <div className="title">
            <div className="title__label">
              <span>DATA</span>
            </div>
            <input
              type="text"
              className="title__input"
              value={props.block.data}
              onChange={e => modifyBlock(e, props.block.index)}
            />
          </div>
          <div className="prehash">
            <p className="prehash__title">Previous Hash</p>
            <div
              className={`prehash__value
                ${
                  isValidBlock(props.block)
                    ? `prehash__value-right`
                    : `prehash__value-wrong`
                }
              `}
            >
              {props.block.previousHash}
            </div>
          </div>
          <div className="hash">
            <div className="hash__title">Hash</div>

            <div
              className={`hash__value ${
                isValidBlock(props.block)
                  ? `hash__value-right`
                  : `hash__value-wrong`
              }`}
            >
              <span>{props.block.hash}</span>
            </div>
          </div>
          <div className="detail">
            <div className="index">
              {props.block.index === 0
                ? "GENESIS BLOCK"
                : `BLOCK #${props.block.index}`}
            </div>
            <div className="timestamp">{props.block.timestamp}</div>
            {isValidBlock(props.block) ? (
              <div className="nonce">{props.block.nonce}</div>
            ) : (
              <button
                className="nonce fix"
                onClick={() => reValidDateBlock(props.block, difficulty)}
                disabled={isProcessingPreviousBlock || isProcessingBlock}
              >
                {isProcessingBlock ? (
                  "Mining..."
                ) : (
                  <svg className="fix_icon">
                    <use xlinkHref={`${Icon}#icon-wrench`} />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}

export default Block;
