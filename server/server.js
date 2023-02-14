const express = require("express"); 
const app = express();
const port = 4000; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('혁이는 코딩 중!')
})

app.post("/idplz", (req,res)=>{
    const serverid = req.body.plzid;
    console.log(serverid);
    const sendText = {
        text : "열심히 코딩 중",
    };
    res.send(sendText);
    
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})