// 1) import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) get reference eto the div iwth id root
const el = document.getElementById('root');

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);


// 4) show component on the screen
root.render(<App />);
