import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import VerifyUrl from './components/Admin/VerifyUrl';
import UpdateDeleteUrl from './components/Admin/UpdateDeleteUrl';
import Form from './components/User/Form';
import List from './components/User/List';
import Table from './components/User/Table';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Login} />
        <Route path="/signup" element={SignUp} />
        <Route path="/admin/verify" element={VerifyUrl} />
        <Route path="/admin/update-delete" element={UpdateDeleteUrl} />
        <Route path="/user/add" element={Form} />
        <Route path="/user/list" element={List} />
        <Route path="/user/table" element={Table} />
      </Routes>
    </Router>
  );
};

export default App;