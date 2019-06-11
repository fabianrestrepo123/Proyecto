import React from  'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import NavBarComponents from '../src/components/NavBarComponents'
import Texto from '../src/components/Texto'
import Layout from '../src/components/Layout'

const container = document.getElementById('app');

ReactDOM.render(<Layout />,container);