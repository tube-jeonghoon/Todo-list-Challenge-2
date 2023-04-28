import React from "react";
import styled from "styled-components";
import Header from "./Header";
import TodoInputBox from "./TodoInputBox";
import TodoBox from "./TodoBox";

const Home = () => {
  return (
    <StApp className="Home">
      {/* -------------- Header Box -------------- */}
      <Header />
      {/* -------------- Todo Input Box -------------- */}
      <TodoInputBox />
      {/* -------------- Todo Box -------------- */}
      <TodoBox />
    </StApp>
  );
};

export default Home;

const StApp = styled.div`
  /* background-color: #d5ffeb; */
  margin: 1rem auto;
  max-width: 1200px;
  min-width: 800px;
`;
