import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <button onClick={() => navigate("/add")}>Add User</button>
        </nav>
    );
};

export default Navbar;
