import styled from "styled-components";
import {Link} from "react-router-dom"

export const CardWrapper = styled.div`
 width: 180px;
 height: 250px;
 background-color: #fff;
 margin: 5px 0;
 border-radius: 6px;
 text-decoration: none;
 @media screen and (max-width: 500px) {
     margin: 10px auto;
     width: 45%;
     height: fit-content;
     padding: 15px 5px;
     padding-top: 0 !important;
  }
  @media screen and (max-width: 400px) {
     width: 70%;
    
  }
  
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