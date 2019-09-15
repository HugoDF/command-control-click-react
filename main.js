import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

const CmdControlClick = ({onCmdControlClick, onClick}) => (
  <button
    type="button"
    onClick={e => {
      if (e.ctrlKey || e.metaKey) return onCmdControlClick(e);
      onClick(e);
    }}
  >
    Click me
  </button>
);

CmdControlClick.propTypes = {
  onCmdControlClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

const App = () => {
  const [clickType, setClickType] = useState('none');
  return (
    <>
      {clickType}
      <br />
      <CmdControlClick
        onCmdControlClick={() => setClickType('cmd-control-click')}
        onClick={() => setClickType('click')}
      />
      <button type="button" onClick={() => setClickType('none')}>
        Reset
      </button>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
