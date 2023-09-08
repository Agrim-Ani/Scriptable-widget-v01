const express =  require('express');
const dotenv =  require('dotenv');
const connectDb = require('./dbConnection.js');
dotenv.config();
//setting up middlewares
const app = express();
app.use(express.json());

//setting up port
const port = 3000 || process.env.PORT;

//routes

app.get('/',(req,res)=>{
  
  res.send('Hello World');
});
const taskRoute = require('./routes/taskRoute.js')
app.use('/api',taskRoute);

//connect DB
connectDb();
//port
app.listen(
  port,
  console.log(`Server listening on port ${port}`)
);