import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/getUser/`+id)
      .then(result => {
        console.log(result);
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch(error =>console.error(error));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/updateUser/`+id, { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/'); // Redirect to users list after update
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="outer">
        <div className="inner">
          <h1>Update User</h1>
          <form onSubmit={Update}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;