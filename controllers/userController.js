import db from "../config/db.js";

export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) res.status(500).json({ error: "Failed to fetch users" });
        else res.json(results);
    });
};

export const addUser = (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err) => {
        if (err) res.status(500).json({ error: "Failed to add user" });
        else res.status(201).json({ message: "User added successfully" });
    });
};

export const updateUser = (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;
    db.query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, id], (err) => {
        if (err) res.status(500).json({ error: "Failed to update user" });
        else res.json({ message: "User updated successfully" });
    });
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id=?", [id], (err) => {
        if (err) res.status(500).json({ error: "Failed to delete user" });
        else res.json({ message: "User deleted successfully" });
    });
};

export const getUserById = (req, res) => {
    const { id } = req.params;

    // Query to fetch the user by ID
    const query = "SELECT * FROM users WHERE id = ?";

    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch user" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(results[0]);  // Return the found user
    });
};
