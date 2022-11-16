import React from "react";
import {SidePageBackground, SidePageWrapper, SidePageTitle, CloseSidePage, Button,} from "./styles"
import { ReactComponent as X } from "../../Assets/assets/main/x.svg";

// Drawer
export const SidePage = ({ isOpen, children, close, title, width }) => {
    return (
      <>
        <SidePageBackground onClick={close} isOpen={isOpen} />
        <SidePageWrapper width={width} isOpen={isOpen}>
          <SidePageTitle>{title}</SidePageTitle>
          <CloseSidePage onClick={close}>
            <X />
          </CloseSidePage>
          {children}
        </SidePageWrapper>
      </>
    );
};

// Action Buttons
export const ActionBtn = ({text,action,bg,submit,children,type}) => {
    return(
        <>
        {children ? children
        :
          <Button 
          onClick={action} 
          onSubmit={submit}
          style={{backgroundColor:`${bg}`}}
          type={type}
          >
              {text}
          </Button>}
        
        </>
    )
}
