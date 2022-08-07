import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoData } from "../../store/TodoActions";
import FormLayout from "../Layout/FormLayout";
import Button from "../UI/Button";

const TodoForm = (props) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const [content, setContent] = useState(true);

  // api submit
  const onSubmit = async (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredContent = contentRef.current.value;

    const todo = {
      title: enteredTitle,
      content: enteredContent,
    };

    props.todoHandler(todo, props?.existCheckedId);

    // initial
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  useEffect(() => {
    if (props?.existCheckedId === null && !props.existCheckedId) {
      return setContent(false);
    }
    setContent(true);
  }, [props.existCheckedId]);

  const formContent = (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          id="titleInput"
          ref={titleRef}
          defaultValue={props.todoDetail?.title}
        />
        <label htmlFor="titleInput">title</label>
      </div>
      <div className="content">
        <textarea
          type="text"
          id="contentInput"
          ref={contentRef}
          defaultValue={props.todoDetail?.content}
        />
        <label htmlFor="contentInput">content</label>
      </div>
      <Button>{props.formOpenId === "modify" ? "complete" : "add"}</Button>
      {props.formOpenId === "modify" ? (
        <p
          className="cancel"
          style={{ fontSize: "14px" }}
          onClick={props.onClose}
        >
          cancel
        </p>
      ) : (
        ""
      )}
    </form>
  );

  return (
    <FormLayout>
      {content ? (
        formContent
      ) : (
        <p className="error">please select the to do item.</p>
      )}
    </FormLayout>
  );
};

export default TodoForm;
