import styled from "styled-components"
import {Link} from "react-router-dom"

export const CheckoutOrdersWrapper = styled.div`
width: 100%;
margin: auto;
`;
export const CheckoutTitle = styled.div`
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
export const SearchWrapper = styled.div`
width: 100%;
height: 45px;
margin: 20px 0;
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
width: 100px;
height: 45px;
background-color: #00C48C;
border-radius: 0px 26px 26px 0px;
display: flex;
align-items: center;
justify-content: center;

`;
export const ProductTitle = styled.div`
color: #262728;
font-size: 16px;
font-weight: 600;
font-family: 'Gilory',sans-serif;
line-height: 19.09px;
`;
export const ProductWrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
 margin-top: 20px;
@media screen and (max-width: 500px) {
    justify-content: center;
  }

`;
export const CardWrapper = styled.div`
 width: 180px;
 height: 250px;
 background-color: #fff;
 margin: 5px 0;
 border-radius: 6px;
 text-decoration: none;
`;

export const CardImageWrapper = styled.div`
 width: 150px;
 height: 140px;
 background-color: #F7F7F7;
 margin: 13px auto;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 6px;
 position: relative;
 img{
    height: 90%;
    width: fit-content;
 }
`;
export const CardTools = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
`;
export const CardToolOne = styled.div`
  height: 28px;
  width: 36px;
  cursor: pointer;
`;
export const CardToolSecond = styled.div`
  height: 28px;
  width: 36px;
  cursor: pointer;
  margin-top: 5px;
`;
export const CardTitle = styled.div`
  position: relative;
  height: 20px;
  width: 90%;
  margin: auto;
  overflow: hidden;

  
`;
export const TitleInner = styled.h4`
  width: 300px;
  left: 6px;
  overflow-x: hidden !important; 
  position: absolute;
  color: #262728;
  font-family: 'Gilory',sans-serif;
  font-weight: 400;
  line-height: 17.4px;
  font-weight: 400;
  position: absolute;
  font-size: 15px;
  font-family: regular;
  line-height: 100%;
  letter-spacing: 0.3px;
  /* word-break: keep-all !important; */
`;

export const ProductPrice = styled.p`
  margin-top: 5px;
  margin-left: 15px;
  color: #262728;
  font-family: 'Gilory',sans-serif;
  font-weight: 400;
  line-height: 17.4px;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0.3px;
  /* word-break: keep-all !important; */
`;
export const DiscountPrice = styled.div`
  margin-top: 5px;
  height: 20px;
  margin-left: 15px;
  color: #262728;
  font-family: 'Gilory',sans-serif;
  font-weight: 400;
  line-height: 15.51px;
  font-weight: 400;
  font-size: 13px;
  
  line-height: 100%;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  .main{
    color: #fff;
    background-color: #FF647C;
    padding: 4px;
  }

  /* word-break: keep-all !important; */
`;
export const ProductAmount = styled.p`
  color: #BBC2D0;
  font-size: 10px;
  font-family: 'Gilory',sans-serif;
  font-weight: 400;
  margin-left: 5px;
`;