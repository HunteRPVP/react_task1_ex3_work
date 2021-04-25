import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { DatePicker, message } from 'antd';
import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
      </div>
    </div>
  );
}

export default App;
