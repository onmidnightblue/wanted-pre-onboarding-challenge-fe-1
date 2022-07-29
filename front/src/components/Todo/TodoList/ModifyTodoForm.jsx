import axios from "axios";
import React, { useContext, useRef } from "react";
import TodoContext from "../../../store/TodoContext";
import FormLayout from "../../Layout/FormLayout";
import Button from "../../UI/Button";

const ModifyTodoForm = (props) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const todoCtx = useContext(TodoContext);

  // api submit
  const onSubmit = async (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredContent = contentRef.current.value;
    const token = localStorage.getItem("token");

    try {
      const url = "http://localhost:8080/todos/:id";
      const response = await axios.put(
        url,
        {
          title: enteredTitle,
          content: enteredContent,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);

      todoCtx.addTodo({
        title: enteredTitle,
        content: enteredContent,
      });

      // code
    } catch (error) {
      console.log(error);
    }

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
        <Button>complete</Button>
        <p className="cancel" onClick={props.onClose}>
          cancel
        </p>
      </form>
    </FormLayout>
  );
};

export default ModifyTodoForm;
