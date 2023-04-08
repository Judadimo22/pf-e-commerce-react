import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";



function UserTable({ users }) {
  //const classes = useStyles();

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Country</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map(user => (
          <Tr key={user._id}>
            <Th>
              {user.name}
            </Th>
            <Th>{user.email}</Th>
            <Th>{user.country}</Th>
            <Th>{user.role}</Th>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default UserTable;