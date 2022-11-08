import styled from "styled-components";
export const PaginationWrapper = styled.div`
width: 100%;
margin-top: 20px;
@media screen and (max-width: 600px) {
  padding-bottom: 60px;
  
  }

.pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: rgba(216, 73, 73, 0.2); */
    width: 100%;
    font-weight: 500;
    font-size: 15px;
    position: relative;
  }
  
  .pagination-container a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    /* padding: 8px 14px; */
    height: 40px;
    width: 40px;
    text-decoration: none;
    transition: background-color .2s;
    cursor: pointer;
    &:nth-child(1){
      position: absolute;
      left: 0;
    }
    &:nth-last-child(-1){
     
    }
    
  }
  .last{
    position: absolute;
    right: 0;
  }
  
  .pagination-container a.active {
    background-color: #00C48C;
    color: white;
    border-radius: 10px;
    font-family: 16px;
  }
  
  .pagination-container a.disabled { 
    opacity: 0.2;
  }
  .pagination-container a:hover:not(.active) {background-color: rgb(238, 238, 238);}
`;