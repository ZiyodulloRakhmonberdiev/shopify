import React, { useState } from "react";
import { Route, Routes,Outlet } from "react-router-dom";
import Navbar from "./Layouts/Navigationbar/app";
import Sidebar from "./Layouts/Sidebar/app";
import { Container, MainPageWrapper, RouteWrapper } from "./AppStyles";
import "./App.css";
import CheckoutOrders from "./Pages/CheckoutOrders";
import OrderDisplay from "./Components/OrderCheckout/index";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/OrdersPage";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
    <MainPageWrapper>
      <Navbar/>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <RouteWrapper isOpen={isSidebarOpen}>
        <Container>
          <Routes>
           <Route path={"/"} element={<Dashboard/>} />
           <Route path={"/orders"} element={<Orders/>} />
            <Route path={"/checkout"} element={<CheckoutOrders />} >
             <Route path=":id" element={<OrderDisplay/>}/>
            </Route>
          </Routes>
        </Container>
      </RouteWrapper>
    </MainPageWrapper>
  );
}

export default App;
