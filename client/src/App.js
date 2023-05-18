import './styles.css';
import React, {useState, useRef} from 'react';
import Header from './components/Header';
import Command from './components/Command';

function App() {
  const [commands, setCommands]=useState([]);
  const [commandNumber, setCommandNumber]=useState(0);
  function add_new_command(){
    setCommandNumber((preCommandNumber)=>(preCommandNumber+1));
    setCommands([...commands, <Command num={commandNumber} />])
  }

  return (
    <div className="App">
      <Header />  
      <div className='add-command'>
        <button className="add-command-button" onClick={add_new_command} >
        Add New Command
        </button>
        <button className="reset-page">
          Reset
        </button>
      </div>
      {commands}
    </div>
  );
}

export default App;
