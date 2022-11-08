import styled from "styled-components"
export const Navigationbar = styled.div`
height: 70px;
width: 100vw;
position: fixed;
left: 0;
top:0;
display:flex;
align-items:center;
margin-left: auto;
@media screen and (max-width: 600px) {
height: 50px;
}
z-index: 91;
 .search-menu {
  width: 260px;
  margin-top: 25px;
  position: absolute;
  right: 200px;
 }
`;
export const Logo = styled.div`
position: absolute;
top: 25px;
margin-left: 65px;
color: #535050;
font-size: 16px;
font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
font-weight: 400;
display: flex;
span{
position: relative;
text-shadow: 1px 1px 2px  #2b2b2b;
}
@media screen and (max-width: 600px) {
  margin-left: 20px;
}



`;
export const RightWrapper = styled.div`
width: 100%;

`;
export const BellIcon = styled.div`
height: 24px;
width:24px;
margin-left:auto;
margin-right:40px;
position:relative;
svg{
height: 100%;
width: 100%;
 @media screen and (max-width: 600px) {
    margin-top:7px;
   }
}
`;
export const NotificationAmount = styled.div`
    height: 16px;
    width: 16px;
    background-color:rgb(0,196,140);
    position:absolute;
    top:-10px;
    right:-4px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    font-size:11px;
    @media screen and (max-width: 600px) {
    margin-top:7px;
   }
   

`;

export const AdminWrap = styled.div`
height: 32px;
width: 32px;
border-radius: 50%;
svg{
height: 32px;
width: 32px;
}
`;
export const NavLeft = styled.div`
height: 70px;
width: 292px;
display:flex;
align-items:center;
justify-content:space-evenly;
border-radius: 0px 0px 0px 30px;
margin-left:auto;
background-color:#3D639D;
@media screen and (max-width: 600px) {
height: 50px;
width: 120px;
}
`;
export const AdminName = styled.div`
color:#ffffff;
font-size:16px;
line-height:18.56px;
@media screen and (max-width: 600px) {
 display: none;
}

`;
export const NavWrap = styled.div`
width: calc(100vw - 260px);
height: calc(100vh - 80px);
position: fixed;
right: 0;
bottom: 0;
z-index: 9;
background: #f0f2f5;

`;

export const Button = styled.div`
width: 30px;
height: 30px;
position: absolute;
top: 20px;
right: 20px;
cursor: pointer;
svg{
    height: 100%;
}
`;
export const SearchBtn = styled.div`
height: 33px;
width: 90px;
border-radius:  0 5px 5px 0;
background-color: black;
color: #fff;
font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: 183px;
margin-top: 25px;
cursor: pointer;
&:hover{
transition: 0.5s ease-in;
background-color: rgba(0,0,0,0.76);
}

`;
