import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000') // Assuming the API endpoint is /users
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id)=>{
    axios.delete('http://localhost:3000/deleteUser/'+id)
    .then(res =>{console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err));
  }
  return (
    <div className="outer">
      <div className="inner">
        <Link to="/create" className="button">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}> {/* Added key prop */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="button"> {/* Added user ID to update link */}
                    Update
                  </Link>

                  <button className="button delete-button"
                  onClick={(e) =>handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;