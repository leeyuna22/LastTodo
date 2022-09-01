import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let number = 1;
function AddCon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    id: 0,
    writer: "",
    title: "",
    body: "",
  };

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value, id: number });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      todo.writer.trim() === "" ||
      todo.title.trim() === "" ||
      todo.body.trim() === ""
    )
      return;
    dispatch(addTodo({ ...todo, id: number }));
    navigate("/listtodo");
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <AddtodoContainer>
        <Buttoncontainer>
          <ButtonStyle>작성하기</ButtonStyle>
        </Buttoncontainer>

        <TitleContainer>
          <StyledTit>작성자</StyledTit>
          <NameInput
            type="text"
            maxLength={5}
            name="writer"
            value={todo.writer}
            onChange={onChangeHandler}
            placeholder={"작성자의 이름을 입력해주세요.(5자 이내)"}
            required
          />
        </TitleContainer>

        <TitleContainer>
          <StyledTit>제목</StyledTit>
          <TitleInput
            type="text"
            maxLength={30}
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
            placeholder={"제목을 입력해주세요.(30자 이내)"}
            required
          />
        </TitleContainer>

        <TitleContainer>
          <StyledTit>내용</StyledTit>
          <DescInput
            type="text"
            maxLength={200}
            name="body"
            value={todo.body}
            onChange={onChangeHandler}
            placeholder={"제목을 입력해주세요.(200자 이내)"}
            required
          />
        </TitleContainer>
      </AddtodoContainer>
    </form>
  );
}

export default AddCon;

const AddtodoContainer = styled.div`
  padding: 30px;
`;

const Buttoncontainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ButtonStyle = styled.button`
  text-decoration: none;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 15px 30px;
  cursor: pointer;
  font-size: 16px;
`;
const TitleContainer = styled.div`
  margin-bottom: 30px;
`;
const StyledTit = styled.h1`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 10px;
`;
const NameInput = styled.input`
  width: 750px;
  height: 20px;
  padding: 5px;
`;
const TitleInput = styled.input`
  width: 750px;
  height: 20px;
  padding: 5px;
`;
const DescInput = styled.input`
  width: 750px;
  height: 200px;
  padding: 5px;
`;
