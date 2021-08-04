import React, { useState, useEffect } from "react";

function UserDetails(props) {
  const [user, setUser] = useState({});

  useEffect(async () => {
    let login = props.match.params.login;

    //send get request
    let response = await fetch(`https://api.github.com/users/${login}`, {
      method: "GET",
    });

    //get response body
    let body = await response.json();
    console.log(body);

    //Check response body
    if (body) {
      setUser(body);
    }
  }, []);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={user.avatar_url} alt="user" />
      <div className="card-body">
        <h5 className="card-title">
          {user.id} - {user.login}
        </h5>
        <p className="card-text">{user.node_id}</p>
      </div>
    </div>
  );
}

export default UserDetails;
