import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { addPostOperation} from "../../redux/posts/postsOperations";
import postsSelectors from "../../redux/posts/postsSelectors";
import FormStyled from "./FormStyled";

const initialState = {
  title: "",
  body: "",
};

const Form = ({onModalHandleClick}) => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();
  const userId = useSelector(postsSelectors.getUserId)


  const handelChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addPostOperation(state, userId));
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
          name="title"
          value={state.title}
          onChange={handelChange}
        ></input>
      </label>
      <label className="formFild">
        <span className="formText">Body: </span>
        <textarea
          className="formTextArea"
          placeholder="Enter your post"
          type="text"
          rows="5"
          name="body"
          value={state.body}
          onChange={handelChange}
        ></textarea>
      </label>
      <button className="mainButton" type="submit">
        Add
      </button>
    </FormStyled>
  );
};

export default Form;

Form.propTypes = {
  onModalHandleClick: PropTypes.func,
};