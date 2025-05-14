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

     if (!name || !password) {
              return err.status(400).json({
                  success: false,
                  message: "Please provide both name and password"
              })
            }     
  
    UserModel.findOne({ name: name })
      .then(user => {
        if (user) {
          if (user.password === password) {
              res.json({
                "success": true,
                "message": "Login Successfully"
              })
          } else {
            res.json({
              "success": false,
              "message": "Your password is incorrect. Please try again!"
          })}
        } else {
          res.json({
            "success": false, 
            "message": "account does not exist",
          });
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
        .then(user => res.status(201).json({
            success: true,
            message: "User registered successfully!",
            user: {
            name: user.name,
            email: user.email, 
        }}))
        .catch(err => {
            console.error("Error saving user:", err);
            if (err.code === 11000) {
                res.status(400).json({ message: "Email already exists" });
            } else {
                res.status(500).json({ message: "Error registering user", error: err });
            }
        });
});

app.listen(3001, () => {
    console.log("server is running")
})
