const express = require('express');
const mongoose = require('mongoose')

const app = express();

const mongoURI = 'mongodb+srv://root:secret123@trackcluster.j931g.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo Instance.')
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to Mongo,', err);
});

app.get('/', (req, res) => {
    res.send('Hi There.');
});

app.listen(3000, () => {
    console.log('Listening to port 3000.')
})