const express = require('express');
const app = express();
const cors = require('cors');


var corOptions={
    origin:'http://localhost:8081'
}

app.use(cors(corOptions));

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Testing API....");
});

const userRouter = require("./user/route");
app.use("/userAPI",userRouter);

const PORT =process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

