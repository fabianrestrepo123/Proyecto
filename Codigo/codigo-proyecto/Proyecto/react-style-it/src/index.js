import React from  'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import NavBarComponents from '../src/components/NavBarComponents'

const container = document.getElementById('app');

ReactDOM.render(<NavBarComponents />,container);