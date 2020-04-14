import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
    height: 50px;
    width: 50px;
    border-style: solid;
    border-width: 2px;
    border-color: transparent black transparent #ccc;
    margin: auto;
    border-radius: 50%; 
    animation: ${rotate} 2s linear infinite;

`;



const Loading = () => {
    return <Div />
}

export default Loading
