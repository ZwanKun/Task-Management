import express from 'express';
import moongose from 'mongoose';
import cors from 'cors';
import UserModel from './module/users.js'

const app = express()
app.use(express.json())

app.use(cors())

moongose.connect("mongodb://localhost:27017/users")

app.post('/register', (req, res) => {

    console.log("Received data:", req.body);

    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => {
            console.error("Error saving user:", err);  // Log the error to the console
            if (err.code === 11000) {
                // MongoDB unique constraint violation
                res.status(400).json({ message: "Email already exists" });
            } else {
                res.status(500).json({ message: "Error registering user", error: err });
            }
        });
});

app.listen(3001, () => {
    console.log("server is running")
})
