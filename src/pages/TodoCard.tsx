import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import S from "../globalStyle";
import { Todo } from "../types";
import { RootState } from "../redux/configStore";

const TodoCard = () => {
  const params = useParams();

  const { todos } = useSelector((state: RootState) => state.todoReducer);
  const navigate = useNavigate();

  const foundData = todos.find((todo: Todo) => {
    return todo.id === params.id;
  });

  return (
    <S.DetailContainer>
      <S.DetailCard>
        <S.DetailP>id: {foundData ? foundData.id : null}</S.DetailP>
        <S.DetailH1>{foundData ? foundData.title : null}</S.DetailH1>
        <S.DetailH2>{foundData ? foundData.content : null}</S.DetailH2>
        <S.DetailBtn
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </S.DetailBtn>
      </S.DetailCard>
    </S.DetailContainer>
  );
};

export default TodoCard;
