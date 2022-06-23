import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {MoralisProvider} from 'react-moralis';
ReactDOM.render(
  <BrowserRouter>
      <MoralisProvider serverUrl="https://opzbhtgyqhgb.usemoralis.com:2053/server" appId="oFjy2Pv22RMga18w4jCbNDqPjOxW4XITHF0Cstjh">
    <App />
</MoralisProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
