import styled from "styled-components";
export const MainPageWrapper  = styled.div`
height:100%;
width:100vw;
`;
export const RouteWrapper = styled.div`
height: calc(100vh - 100px);
width: calc(100% - ${({isOpen}) => isOpen ? "320px" : "150px"});
transition-duration: 0.5s;
margin-left:auto;
margin-right:32px;
margin-top:90px;
padding: 2px;
background-color: #F3F5F8;
border-radius: 6px;
overflow: auto;

@media screen and (max-width:600px) {
    width: 100%;
    margin-top: 70px;
 }

 @media screen and (max-width:500px) {
    margin-top: 60px;
 }
`;

export const Container = styled.div`
width:95%;
margin:20px auto;
`;