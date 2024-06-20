import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Corrected import statement

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/createUser', { name, email, age })
      .then(result => { // Corrected '.this' to '.then'
        console.log(result);
        navigate('/'); // Corrected navigation
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1>Add user</h1>
        <form onSubmit={Submit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Name' id="name" name="name"
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Email' id="email" name="email"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" placeholder='Age' id="age" name="age"
              onChange={(e) => setAge(e.target.value)} />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
