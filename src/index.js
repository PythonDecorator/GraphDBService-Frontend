import {createRoot} from 'react-dom/client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import App from './App.js';
import {StrictMode} from "react";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <PerfectScrollbar>
            <App/>
        </PerfectScrollbar>
    </StrictMode>
);

reportWebVitals();
