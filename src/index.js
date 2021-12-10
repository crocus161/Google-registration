import './index.scss';
import React from 'react';
import App from './app/App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DataProvider from './context/DataContext';

ReactDOM.render(
    <BrowserRouter>
        <DataProvider>
            <App />
        </DataProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
