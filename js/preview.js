import { Dropdown } from 'bootstrap';
import './src/theme-toggle.js';
import { folderMapping } from '../build/data/preview-config.js';

// Get the tbody element
const tbody = document.querySelector('#tableMonitorPorts tbody');

// Get the template content
const template = document.querySelector('#templateMonitorPorts');

// Clone the template content and populate it with data from folderMapping
Object.keys(folderMapping).forEach(key => {
    const data = folderMapping[key];
    const clone = document.importNode(template.content, true);

    const tds = clone.querySelectorAll('td');
    tds[1].querySelector('.badge').textContent = data.port ? 'Waiting' : 'N/A'; // status
    tds[2].textContent = data.port ? data.port.toString() : 'N/A'; // port
    tds[3].textContent = data.folder; // folder name
    tds[4].textContent = key; // option passed

    const button = clone.querySelector('.monitor-link');
    if (data.port) {
        const protocol = data.protocol ? data.protocol : 'http';

        button.href = `${protocol}://localhost:${data.port}`;
    }

    for (const td of tds) {
        td.setAttribute('data-monitor-option', key);
    }

    // Append the cloned and populated template to the tbody
    tbody.appendChild(clone);
});

const socket = new WebSocket('ws://localhost:8081');

socket.addEventListener('open', event => {
    socket.send('Hello Server!', event.data);
    console.log('Connected to WebSocket server');
});

socket.addEventListener('message', event => {
    const portStatus = JSON.parse(event.data);

    for (const [port, status] of Object.entries(portStatus)) {
        const monitorOption = Object.entries(folderMapping).find(([, value]) => value.port === parseInt(port));
        const monitorLink = document.querySelector(`[data-monitor-option="${monitorOption[0]}"] .monitor-link`);
        const monitorStatus = document.querySelector(`[data-monitor-option="${monitorOption[0]}"].monitor-status .badge`);

        // Update the monitor status
        monitorStatus.textContent = status;

        if (status === 'open') {
            monitorStatus.classList.remove('text-bg-secondary');
            monitorStatus.classList.add('text-bg-success');
        } else {
            monitorStatus.classList.remove('text-bg-success');
            monitorStatus.classList.add('text-bg-secondary');
        }

        // Check if the button is showing
        const monitorLinkActive = monitorLink.classList.contains('opacity-0');

        if (status === 'open' && monitorLinkActive) {
            monitorLink.classList.remove('opacity-0');
            monitorLink.classList.remove('disabled');
        } else if (status === 'closed' && !monitorLinkActive) {
            monitorLink.classList.add('opacity-0');
            monitorLink.classList.add('disabled');
        }
    }
});

socket.addEventListener('error', error => {
    console.error('WebSocket error:', error);
});

socket.addEventListener('close', () => {
    console.log('Disconnected from WebSocket server');
});
