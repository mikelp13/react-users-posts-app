import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/form/Form";
import Modal from "../../components/modal/Modal";
import PostsTable from "../../components/postsTable/PostsTable";
import useModal from "../../hooks/useModal";
import { getPostsOperation } from "../../redux/posts/postsOperations";
import postsSelectors from "../../redux/posts/postsSelectors";
import TitleWrapper from "./PostsPageStyled";
import { SectionStyled } from "../usersPage/UsersPageStyled";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { openModal, onModalHandleClick } = useModal();
  const posts = useSelector(postsSelectors.getPosts);

  useEffect(() => {
    !posts.length && dispatch(getPostsOperation());
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    onModalHandleClick();
  };

  return (
    <>
      <SectionStyled>
        <div className="container">
          <TitleWrapper>
            <h2> Posts Table </h2>
            <button type="button" onClick={handleClick} className="mainButton">
              Add new
            </button>
          </TitleWrapper>
          <PostsTable />
        </div>
      </SectionStyled>
      <Modal openModal={openModal} onModalHandleClick={onModalHandleClick}>
        <Form onModalHandleClick={onModalHandleClick} />
      </Modal>
    </>
  );
};

export default PostsPage;
