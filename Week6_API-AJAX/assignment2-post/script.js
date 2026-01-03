'use strict';

const url = 'https://reqres.in/api/users';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres-free-v1'
  },
  body: JSON.stringify({
    name: 'Alice',
    job: 'Developer'
  })
};

async function createUser() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
