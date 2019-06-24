require('dotenv').config()
const express = require('express')
const {port} = process.env
const app = express()
const ctrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', ctrl.create)//this will create message

app.get('/api/messages', ctrl.read)//this will return messages

app.put('/api/messages/:id', ctrl.update)//this will edit message

app.delete('/api/messages/:id', ctrl.delete)//this will delete message

app.listen(port, () => {
    console.log('Live on port ', port)
})