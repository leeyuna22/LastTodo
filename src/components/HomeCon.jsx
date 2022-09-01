import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeCon = () => {
  const navigate = useNavigate();

  return (
    <Stlist>
      <Sttodo>
        <h1> 무엇을 할까요? </h1>
      </Sttodo>

      <StBox
        onClick={() => {
          navigate("/addtodo");
        }}
      >
        <h2> 할일 기록하기 </h2>
        <h1>👉🏻</h1>
      </StBox>

      <StBox
        onClick={() => {
          navigate("/listtodo");
        }}
      >
        <h2> TODO LIST </h2>
        <h1>👉🏻</h1>
      </StBox>
    </Stlist>
  );
};

export default HomeCon;

const Stlist = styled.div`
  padding: 15px;
`;

const Sttodo = styled.div`
  margin: 40px auto 5px auto;
`;

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100%-100px);
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 22px;
  margin: 15px auto;
  align-items: center;
  cursor: pointer;
`;
