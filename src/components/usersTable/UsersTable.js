import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPostsOperation } from "../../redux/posts/postsOperations";
import usersSelectors from "../../redux/users/usersSelectors";
import { TableContainer } from "./UserTableStyled";

const UsersTable = () => {
  const users = useSelector(usersSelectors.getUsers);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(getPostsOperation(e.target.id));
    history.push("/posts");
  };

  return (
    <TableContainer>
      <h1> Table of all users </h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Posts</th>
          </tr>
        </thead>

        <tbody>
          {users.map(({ id, name, username, email, phone }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <button
                    type="button"
                    id={id}
                    onClick={handleClick}
                    className="mainButton"
                  >
                    Posts
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default UsersTable;
