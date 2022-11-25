import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrap = styled.div`
  height: calc(100vh - 70px);
  width: ${({ isOpen }) => (isOpen ? "263px" : "100px")};
  transition-duration: 0.5s;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: auto;
  background-color: rgb(0, 32, 53);

  border-top-right-radius: 30px;


  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  @media screen and (max-width: 600px) {
    height: 60px;
    width: 100vw;
    border: 0;
    border-radius: 0;
  }
`;
export const Container = styled.div`
  margin-top: 54px;
  @media screen and (max-width: 600px) {
    display: flex;
    margin-top: 0;
    align-items: center;
    justify-content: center;
    // padding-right: 60px;
    height: 100%;
  }
`;
export const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? "right" : "center")};
  align-items: center;
  /* margin:5px auto; */
  width: ${({ isOpen }) => (isOpen ? "70%" : "90%")};
  margin-left: ${({ isOpen }) => (isOpen ? "0" : "auto")};
  padding: 15px 0;
  border-radius: 30px 0 0 30px;
  &:hover {
    cursor: pointer;
  }
  text-decoration: none;
  background-color: ${({ selected }) =>
    selected ? " #fff" : "transparent"};
  @media screen and (max-width: 600px) {
    justify-content: center;
    margin-left: 0;
    border-radius: 30px 30px 30px;
    width: 15%;
  }
`;
export const Icon = styled.div`
  height: 20px;
  width: 20px;
  margin-left: ${({ isOpen }) => (isOpen ? "24px" : "0")};
  margin-right: ${({ isOpen }) => (isOpen ? "" : "10px")};

  /* stroke: antiquewhite; */
  svg {
    height: 100%;
    width: 100%;
    path {
      fill: ${({ selected }) => (selected ? "rgb(61,99,157)" : "#fff")};
    }
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;
export const LinkName = styled.div`
  transition-duration: 0.5s;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: ${({ isOpen }) => (isOpen ? "150px" : "0px")};
  color: ${({ selected }) => (selected ? " rgb(61,99,157)" : "#fff ")};
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
  margin-left: 7%;
  @media screen and (max-width: 600px) {
    display: none;
    width: fit-content;
  }
`;
export const CloseSidebar = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 0;
  height: 75px;
  //background-color: lightgrey;
  /* border-radius: 0 100px 100px 0; */
  @media only screen and (max-width: 1260px) {
    transition: all .5s ease;
    display: none;
    
  }
`;
export const ArrowIconBox = styled.div`
  height: 30px;
  width: 90%;
  margin-left: auto;
  padding: 20px;
  //background-color: #afafaf;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  border-radius: 50px;
  cursor: pointer;
`;
export const ArrowIconContainer = styled.div`
  width: 23px;
  height: 23px;
  transform: rotate(${({ isOpen }) => (!isOpen ? "180deg" : "0")});
  transition-duration: 0.7s;
  margin-left: ${({ isOpen }) => (isOpen ? "18px" : "0px")};
  margin-right: ${({ isOpen }) => (isOpen ? "0" : "10px")};


  svg{
    width: 100%;
    height: 100%;
  }

`;
export const ArrowText = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
  color: #fff;
  width: 150px;
  width: ${({ isOpen }) => (isOpen ? "150px" : "0px")};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  // opacity: ${({ isOpen }) => (!isOpen ? "0" : "1")};
  overflow: hidden;
  transition-duration: 0.7s;
  margin-left: 15px;
`;
