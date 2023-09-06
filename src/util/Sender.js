const { SerialPort } = require('serialport')

function makeSerialPort() {
    port = new SerialPort({
    path:'COM5', //this hard coded and will be changed in the future of course
    baudRate: 9600,
    });
    return port;
}

function writeSerialPortSimple(port,data){
    if (port) {
        port.write(data, (err) => {
          if (err) {
            console.error('Error writing to port:', err);
          } else {
            console.log('Data written to arduino:', data);
          }
        });
    }
}

module.exports = {makeSerialPort , writeSerialPortSimple};