import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const participants = [];
const messages = [{from:,to:,text:,type:,time:}];

app.post('/participants',(req,res) =>{
    {participants.name.includes(req.body.name) 
        ? 
        res.send("O nome do usuário já está em uso") 
        :
        momentOfArrival = Date.now();
        participants.push({...req.body, "lastStatus": momentOfArrival});
        res.send();
    }
})

app.get('/participants',(req,res) => {
    if(participants.name.includes(req.headers.user)){
        res.send(participants);        
    }else{
        res.status(400).send("Houve um erro, tente novamente");
    }
});

app.post('/messages',(req,res) =>{
    if(participants.name.includes(req.headers.user)){
        res.send(messages);        
    }else{
        res.status(400).send("Houve um erro, tente novamente");
    }
})

app.get('/messages',(req,res) => {
    if(participants.name.includes(req.headers.user)){
        res.send(messages);        
    }else{
        res.status(400).send("Houve um erro, tente novamente");
    }
});

app.post('/status',(req,res) =>{
    participants.push(req.body);
    res.send();
})

app.listen(4000);