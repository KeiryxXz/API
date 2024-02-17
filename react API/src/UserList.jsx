import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./UserList.css"

const UserList = () => {
    const[listOfUser, setListOfUser] = useState([]);

    //The useEffect hook to fetch the list of users from the API
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      setListOfUser(res.data)
    })
    .catch(err => {
      console.error('Error', err)
    });
    }, []);

  return (
    <div>
      <ul className='listOfUsers'>
        {/*The rendering of the list of users.*/}
        {listOfUser.map((user, index) => (
          <p key={index}>
            {user.username}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default UserList