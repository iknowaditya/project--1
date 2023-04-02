import React from "react";
import "./User.css";

const User = ({ loading, user }) => {
  return (
    <div className="row" id="main">
      {loading ? (
        <div></div>
      ) : (
        user.map((users) => (
          <div className="grid" key={users.id}>
            <div className="info">
              <img
                src={users.avatar}
                alt={users.avatar}
                className="image"
              ></img>
              <h2>
                <b>ID: {users.id}</b>
              </h2>
              <h3 className="name">
                {users.first_name} {users.last_name}
              </h3>
              <p className="email">
                <i className="far fa-envelope"></i>
                {users.email}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default User;
