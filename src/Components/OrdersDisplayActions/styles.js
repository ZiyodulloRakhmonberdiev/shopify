import styled from "styled-components";
export const OrderDisplayActionWrapper = styled.div`


`;
export const Title = styled.div`
color: #00C48C;
font-size: 16px;
font-weight: 400;
line-height: 18.83px;
margin: 10px 0;
padding-left: 40px;

`;
export const Container = styled.div`
width: 91%;
margin: 20px auto;
position: relative;

`;
export const Header = styled.div`
display: flex;
align-items: center;

`;
export const Text = styled.div`
font-size: 16px;
font-weight: 500;
line-height: 18.45px;
margin: 10px 0;
padding-left: 20px;
`;
export const Button = styled.div`

height: 24px;
width: 24px;
border: 1px solid lightgray;
border-radius: 6px;
margin-left: auto;
cursor: pointer;
`;
export const BottomText = styled.div`
font-size: 16px;
color: #BBC2D0;
padding-left: 60px;

&::before{
    content: "";
    height: 1px;
    width: 100%;
    left: 0;
    bottom: -10px;
    position: absolute;
    background-color: #BBC2D0;
 
}
&:nth-child(3){
    display: none;
}

`;
export const SubmitButton = styled.div`
 width: 90%;
 margin: auto;
 background-color: #00C48C;
 height: 40px;
 border-radius: 26px;
 color: #fff;
 line-height: 19px;
 font-size: 16px;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor:pointer;
`;