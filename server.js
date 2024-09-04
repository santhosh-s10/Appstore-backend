const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const appStoreRouter = require('./routes/appStoreRoutes')
const cors = require('cors')

dotenv.config();
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected..");
});

const app = express();
app.use(cors());
app.use(express.json());

app.use('/apps', appStoreRouter);

app.listen(3000, ()=>{
    console.log("Server is running..");
});

