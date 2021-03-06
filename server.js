const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const addlink = require('./controllers/addlink');
const display = require('./controllers/display');
const deletelink = require('./controllers/deletelink');

const db = knex({
  client: 'pg',
  connection: {
    connectionString : process.env.DATABASE_URL,   
    ssl: true,
  }
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/signin', (req,res) => { signin.handleSignin(req,res,db) })
app.post('/register', (req,res) => { register.handleRegister(req,res,db) })
app.post('/addlink', (req,res) => { addlink.handleAddlink(req,res,db) })
app.post('/display', (req,res) => { display.handleDisplay(req,res,db) })
app.delete('/deletelink', (req,res) => { deletelink.handleDelete(req,res,db) })

// const PORT = process.env.PORT; //from note 28
// app.listen(PORT, () => {


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server has started Successfully");
});
