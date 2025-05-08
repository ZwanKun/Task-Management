import express from 'express';
import moongose from 'mongoose';
import cors from 'cors';
import UserModel from './module/users.js'

const app = express()
app.use(express.json())

app.use(cors())

moongose.connect("mongodb://localhost:27017/users")


app.post('/', (req, res) => {
    const { name, password } = req.body;
  
    UserModel.findOne({ name: name })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json("You are connected");
          } else {
            res.json("password is incorrect");
          }
        } else {
          res.json("no user found");
        }
      })
      .catch(err => {
        console.error("Login error:", err);
        res.status(500).json("Internal server error");
      });
  });
  
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
