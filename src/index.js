import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import "react-datetime/css/react-datetime.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route exact path="/employees_list" element={<EmployeeList/>}></Route>
            <Route path="/404" element={<Error/>}/>
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </Router>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
