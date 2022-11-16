import  styled from 'styled-components'
export const CourseWrapper = styled.div`
  @media only screen and (max-width: 610px) {
    height: 100%;
    width: 100%;
    display: flex;
    
  }
`;
export const CourseInner = styled.form`
  @media only screen and (max-width: 610px) {
    height: fit-content;
    width: 85%;
  }
`;
export const InputGroupWrapper = styled.div`
width: 100%;
margin: auto;
display: flex;
align-content: center;
justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border: 3px solid  #173e3c;
  border-radius: 8px;
  padding: 3px;

  @media only screen and (max-width: 610px) {
    width: 100%;
    height: 38px;
  }
`;
export const ContentWrapper = styled.div`

`;

export const InputWrap = styled.div`
  width: 45%;
  height: 35px;
  background-color: #173e3c;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 35px;

  @media only screen and (max-width: 610px) {
    height: 38px;
  }
`;
export const Select = styled.select`
  width: 100%;
  height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 3px solid  #173e3c;
 
`;
export const Option = styled.option`
  font-size: 14px;
  padding: 4px 0 !important;
  cursor: pointer;
`;

export const TitleWrapper = styled.h2`
position: absolute;
top: 40px;
left: 22px;
  @media only screen and (max-width: 610px) {
    text-align: center;
  }
`;
export const FormInner = styled.div`
margin-top: 25px;
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