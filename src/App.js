import React, { useCallback } from 'react';
import './App.scss';
import Block from './component/Block/Block';
import Reset from './component/Reset/Reset';
import AddBlock from './component/AddBlock/AddBlock';
import Spinner from './assets/icon/loading.svg';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions/index';
function App(props) {
  const dispatch = useDispatch();
  const blockChain = useSelector(state => {
    return state.blockChain;
  });
  const difficulty = useSelector(state => {
    return state.difficulty;
  });
  const isMining = useSelector(state => {
    return state.isMining;
  });
  const onInitBlock = useCallback(
    () => dispatch(actions.initBlock('Welcome to Blockchain Demo', difficulty)),
    [difficulty, dispatch],
  );
  React.useEffect(() => {
    onInitBlock();
  }, [onInitBlock]);
  let content = '';
  if (isMining === true && blockChain.length === 0) {
    content = (
      <div className="main-content">
        <img src={Spinner} alt="spinner" className="spinner" />
        <p>Mining Genesis Block!!</p>
      </div>
    );
  } else {
    content = (
      <React.Fragment>
        <div className="main-content">
          <h1>Blockchain</h1>
          <div className="blockchain">
            {blockChain.map((block, index) => {
              return <Block block={block} key={index} />;
            })}
          </div>
          <AddBlock />
        </div>
        <div className="right-side">
          <Reset />
        </div>
      </React.Fragment>
    );
  }

  return <div className="App">{content}</div>;
}

export default App;
