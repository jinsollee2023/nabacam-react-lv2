import React from "react";
import AddTodo from "../components/AddTodo";
import PaintTodo from "../components/PaintTodo";
import { useSelector } from "react-redux";
import S from "../globalStyle";

const Home = () => {
  const { todos } = useSelector((state) => {
    return state.todoReducer;
  });
  return (
    <div>
      <S.Header>
        <S.HeaderSpan>My Todo List</S.HeaderSpan>
        <S.HeaderSpan>React</S.HeaderSpan>
      </S.Header>
      <AddTodo />
      <S.PaintDiv>
        <S.PaintDivH1>Working🔥</S.PaintDivH1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return <PaintTodo todo={todo} />;
            })}
        </div>
      </S.PaintDiv>
      <S.PaintDiv>
        <S.PaintDivH1>Done🎉</S.PaintDivH1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return <PaintTodo todo={todo} />;
            })}
        </div>
      </S.PaintDiv>
    </div>
  );
};

export default Home;
