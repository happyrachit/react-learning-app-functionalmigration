import React, { useState, useEffect } from "react";
import Modal from "../common/Modal";
import TableHeader from "../common/TableHeader";
import UserList from "../user/UserList";

function Users() {
  const tableHeader = ["#", "User", "Login", "Node ID", "Action"];
  const [users, setUsers] = useState([]);
  const [editUserDetails,setEditUserDetails] = useState({});

  useEffect(async () => {
    var response = await fetch("https://api.github.com/users", {
      method: "Get",
    });
    var users = await response.json();
    console.log(users);

    setUsers(users);
  }, []);

  function handleDelete (user) {
    //get index of selected product
    let allUsers = [...users];
    let index = allUsers.indexOf(user);
    if (window.confirm("Are you sure to delete")) {
      //delete product based on index
      allUsers.splice(index, 1);

      //update the state of current component(parent component)
      setUsers(allUsers);
    }
  };

  function handleEdit (user) {
    setEditUserDetails(user);
  };

  function handleOnChange (e,id) {
    console.log(id);
    console.log(e);
    
  }

  return (
    <>
      <h4>Users</h4>
      <table className="table">
        <TableHeader tableHeader={tableHeader}></TableHeader>

        <tbody>
          {users.map((user) => {
            return (
              <UserList
                key={user.id}
                user={user}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            );
          })}
        </tbody>
      </table>

      <Modal
        userDetails={editUserDetails}
        handleOnChange={handleOnChange}
      />
    </>
  );
}





export default Users;
