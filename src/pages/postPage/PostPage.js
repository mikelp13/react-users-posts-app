import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditForm from "../../components/editForm/EditForm";
import EditIcon from "../../components/editIcon/EditIcon";
import DeleteIcon from "../../components/deleteIcon/DeleteIcon";
import Modal from "../../components/modal/Modal";
import postsActions from "../../redux/posts/postsActions";
import useModal from "../../hooks/useModal";
import { removePostOperation } from "../../redux/posts/postsOperations";
import postsSelectors from "../../redux/posts/postsSelectors";
import { SectionStyled } from "../usersPage/UsersPageStyled";
import { ListStyled, RedirectStyled } from "./PostPageStyled";

const PostPage = () => {
  const postInfo = useSelector(postsSelectors.getPostInfo);
  const postIdValue = useSelector(postsSelectors.getCurrentPostId);
  const dispatch = useDispatch();
  const { openModal, onModalHandleClick } = useModal();

  const handleEdit = (e) => {
    dispatch(postsActions.getCurrentPostInfoId(e.currentTarget.id));
    dispatch(postsActions.getUserPostId(e.currentTarget.dataset.id));
    onModalHandleClick();
  };

  const handleDelete = (e) => {
    dispatch(removePostOperation(e.currentTarget.id));
  };

  const getPostInfoById = (postIdValue) => {
    const postInfoById = postInfo.find(
      (item) => item.id === Number(postIdValue)
    );
    return postInfoById;
  };

  return (
    <>
      <SectionStyled>
        <div className="container">
          <h2>Post comments</h2>
          {!postInfo.length && <RedirectStyled> First you need to choose some <Link to="/">post.</Link> </RedirectStyled>}
          <ListStyled className="comentsList">
            {postInfo &&
              postInfo.map(({ id, postId, name, email, body }) => {
                return (
                  <li className="commentsItem" key={id}>
                    <p className="commentsId">postId: {postId}</p>
                    <h3 className="commentsName">{name}</h3>
                    <p className="commentsEmail">{email}</p>
                    <p className="commentsBody">{body}</p>
                    <button
                      type="button"
                      id={id}
                      data-id={postId}
                      onClick={handleEdit}
                      className="commentsBtn"
                    >
                    <EditIcon/>
                    </button>
                    <button type="button" id={id} onClick={handleDelete} className="commentsBtn">
                    <DeleteIcon/>
                    </button>
                  </li>
                );
              })}
          </ListStyled>
        </div>
      </SectionStyled>
      <Modal openModal={openModal} onModalHandleClick={onModalHandleClick}>
        <EditForm
          onModalHandleClick={onModalHandleClick}
          postInfoById={getPostInfoById(postIdValue)}
        />
      </Modal>
    </>
  );
};

export default PostPage;
