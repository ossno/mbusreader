# MBusReader
This package uses Node.js to read base64 encoded mbus packages. It uses MBusParser to parse the received messages.

## Disclaimer
This project is only developed as an example and may break at any time. (Tested on a Raspberry Pi 3)

## Pre-Reqs
* Connect Oss-brikken to available USB Port
* Update to correct port in mbusreader.js
* node, npm, and git installed

## Get started
```bash
git clone https://github.com/ossno/mbusreader
cd mbusreader
npm install
node mbusreader.js
```