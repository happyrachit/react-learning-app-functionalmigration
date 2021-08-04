import React, { Component } from "react";
import { Link } from "react-router-dom";

function UserList(props) {
  const { user, onDelete, onEdit } = props;

  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>
        <img src={user.avatar_url} width="50" height="60" alt="user" />
      </td>
      <td>{user.login}</td>
      <td>{user.node_id}</td>
      <td>
        <span className="pull-left hand-icon">
          <Link to={`UserDetails/${user.login}`} target="_blank">
            <i className="fa fa-file"></i>
          </Link>{" "}
          |{" "}
          <i
            className="fa fa-pencil"
            data-toggle="modal"
            data-target="#myModal"
            onClick={(event) => {
              event.preventDefault();
              onEdit(user);
            }}
          ></i>{" "}
          |{" "}
          <span
            onClick={() => {
              onDelete(user);
            }}
          >
            <i className="fa fa-trash-o"></i>
          </span>
        </span>
      </td>
    </tr>
  );
}

export default UserList;
