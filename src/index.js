import React from 'react';
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

//import custom.css
import './assets/css/custom.css';

//import Bootstrap into React
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//Import Routings.js
import Routings from './components/Routings.js'

import { Provider } from "react-redux";

import store from "./store";

const container =  document.getElementById('root')

const root = createRoot(container);
root.render(<Provider store={store}>
    <Routings />
    </Provider>);

