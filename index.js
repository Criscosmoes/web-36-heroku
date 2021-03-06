const express = require('express'); 
const dotenv = require('dotenv'); 
const cors = require('cors'); 
const path = require('path'); 

dotenv.config(); 
const port = process.env.PORT || 4000

const app = express(); 
app.use(express.json());
app.use(cors()); 


app.use('/api/*', (req, res) => {
    res.send({hi: 'buddy'})
})


app.listen(port, () => console.log(`listening on ${port}`)); 