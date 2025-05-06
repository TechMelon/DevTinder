const express = require('express');
const app = express();

// app.get('/', (req,res) => {
//     res.send('Server is running on port 7777!!');
// });

app.get('/hello', (req,res) => {
    res.send({ firstname : "Sneha", lastname : "Bhardwaj"});
});

app.post('/hi', (req,res) => {
    // Saving data to DB
    res.send("Data successfully saved in the database!!");
});

app.delete('/hi', (req,res) => {
    // Saving data to DB
    res.send("Data successfully deleted from the database!!");
});

app.use('/test', (req,res) => {
    res.send('server is running on port 7777 from test');
});

// app.get('/she', (req,res) => {
//     res.send('server is running on port 7777 from she');
// });

app.listen(7777, () => {
    console.log("Server is running on port 7777");
})