'use strict';

const url = 'https://reqres.in/api/users/1';
const options = {
  headers: {
    'x-api-key': 'reqres-free-v1'
  }
};

async function getUser() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

getUser();
