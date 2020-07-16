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
	app.listen(process.env.PORT || 3000, () => {
	console.log('app is running on port 3000');
	// console.log(`Server is listening on port ${PORT}`);
	// console.log(process.env);
	// console.log("PORT: ", PORT);	
});