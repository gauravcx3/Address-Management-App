import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListAddressComponent from './components/ListAddressComponent';
import AddAddressComponent from './components/AddAddressComponent';
import AddUserComponent from './components/AddUserComponent';



function App() {
    return (
        <Router>
                <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<ListAddressComponent />} />
                        <Route path="/addresses" element={<ListAddressComponent />} />
                        <Route path="/add-address" element={<AddAddressComponent />} />
                        <Route path="/edit-address/:id" element={<AddAddressComponent />} />
                        <Route path="/users" element={<AddUserComponent />} />
                    </Routes>
                <FooterComponent />
        </Router>
    );
}

export default App;
