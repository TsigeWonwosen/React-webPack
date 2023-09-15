
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import "./css/index.css";
import App from "./components/App";

const root = document.getElementById('root');
const rootInstance = ReactDOM.createRoot(root);
rootInstance.render(
    <StrictMode>
        <App/>
    </StrictMode>
);