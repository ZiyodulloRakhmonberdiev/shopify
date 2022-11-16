import React from "react";
import {
  ArrowIconBox,
  ArrowIconContainer,
  ArrowText,
  CloseSidebar,
  Icon,
  LinkName,
  SidebarWrap,
  LinkWrapper,
  Container,
} from "./style";
import { ReactComponent as CircleArrowIcon } from "../../Assets/assets/sidebars/circle-arrow.svg";
import { SidebarItems } from "../../Constants/sidebarItems";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useLocation, useParams } from "react-router-dom";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const { height, width } = useWindowDimensions();
  return (
    <SidebarWrap isOpen={isOpen}>
      <Container>
        {SidebarItems.map((item) =>
        // || (width > 610 && width < 1260)
          !isOpen   ? (
            <LinkWrapper
              selected={location.pathname === item.link}
              to={item.link}
              isOpen={isOpen}
              key={item.id}
            >
              <Icon selected={location.pathname === item.link} isOpen={isOpen}>
                {item.icon}
              </Icon>
              <LinkName
                selected={location.pathname === item.link}
                isOpen={isOpen}
              >
                {item.name}
              </LinkName>
            </LinkWrapper>
          ) : (
            <LinkWrapper
              selected={location.pathname === item.link }
              to={item.link}
              key={item.id}
            >
              <Icon selected={location.pathname === item.link} isOpen={isOpen}>
                {item.icon}
              </Icon>
              <LinkName
                selected={location.pathname === item.link}
                isOpen={isOpen}
              >
                {item.name}
              </LinkName>
            </LinkWrapper>
          )
        )}
        <CloseSidebar onClick={()=> {setIsOpen(!isOpen)}}>
                   <ArrowIconBox isOpen={isOpen}>
                       <ArrowIconContainer isOpen={isOpen}>
                           <CircleArrowIcon/>
                       </ArrowIconContainer> 
                        <ArrowText isOpen={isOpen} >Click here</ArrowText>
                   </ArrowIconBox>
               </CloseSidebar>
      </Container>
    </SidebarWrap>
  );
};
export default Sidebar;
