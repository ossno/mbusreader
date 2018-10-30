const MBusParser = require("mbusparser");
const OssBrikkenUSB = "/dev/ttyS13";
const SerialPort = require('serialport')

const port = new SerialPort(OssBrikkenUSB, {
    baudRate: 115200
}, function (err) {
    if (err) {
        return console.log('Error: ', err.message)
    }
})

let prevData = Buffer.alloc(0);
port.on('data', function (data) {
    prevData = Buffer.concat([prevData, data], prevData.length + data.length);
    let parsed = new MBusParser(prevData.toString('base64'));
    if (parsed.type != "error") {
        // Successfully parsed
        prevData = Buffer.alloc(0);
        console.log("---------------------------");
        console.log(new Date().toLocaleString());
        console.log(parsed);
    }
})

port.on('error', function (err) {
    console.log('Error: ', err.message)
})