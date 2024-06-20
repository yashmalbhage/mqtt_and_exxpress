import express from "express";
import mqtt from "mqtt";





const app = express();

const port  = 3000;

//middle ware

app.use(express.json());
//mqtt setup

const mqttBrokerUrl = '46dbb3f0d50844d68f538d0fa20dd0d1.s1.eu.hivemq.cloud';
const mqttTopic = 'my/test/topic';
const mqttClient = mqtt.connect(mqttBrokerUrl);


app.get('/',(req,res)=>{
    res.send('server running');
})

app.listen(port, (res,req)=>{
    console.log(`Server running on port:${port}`)
})