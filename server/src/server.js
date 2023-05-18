const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const {postCommand}=require('./controllers/commands.controller');
require ('dotenv').config();

const PORT=process.env.PORT;
const MONGO_URl=process.env.MONGO_URl;
const app=express();
const urlencondedParser=bodyParser.urlencoded({extended: false});

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.post('/', urlencondedParser, postCommand);

mongoose.connect(MONGO_URl)
  .then((db)=>{
    console.log("MONGO DB connected successfully");
    app.listen(PORT, ()=>{
        console.log(`Listening on PORT ${PORT}`);
    })
    
  })
  .catch((err)=>{
    console.log("MONGO DB connection failed");
    console.log(err);
  })
