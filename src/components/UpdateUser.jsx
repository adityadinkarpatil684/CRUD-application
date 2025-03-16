import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setName(data.name);
                setEmail(data.email);
            })
            .catch((err) => console.error("Error fetching user:", err));
    }, [id]);

    const handleUpdate = () => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        })
        .then(() => navigate("/"))
        .catch((err) => console.error("Error updating user:", err));
    };

    return (
        <div>
            <h1>Update User</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateUser;
