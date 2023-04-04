require('dotenv').config();
const express = require('express');
const departmentRoutes = require('./routes/department');
const countryRoutes = require('./routes/country');
const stateRoutes = require('./routes/state');
const cityRoutes = require('./routes/city');
const mongoose = require('mongoose');
const { Db } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//middlewares
app.use((req,res,next) =>{
    console.log(req.path,req.method);
    next();
});

//routes
app.use('/api/hr/department/', departmentRoutes);
app.use('/api/hr/country/', countryRoutes);
app.use('/api/hr/state/', stateRoutes);
app.use('/api/hr/city/', cityRoutes);

mongoose.set("strictQuery", false);
const DB_URL= process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

mongoose.connect(DB_URL)
.then(() => {
    app.listen(process.env.PORT, () =>{
        console.log('conected to db and listening on port',process.env.PORT);
    });
})
.catch((error) => {
    console.log(error);
})

