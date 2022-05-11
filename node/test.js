import { readFile } from 'fs';

readFile('README.md', 'utf-8', (error_, data) => {
  if (error_) {
    throw error_;
  }

  console.log(data);
});

// console.log('it works');

const users = [
  {
    name: 'Gregor',
    age: 18,
    hobbies: ['music', 'art', 'sport'],
  },
];

promises
  .readFile('database.json', 'utf-8')
  .then(data => JSON.parse(data))
  .then(json => {
    console.log(json);
  })
  .catch(error_ => {
    throw error_;
  });

promises
  .readFile('database.json', 'utf-8')
  .then(data => JSON.parse(data))
  .then(json => {
    // Reassign a new array
    json.users = [
      { name: 'Carolin', age: 18, hobbies: ['riding unicorns'] },
      ...json.users,
    ];
    // Modify the existing array
    json.users.unshift({
      name: 'Marvin',
      age: 18,
      hobbies: ['pushing things into arrays'],
    });
    // We added two users

    console.log(json);
    promises.writeFile('database.json', JSON.stringify(json, null, 4));
  })
  .catch(error_ => {
    throw error_;
  });

async function getDatabase() {
  const content = await promises.readFile('database.json', 'utf-8');
  const data = JSON.parse(content);
  // console.log(data);
  return data;
}

async function addUser() {
  const data = getDatabase();
  console.log(data);
}

addUser();

async function getDatabase() {
  const content = await promises.readFile('database.json', 'utf-8');
  const data = JSON.parse(content);
  // console.log(data);
  return data;
}

async function addUser(user) {
  const data = await getDatabase();
  console.log(data);
  data.users.push(user);
  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}

addUser({ name: 'Anna', age: 19, hobbies: ['reading'] });

////////////////////////////////////////////////////////////////////////////////////////

export 4efault function handler(req, res) {
  if (req.method === 'GET') {
    console.log('This is printed to the server terminal');
    res.status(200).json({ message: 'This object is sent to the frontend.' });
    return;
  } else if (req.method === 'POST') {
    console.log('Post request to our users endpoint.');
    const receivedData = req.body;
    console.log(receivedData);
    res.status(200).json({ message: 'New user created!' });
    return;
  }
  res.status(405).json({ message: 'Error: wrong request method.' });
}
