export interface PasswordTypes {
  type: string,
  visible: boolean
}

export interface ChildrenProps { 
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export interface TodoItemsProps {
  key: string
  id: string
  title: string
  content: string
  checkedHandler: (params: string | null) => void
  checkedId: string | null
}

export interface TodoControllerProps {
  addTodo: (param: newTodoType) => void
  modifyTodo: (param1: newTodoType, param2: string) => void
  removeTodo: () => void
  todoDetail: TodoDataType
  checkedId: null | string
}

export interface newTodoType {
  title: string,
  content: string
}

export interface TodoDataType {
  title: string,
  content: string,
  id: string,
  createdAt: string,
  updatedAt: string
}

export interface ResponseType {
  todos: TodoDataType[],
  todoDetail: TodoDataType
}
