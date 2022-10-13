import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
            <Route exact path="/employees_list" element={<EmployeesList/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/404" element={<Error/>}/>
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </Router>
        <Footer/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
