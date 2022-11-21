import styled from "styled-components";

export const Container = styled.div`
width: 90%;
margin: 20px auto;
`;
// Side Page styles
export const SidePageBackground = styled.div`
  height: 100vh;
  width: 100vw;
  transition-duration: .3s;
  backdrop-filter: blur(5px);
  
  position: fixed;
  right: ${({isOpen, width}) => isOpen ? "0px" : `-${width ? width : "100vw"}`};
  bottom: 0;
    z-index:9999;

`;

export const SidePageWrapper = styled.div`
  width: ${({width}) => (width ? width : "500px")};
  height:100vh;
  position: fixed;
  bottom: 0;
  right: ${({isOpen, width}) => isOpen ? "0px" : `-${width ? width : "500px"}`};
  bottom: 0;
  padding: 60px 20px;
  overflow: auto;
  transition-duration: 0.5s;
  z-index:9999;
  /* background-color: #96acda; */
  background-color: #f9fafc;


  @media only screen and (max-width: 900px) {
    width: ${({width}) => (width ? "100%" : "500px")};
  }
  @media only screen and (max-width: 610px) {
    width: 100%;
  }
`;

export const SidePageTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
`;

export const CloseSidePage = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 9;
@media only screen and (max-width: 610px){
  top: 30px;
  right: 30px;
}
`;



export const CancelOrder = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid red;
  position: absolute;
  top: -10px;
  left: -0px;
  padding: 8px;
  border-radius: 50%;
  display: none;
  color: red;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    margin: auto;
    path {
      stroke: red;
    }
  }
  &:hover {
    background-color: red;
    svg {
      path {
        stroke: white;
      }
    }
  }
`;

// Table styles

export const TableWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  overflow: auto;
  @media only screen and (max-width: 1050px) {
    width: 100%;
    table {
      width: 1000px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 20px;
  td,
  th {
    padding: 10px;
  }
`;

export const THead = styled.thead`
  width: 100%;
  tr {
    background-color:  rgb(0, 32, 53);
   
    th {
      color: #fff;
      font-size: 13px;
      font-family: 'Lucida Sans',sans-serif;
      padding: 20px 10px;
      font-weight: 400;
      &:last-child {
        border-top-right-radius: 10px;
      }
      &:first-child {
        border-top-left-radius: 10px;
      }
    }
  }
`;
export const TBody = styled.tbody`
  width: 100%;
  tr {
    border-left: 1px solid black;
    transition-duration: 0.5s;
    &:hover {
       background-color: rgba(2, 46, 75, 0.452);
    }
  }
`;


export const TFoot = styled.tfoot`
  width: 100%;
  tr {
    border-right: 1px solid black;
    border-left: 1px solid black;
  }
  font-weight: bold;
`;

export const TRow = styled.tr`
  width: 100%;
  background-color:#fff;
  position: relative;
  &:hover {
    .cursor-order {
      display: flex;
    }
  }
`;

export const TD = styled.td`
  font-size: 13px;
  font-family:sans-serif;
  border-bottom: 1px solid black;
  padding: 15px;
  text-align: center;
  
`;
export const Status = styled.div`
color: #fff;
padding: 4px 5px;
border-radius: 36px;
display: flex;
align-items: center;
justify-content: center;
`;

export const TH = styled.th``;


export const EditBtn = styled.div`
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 30%;
cursor: pointer;
transition-duration: 0.5s;

&:hover {
    svg path {
      stroke: #009000;
    }
  }

svg{
  height: 100%;
}
`;
export const DeleteBtn = styled.div`
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 30%;
cursor: pointer;
transition-duration: 0.5s;

&:hover {
    svg path {
      stroke: red;
    }
  }

svg{
  height: 100%;
}
`;
export const ActionButtonWrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
position:absolute;
bottom: 30px;
left: 25px;
`;


export const Button = styled.button`
color: #fff;
font-size: 14px;
width: 120px;
height: 35px;
font-family:sans-serif;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
border-radius: 3px;
outline: none;
border: 0;
cursor: pointer;
margin: 15px;

`;

export const FileInput = styled.label`
  width: 60%;
  margin: 15px 0;
  margin-top: 50px;
  padding: 5px;
  padding-left: 15px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 3px solid #173e3c;
  input{
   display: none;
   padding: 10px;
   border:none;
   }
   .txt{
     width:100%;
     height:fit-content;
     padding:10px;
     line-height:23px;
     h3{
       font-size:17px;
       color:black;
       font-family:'Poppins',sans-serif;
     }
     p{
       font-size:12px;
       color:black;
       font-weight:bold;
       span{
         color:green;
         border-bottom:1px solid green;
         font-weight:bold;
       }
     }
   }
   img{
     width:140px;
     height:140px;
     width: fit-content;
     display: block;
     margin: auto;
   }
   .img{
     width:40px;
     height: 40px;
     img{
      height: 100%;
      width: 100%;
     }
   }
`;
export const PageTitle = styled.p`
color: #3D639D;
font-size: 21px;
font-weight: 600;
line-height: 26.25px;
margin-top: 35px;
`;
