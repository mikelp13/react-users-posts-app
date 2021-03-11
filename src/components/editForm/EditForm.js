import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { editPostOperation } from "../../redux/posts/postsOperations";
import postsSelectors from "../../redux/posts/postsSelectors";
import FormStyled from "../form/FormStyled";

const initialState = {
  name: "",
  body: "",
};

const EditForm = ({onModalHandleClick, postInfoById}) => {

  const [state, setState] = useState({ ...initialState, ...postInfoById });
  const dispatch = useDispatch();
  const currentPostId = useSelector(postsSelectors.getCurrentPostId);



  const handelChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(editPostOperation(currentPostId, state));
    onModalHandleClick();
  };
  return (
    <FormStyled onSubmit={handelSubmit}>
      <label className="formFild">
        <span className="formText">Title: </span>
        <input
          className="formInput"
          placeholder="Enter title..."
          type="text"
          name="name"
          value={state.name}
          onChange={handelChange}
        ></input>
      </label>
      <label className="formFild">
        <span className="formText">Body: </span>
        <textarea
          className="formTextArea"
          placeholder="Enter your post"
          rows="5"
          type="text"
          name="body"
          value={state.body}
          onChange={handelChange}
        ></textarea>
      </label>
      <button className="mainButton" type="submit">
        Save changes
      </button>
    </FormStyled>
  );
};

export default EditForm;

EditForm.propTypes = {
  onModalHandleClick: PropTypes.func,
  postInfoById: PropTypes.object,
};