import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPostInfoOperation } from "../../redux/posts/postsOperations";
import postsSelectors from "../../redux/posts/postsSelectors";
import { TableContainer } from "../usersTable/UserTableStyled";

const PostsTable = () => {
  const posts = useSelector(postsSelectors.getPosts);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    dispatch(getPostInfoOperation(e.target.id));
    history.push("/post");
  };

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            <th>details</th>
          </tr>
        </thead>

        <tbody>
          {posts.map(({ userId, id, title, body }) => {
            return (
              <tr key={id}>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
                <td>
                  <button
                    type="button"
                    id={id}
                    onClick={handleClick}
                    className="mainButton"
                  >
                    Details
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

export default PostsTable;
