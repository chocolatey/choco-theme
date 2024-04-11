#!/usr/bin/env ts-node

/*!
 * Script to start the preview server and monitor the ports of the repositories.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import net, { Socket } from 'net';
import { spawn } from 'child_process';
import WebSocket, { WebSocketServer } from 'ws';
import { folderMapping } from './data/preview-config';

// List of ports to monitor
// Ensures if the folderMapping doesn't contain a port, that is excluded
const portList: number[] = Object.values(folderMapping)
    .map(item => item.port)
    .filter(port => port !== undefined);

const childProcess = spawn('yarn dlx http-server --cors -o', [], {
    stdio: 'inherit', // sends info over to preview.ts to be read
    shell: true
});

// Create a WebSocket server
const wss = new WebSocketServer({ port: 8081 });

// Function to check port status
const checkPortStatus = (port: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        const socket: Socket = net.createConnection({ port }, () => {
            socket.end();
            resolve('open');
        });

        socket.on('error', err => {
            const errorCodeMatch = err.message.match(/(EADDRINUSE|E.*):/);
            const errorCode = errorCodeMatch ? errorCodeMatch[1] : null;

            if (errorCode === 'ECONNREFUSED') {
                resolve('closed');
            } else {
                reject(err);
            }
        });

        socket.setTimeout(1000, () => {
            socket.destroy();
            resolve('in use');
        });
    });
};

// Function to monitor ports and send status to client
const monitorPorts = async (): Promise<void> => {
    const portStatus: { [key: number]: string } = {};

    for (const port of portList) {
        try {
            const status: string = await checkPortStatus(port);
            portStatus[port] = status;
            console.log(`Port ${port} is ${status}`);
        } catch (err) {
            // console.error(`Error checking port ${port}: ${(err as Error).message}`);
            // Send port status to connected clients
            console.log(`Port ${port} is closed`);
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    const portStatus = JSON.stringify({ [port]: 'closed' });
                    client.send(portStatus);
                }
            });
        }
    }

    // Send port status to connected clients
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(portStatus));
        }
    });
};

// Start monitoring ports
setInterval(monitorPorts, 5000); // Check ports every 5 seconds
