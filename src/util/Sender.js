const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

let isReady = 0;

function makeSerialPort(path_port) {
    port = new SerialPort({
    path:path_port, 
    baudRate: 9600,
    });
    console.log("port made")
    //making node listen now to what the board sends
    const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
      parser.on('data', (data)=>{
        if (data.trim() === "ok"){
            isReady = 1;
            console.log("heyyy i got an okayyy")
        }
        console.log("data received is",data);
    })
    return port;
}

function writeSerialPortSimple(port,data){
    data = data + "\n";
    if (port && isReady === 1) {
        port.write(data, (err) => {
          if (err) {
            console.error('Error writing to port:', err);
          } else {
            console.log('Data written to arduino:', data);
            isReady = 0;
          }
        });
    }
}

module.exports = {makeSerialPort , writeSerialPortSimple};