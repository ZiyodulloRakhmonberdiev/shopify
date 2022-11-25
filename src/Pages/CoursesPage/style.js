import styled from "styled-components";
export const CoursePageWrapper = styled.div`
width: 100%;
width: 100%;
`;
export const Header = styled.div`
width: 101%;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Btn = styled.div`
height: 20px;
&:nth-child(1){
    margin-left: 7px;
}
&:nth-child(1){
    margin-left: 7px;
}
svg path {
    stroke: #fff !important;
  }
`;
export const OrdersTitle = styled.div`
color: #00C48C;
display: flex;
align-self: center;
font-size: 14px;
font-weight: 500;
line-height: 14.12px;
.starter{
    color: #BBC2D0;
    line-height: 13.92px;
    display: flex;
    align-items: center;
}

`;
export const Title = styled.div`
/* color: #262728;
font-size: 16px;
font-weight: 600;
font-family: 'Gilory',sans-serif;
line-height: 19.09px; */
color: #3D639D;
font-size: 21px;
font-weight: 600;
line-height: 26.25px;

`;
export const SearchWrapper = styled.div`
width: 100%;
height: 50px;
margin: 7px 0;
display: flex;
align-items: center;
justify-content: space-between;

`;
export const Input = styled.input`
height: 100%;
width: 90%;
border-radius: 30px 0 0 30px;
outline: none;
border: 0;
padding: 0 30px;
font-size: 16px;
font-weight: 400;
font-family: 'Gilory',sans-serif;
line-height: 18.83px;
letter-spacing: -0.3 px;
margin: 20px 0;
`;
export const SearchButton = styled.div`
width: 10%;
height: 45px;
background-color: #00C48C;
border-radius: 0px 26px 26px 0px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;


`;
export const Select = styled.select`
  background-color: rgb(0, 32, 53);

`;
export const Option = styled.option`
  background-color: rgb(0, 32, 53);

`;