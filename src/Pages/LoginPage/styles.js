import styled from "styled-components"
export const LoginPageWrapper = styled.form`
height: 100vh;
width: 100vw;
background-color: #222;
position: fixed;
top: 0;
left: 0;
z-index: 9999;
display: flex;
flex-direction: column;
justify-content: center;
`;
export const Title = styled.div`
font-size: 21px;
font-weight: 500;
color: #222;
text-align: center;
`;
export const Container = styled.div`
width: 50%;
height: 50%;
background-color: #fff;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
border-radius: 15px;

`;
export const Content = styled.div`
width: 50%;
margin: auto;
margin-top: 60px; 
`;




export const InputWrap = styled.div`
  width: 320px;
  height: 35px;
  background-color: #222;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 35px;
  margin-left: 30px;
  @media only screen and (max-width: 610px) {
    height: 38px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border: 3px solid #222;
  border-radius: 8px;
  padding: 3px;
  @media only screen and (max-width: 610px) {
    width: 100%;
    height: 38px;
  }
`;

export const Labels = styled.label`
  color: #222;
  font-size: 12px;
  font-family: sans-serif;
  position: absolute;
  top: -23px;
  z-index: 22;
  font-size: 16px;
`;
export const ButtonWrapper = styled.div`
width: fit-content;

`;
export const Button = styled.button`
height: 40px;
width: 260px;
background-color: lightblue;
outline: none;
border: 0;
border-radius: 4px;
margin: 0 auto;
margin-top: 20px;
margin-left: 55px;
cursor: pointer;
`;