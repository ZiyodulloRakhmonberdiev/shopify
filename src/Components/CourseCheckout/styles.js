import styled from "styled-components";
export const OrderDisplayWrapper = styled.div``;
export const CheckoutTitle = styled.div`
  color: #00c48c;
  display: flex;
  align-self: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.12px;
  .starter {
    color: #bbc2d0;
    line-height: 13.92px;
    display: flex;
    align-items: center;
  }
`;
export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 5px 0;
  border-radius: 16px;
  padding: 15px 0;
  position: relative;
`;
export const Wrapper = styled.div`
width: 100%;
height: fit-content;
display: flex;
position: relative;
margin-top: 50px;
`;
export const ProductTitle = styled.div`
  color: #3d639d;
  font-size: 21px;
  font-weight: 500;
  font-family: "Gilory", sans-serif;
  line-height: 26.25px;
  margin-left: 30px;
  margin-top: 20px;
  
`;
export const ProductCart = styled.div`
 height: 55px;
 width: 55px;
 margin-left: auto;
 margin-right: 30px;
 position: absolute;
 right: 0px;
 top: -20px;
 cursor: pointer;
 @media screen and (max-width: 600px) {
  height: 35px;
 width: 35px;
 top: -26px;

 }
 svg{
  height: 100%;
  width: 100%;
 }
 
`;

export const MainSection = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1086px) {
    flex-direction: column;
  }
   @media screen and (max-width: 600px) {
      width: 90%;

  }
`;
export const ImageSide = styled.div`
  width: 45%;
  height: 350px;
  margin: 10px;
  background-color: #f3f5f8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 16px;
  @media screen and (max-width: 1086px) {
    width: 70%;
    margin: auto;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: fit-content;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Image = styled.img`
  height: 80%;
  width: fit-content;
  margin: auto;
`;

export const CardTools = styled.div`
  position: absolute;
  left: 5%;
  top: 5%;
`;
export const CardToolOne = styled.div`
  height: 38px;
  width: 38px;
  cursor: pointer;
`;
export const CardToolSecond = styled.div`
  height: 38px;
  width: 38px;
  cursor: pointer;
`;
export const ContentSide = styled.div`
  width: 51%;
  margin-top: 10px;
  @media screen and (max-width: 1086px) {
    width: 70%;
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const OrderPrice = styled.div`
  margin-top: 10px;
`;
export const TotlePrice = styled.div`
  padding: 20px 0;
`;
export const PriceTitle = styled.div`
  color: #bbc2d0;
  font-size: 16px;
  font-family: "Gilory", sans-serif;
  font-weight: 400;
  line-height: 18.56px;
  padding-bottom: 5px;
`;
export const Price = styled.div`
  color: #262728;
  font-size: 16px;
  font-family: "Gilory", sans-serif;
  font-weight: 600;
  line-height: 19.09px;
`;
export const OverallPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const OrderAmountAndPriceWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 20px;
margin-top: 20px;

 .one{
color: #fff;
padding: 3px 5px;
background-color: #FF647C;
border-radius: 3px;

 }
 .second{
 color: gray;
 font-size: 13px;
 font-weight: 400;
 margin: 0 5px;
 }
`;
export const SelectOption = styled.div`
width: 95%;
height: 40px;
margin: 0 auto 10px 0px;
border: 1px solid #00C48C;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Option = styled.div`
color: #00C48C;
font-size: 15px;
font-weight: 400;
line-height: 17.4px;
letter-spacing: 0.3;
height: 100%;
width: calc(100% / 4);
text-align: center;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
  color: #fff;
  background-color: #00C48C;
  transition: .5s;

}
&:before{
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: #00C48C;
  margin-left:110px;
  @media screen and (max-width: 500px) {
  margin-left:70px;
   
  }
}
&:nth-child(4){
  &:before{
  display: none;
}
 }
`;
export const SelectedDiscount = styled.div`
color: #262728;
font-size: 16px;
font-weight: 400;
line-height: 18.56px;
text-align: center;
span{
  font-weight: 600;
  line-height: 19.09px;
}
`;
export const AllOrderCharacters = styled.div`
margin-top: 25px;
`;
export const TitleCharacter = styled.div`
color: #BBC2D0;
font-size: 16px;
font-weight: 400;
line-height: 18.56px;
padding-bottom: 10px;
`;
export const Characters = styled.div`
color: #262728;
font-size: 16px;
font-weight: 400;
line-height: 18.56px;
`;
export const ShowAll = styled.div`
color: #00C48C;
font-size: 15px;
font-weight: 500;
line-height: 19.09px;
margin-top: 15px;
`;
