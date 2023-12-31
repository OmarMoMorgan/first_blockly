const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

let isReady = 0;
var eventsQueue = [];

class WriteEvent{
    constructor(data){
        this.data = data;
    }
}

function makeSerialPort(path_port) {
    port = new SerialPort({
    path:path_port, 
    baudRate: 115200,
    });
    console.log("port made")
    //making node listen now to what the board sends
    const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
      parser.on('data', (data)=>{
        if (data.trim() === "ok"){
            if(eventsQueue.length > 0){
                var head = eventsQueue.shift();
                JustWrite(port,head.data);
            }else{
                isReady = 1;
            }
            console.log("heyyy i got an okayyy")
        }
        console.log("data received is",data);
    })
    return port;
}

function writeSerialPortSimple(port,data){
    const writeReq = new WriteEvent(data);
    eventsQueue.push(writeReq);
    if(eventsQueue.length === 1 && isReady === 1){
        isReady = 0;
        var head = eventsQueue.shift();
        JustWrite(port,head.data);
    }
}

function JustWrite(port,data){
    const command = data.slice(0,2);
    if (port) {
        if(command !== "G4"){
           onlyWrite(port,data);
        }else{
            waitTime = data.slice(data.indexOf('S')+1);
            console.log("you should wait",Number(waitTime)*1000);
            setTimeout(()=>{
                console.log("entered the timeout now");
                onlyWrite(port,data)},Number(waitTime)*1000);
        }
    }
}

function onlyWrite(port,data){
    data = data + "\n";
    port.write(data, (err) => {
        if (err) {
        console.error('Error writing to port:', err);
    } else {
        console.log('Data written to arduino:', data);
        //isReady = 0;
    }
    });
}

module.exports = {makeSerialPort , writeSerialPortSimple};