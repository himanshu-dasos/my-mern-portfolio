const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')


// Rest Object 

const App = express()

// dotenv configuration

dotenv.config()

// middlewares
App.use(cors())
App.use(express.json())

// Static folder
App.use(express.static(path.join(__dirname, './portfolio/build')))

// Routes
App.use('/api/v1/portfolio', require('./routes/portfolioRoute'));
App.get('*', (req, res) => {    
    res.sendFile(path.join(__dirname, './portfolio/build/index.html'))
})


// port
 PORT = process.env.PORT || 8080
// listen

App.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT} port number..`)
})