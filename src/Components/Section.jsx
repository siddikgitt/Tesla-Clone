import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Section = (props) => {
  return (
    <>
      <Wrap bgImg={props.bgImg}>
      <Fade bottom>
        <TextContainer>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </TextContainer>
        </Fade>

        <Container>
        <Fade bottom>
          <ButtonContainer>
            <LeftBtn>{props.leftBtn}</LeftBtn>

            {props.rightBtn && <RightBtn>{props.rightBtn}</RightBtn>}
          </ButtonContainer>
        </Fade>
          <DownArrow src={"/images/down-arrow.svg"} />
        </Container>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  /* max-height: 100%; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightBtn = styled(LeftBtn)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Container = styled.div`
  overflow: hidden;
`;

export default Section;
