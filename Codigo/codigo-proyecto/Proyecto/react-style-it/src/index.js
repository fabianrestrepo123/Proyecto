import React from  'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import NavBarComponents from '../src/components/NavBarComponents'
import Texto from '../src/components/Texto'

const container = document.getElementById('app');

ReactDOM.render(<Texto />,container);