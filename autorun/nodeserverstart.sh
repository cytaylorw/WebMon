#!/bin/sh
PATH=$PATH:/volume1/@appstore/Node.js_v8/usr/local/lib/node_modules/forever/bin
MY_SERVER=/volume1/server/HelloWorldServer

forever -a start --workingDir $MY_SERVER --sourceDir $MY_SERVER -l $MY_SERVER/logs/log.txt -o $MY_SERVER/logs/output.txt .