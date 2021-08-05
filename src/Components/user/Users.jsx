import React, { useState, useEffect } from "react";
import Modal from "../common/Modal";
import TableHeader from "../layout/TableHeader";
import { baseUrl } from "../shared/platform-api";
import UserList from "../user/UserList";

function Users() {
  const tableHeader = ["#", "User", "Login", "Node ID", "Action"];
  const [users, setUsers] = useState([]);
  const [editUserDetails, setEditUserDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      // You can await here
      let response = await fetch(`${baseUrl}/users`, {
        method: "Get",
      });
      var data = await response.json();
      setUsers(data);
    }
    fetchData();
  }, []);


  function handleDelete(user) {
    //get index of selected product
    let allUsers = [...users];
    let index = allUsers.indexOf(user);
    if (window.confirm("Are you sure to delete")) {
      //delete product based on index
      allUsers.splice(index, 1);

      //update the state of current component(parent component)
      setUsers(allUsers);
    }
  }

  function handleEdit(user) {
    setEditUserDetails(user);
  }

  function handleOnChange(e, id) {
    setEditUserDetails({ id: id, login: e.target.value });
  }

  function handleOnClick(event) {
    event.preventDefault();
    const updatedData = users.map((singleUser) => {
      if (singleUser.id === editUserDetails.id) {
        return { ...singleUser, login: editUserDetails.login };
      }
      return singleUser;
    });
    setUsers(updatedData);
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
        handleOnClick={handleOnClick}
      />
    </>
  );
}

export default Users;
