import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function UserList() {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  // States to hold the input values
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  // Function to handle adding a new user
  const addUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(), // Unique key for each user
      name: name,
      age: age,
      occupation: occupation,
    };
    setUsers([...users, newUser]);
    // Reset the input fields
    setName('');
    setAge('');
    setOccupation('');
  };

  return (
    <div>
      <h1>User Profiles</h1>

      {/* Conditional rendering */}
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}, <strong>Occupation:</strong> {user.occupation}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available</p>
      )}

      <h2>Add a New User</h2>
      <form onSubmit={addUser}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Occupation: </label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

ReactDOM.render(<UserList />, document.getElementById('root'));
export default App;