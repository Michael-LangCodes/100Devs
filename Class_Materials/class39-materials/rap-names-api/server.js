const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(Cors())

const rappers = {
'21 savage':{
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
'chance the rapper':{
    'age': 29,
    'birthName': 'Chancellor Bennett',
    'birthLocation': 'Chicago, Illinois'
    },
'unknown':{
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (req,res)=>{
    const rapperName = req.params.name.toLocaleLowerCase()
    console.log(rappers[rapperName])
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Beetta Go Catch It!`)
})