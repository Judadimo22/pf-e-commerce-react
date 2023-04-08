import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './InfoUsuarios';

function TableUsersContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('https://my-api.com/users'); // Cambia esto por la URL de tu API que devuelve la lista de usuarios de la base de datos en MongoDB
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}

export default TableUsersContainer;