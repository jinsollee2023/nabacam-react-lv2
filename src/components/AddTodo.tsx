import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todoReducer";
import S from "../globalStyle";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  // 추가하기
  const addBtnHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const addedtodo = {
      id: nanoid(),
      title: title,
      content: content,
      isDone: false,
    };
    dispatch(addTodo(addedtodo));
    setTitle("");
    setContent("");
  };

  return (
    <S.Form onSubmit={addBtnHandler}>
      <S.FormInputDiv>
        제목
        <S.FormInput
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        내용
        <S.FormInput
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </S.FormInputDiv>
      <S.FormBtn>추가하기</S.FormBtn>
    </S.Form>
  );
};

export default AddTodo;
