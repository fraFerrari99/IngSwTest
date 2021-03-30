import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js'
const app=express();

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use('/posts',postRoutes);
//Mongo Db Connection
const CONNECTION_URL='mongodb+srv://francescoferr99:FinnJohnlocke1@cluster0.rzlb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useCreateIndex:true})
        .then(()=>app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`)))
        .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);