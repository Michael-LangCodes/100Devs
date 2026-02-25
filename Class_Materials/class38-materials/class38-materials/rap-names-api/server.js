const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 Savage':{
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'Chance the Rapper':{
    'age': 29,
    'birthName': 'Chancellor Bennett',
    'birthLocation': 'Chicago, Illinois'
    },
    'Dylan':{
    'age': 29,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rapperName = request.params.rapperName
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['Dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})