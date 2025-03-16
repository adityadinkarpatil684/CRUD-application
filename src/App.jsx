import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import UserList from "./components/UserList";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/add" element={<AddUser />} />
                <Route path="/update/:id" element={<UpdateUser />} />
            </Routes>
        </Router>
    );
}

export default App;
