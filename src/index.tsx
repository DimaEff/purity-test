import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";

import "./i18n";
import App from './App';

ReactDOM.render(<Suspense fallback={<div>loader</div>}><App/></Suspense>,
    document.getElementById('root')
);