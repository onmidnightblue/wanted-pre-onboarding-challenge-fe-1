import axios from "axios";
import React, { useContext, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodoData } from "../../../store/TodoActions";
import TodoContext, { todoActions } from "../../../store/TodoSlice";
import FormLayout from "../../Layout/FormLayout";
import Button from "../../UI/Button";

const AddTodoForm = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const dispatch = useDispatch();

  // api submit
  const onSubmit = async (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredContent = contentRef.current.value;

    const newTodo = {
      title: enteredTitle,
      content: enteredContent,
    };

    dispatch(addTodoData(newTodo));

    // initial
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <FormLayout>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" id="titleInput" ref={titleRef} />
          <label htmlFor="titleInput">title</label>
        </div>
        <div className="content">
          <textarea type="text" id="contentInput" ref={contentRef} />
          <label htmlFor="contentInput">content</label>
        </div>
        <Button>add</Button>
      </form>
    </FormLayout>
  );
};

export default AddTodoForm;
