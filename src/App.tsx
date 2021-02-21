import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createArrayTypeNode } from "typescript";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Bathtub = styled.div`
  height: 100px;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ButtonContainer = styled.div``;

const Button = styled.button<{ color: string; bColor: string }>`
  display: inline-block;
  background-color: ${(props) => props.bColor};
  color: ${(props) => props.color};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  display: block;
  cursor: pointer;
`;

const WaterLevel = styled.div`
  height: 20px;
  background-color: skyblue;
`;

const createArray = (num: number) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
};
const App = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [clickIncrease, setClickIncrease] = useState(false);
  const [clickDecrease, setClickDecrease] = useState(false);
  const [intervalId, setIntervalId] = useState<any>("");

  useEffect(() => {
    if (clickIncrease) {
      const interval = setInterval(() => {
        setWaterLevel((waterLevel) => waterLevel + 1);
      }, 2000);
      setIntervalId(interval);
    }
  }, [clickIncrease]);

  useEffect(() => {
    if (clickIncrease) {
      const interval = setInterval(() => {
        setWaterLevel((waterLevel) => waterLevel - 1);
      }, 2000);
      setIntervalId(interval);
    }
  }, [clickDecrease]);

  useEffect(() => {
    if (waterLevel === 0 || waterLevel === 5) {
      clearInterval(intervalId);
    }
  }, [waterLevel]);

  const handleIncreaseWaterLevel = () => {
    setClickIncrease(true);
  };

  const handleDecreaseWaterLevel = () => {
    setClickDecrease(true);
  };

  return (
    <Container>
      <h1>Bathtub</h1>
      <Bathtub>
        {createArray(waterLevel).map((el) => (
          <WaterLevel />
        ))}
      </Bathtub>
      {true && waterLevel}
      <ButtonContainer>
        {waterLevel === 0 && (
          <Button
            color="white"
            bColor="skyblue"
            onClick={handleIncreaseWaterLevel}
          >
            Increase Water Level
          </Button>
        )}
        {waterLevel === 5 && (
          <Button
            color="black"
            bColor="white"
            onClick={handleDecreaseWaterLevel}
          >
            Decrease Water Level
          </Button>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default App;
