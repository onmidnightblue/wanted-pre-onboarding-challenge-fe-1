import React from "react";
import styled from "styled-components";

const TodoItem = (props) => {
  const onCheckedHandler = (event) => {
    const userCheckedId = event.target.id;
    const checked = event.target.checked;

    if (checked) {
      props.checkedHandler(userCheckedId);
    } else {
      props.checkedHandler(null);
    }
  };

  return (
    <Styles.List>
      <label htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          onChange={onCheckedHandler}
          checked={props.checkedId === props.id ? true : false}
        />
        <p>{props.title}</p>
      </label>
    </Styles.List>
  );
};

const Styles = {
  List: styled.li`
    border-bottom: 1px solid #eee;
    &:hover {
      background-color: #eee;
    }
    label {
      padding: 6px;
      width: 100%;
      height: 100%;
      display: flex;
      cursor: pointer;
    }
    input[type="checkbox"] {
      vertical-align: middle;
      cursor: pointer;
    }
    p {
      padding-left: 6px;
    }
  `,
};

export default TodoItem;