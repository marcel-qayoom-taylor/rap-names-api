const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthname': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthname': 'Chancellor Bennet',
        'birthLocation': 'Chicago, Illinois'
    }, 
    'dylan':{
        'age': 29,
        'birthname': 'Dylan',
        'birthLocation': 'Dylan'
    }, 
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') // __dirname essentially is whereever this file is located, start looking from there
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase() 
    //response.json(rappers) // sends json
    if (rappers[rappersName]){
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})