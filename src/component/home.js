import React, { useContext } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { remove, add, reset } from "../component/globalState/globalState";
const Home = () => {
  const dispatch = useDispatch();
  const viewCount = useSelector((state) => state.stateReducer.count);

  return (
    <Container>
      <Card>
        <Wrapper>
          <H1>{viewCount}</H1>
          <Bottom>
            <Button
              onClick={() => {
                dispatch(add());
              }}
            >
              Add
            </Button>

            <Button
              onClick={() => {
                dispatch(remove());
              }}
            >
              Remove
            </Button>

            <Button
              onClick={() => {
                dispatch(reset());
              }}
            >
              Reset
            </Button>
          </Bottom>
        </Wrapper>
      </Card>
    </Container>
  );
};
export default Home;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const Card = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const Bottom = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Button = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  background-color: black;
  font-size: 14px;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
