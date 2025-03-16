import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
            .then(() => setUsers(users.filter((user) => user.id !== id)))
            .catch((err) => console.error("Error deleting user:", err));
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} 
                        <button onClick={() => navigate(`/update/${user.id}`)}>Update</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
