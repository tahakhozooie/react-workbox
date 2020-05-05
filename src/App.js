import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Workbox} from 'workbox-window';


function App() {

    if ('serviceWorker' in navigator) {
        const wb = new Workbox('/sw.js');

        wb.addEventListener("waiting", event => {
            window.location.reload();
            wb.messageSW({type: "SKIP_WAITING"});
        });
        wb.register();
    }



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
    </div>
  );
}

export default App;
