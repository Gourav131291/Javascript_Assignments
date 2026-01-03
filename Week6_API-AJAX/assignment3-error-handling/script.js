'use strict';

// Non-existent endpoint to force an error
const url = 'https://reqres.in/api/unknown/23';
const headers = { 
    'x-api-key': 'reqres-free-v1', 
    'Content-Type': 'application/json' 
};

// Generic function to test fetch with any HTTP method
async function testFetch(method) {
    try {
        const options = { method, headers };
        if (method === 'POST' || method === 'PUT') {
            options.body = JSON.stringify({ name: 'Test', job: 'Developer' });
        }

        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log(`${method} Success:`, data);

    } catch (error) {
        console.error(`${method} Caught an error:`, error.message);
    }
}

// Event listeners for the buttons
document.getElementById('test-get').addEventListener('click', () => testFetch('GET'));
document.getElementById('test-post').addEventListener('click', () => testFetch('POST'));
document.getElementById('test-put').addEventListener('click', () => testFetch('PUT'));
document.getElementById('test-delete').addEventListener('click', () => testFetch('DELETE'));


/* GET fails → The endpoint https://reqres.in/api/unknown/23 does not exist, so the server returns 404 Not Found.

POST succeeds → Even if the resource doesn’t exist, POST can create new resources on the server. Many dummy APIs (like Reqres) will return a 201 Created with the JSON you sent.

PUT succeeds → Similarly, some dummy APIs accept PUT requests and return a successful response, even if the resource wasn’t really there.

DELETE fails → If the resource doesn’t exist, DELETE will usually return 404. */