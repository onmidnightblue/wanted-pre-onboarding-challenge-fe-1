import React from "react";
import { TodoItemsProps } from "src/models/todosTypes";
import styled from "styled-components";

const TodoItem = (props: TodoItemsProps) => {
  const onCheckedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userCheckedId: string | null = event.target.id;
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
    width: 100%;
    &:hover {
      background-color: #eee;
    }
    label {
      padding: 6px;
      width: calc(100% - 13px);
      height: 100%;
      display: flex;
      cursor: pointer;
      input[type="checkbox"] {
        vertical-align: middle;
        cursor: pointer;
      }
      p {
        padding-left: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  `,
};

export default TodoItem;
