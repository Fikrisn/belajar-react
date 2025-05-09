import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);
//react tidak bisa merender array 

root.render(<App />);