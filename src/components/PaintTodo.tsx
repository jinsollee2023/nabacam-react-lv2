import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoReducer";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import S from "../globalStyle";
import { Todo } from "../types";

interface Props {
  todo: Todo;
}

const PaintTodo = ({ todo }: Props) => {
  const dispatch = useDispatch();

  // 삭제하기
  const deleteBtnHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  // 완료/취소하기
  const toggleBtnHandler = (id: string) => {
    dispatch(updateTodo(id));
  };

  return (
    <S.TodoCard key={todo.id}>
      <S.TodoH2>{todo.title}</S.TodoH2>
      <p>{todo.content}</p>
      <S.BtnContainer>
        <S.ToggleBtn
          borderColor="rgb(255, 188, 199)"
          onClick={() => toggleBtnHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </S.ToggleBtn>
        <Link to={`/todo/${todo.id}`}>
          <S.ToggleBtn borderColor="grey">상세보기</S.ToggleBtn>
        </Link>
        <S.ToggleBtn
          borderColor="rgb(152, 215, 251)"
          onClick={() => deleteBtnHandler(todo.id)}
        >
          삭제
        </S.ToggleBtn>
      </S.BtnContainer>
    </S.TodoCard>
  );
};

export default PaintTodo;
