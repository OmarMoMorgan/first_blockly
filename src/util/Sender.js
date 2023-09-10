const { SerialPort } = require('serialport')

function makeSerialPort(path_port) {
    port = new SerialPort({
    path:path_port, //this hard coded and will be changed in the future of course
    baudRate: 9600,
    });
    console.log("port made")
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