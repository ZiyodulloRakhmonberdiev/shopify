import styled from "styled-components"
export const Container = styled.div`

`;
export const TableWrapper = styled.div`
    width: 100%;
  margin: 20px auto;
  overflow: auto;
  position: relative;
  @media only screen and (max-width: 1050px) {
    width: 100%;
    table {
      width: 1000px;
    }
  }
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
export const NotFound = styled.div`
height: 100%;
width: 100%;
text-align: center;
padding: 40px 0;
`;
