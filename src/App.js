import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layouts/Navigationbar/app";
import Sidebar from "./Layouts/Sidebar/app";
import { Container, MainPageWrapper, RouteWrapper } from "./AppStyles";
import CheckoutOrders from "./Pages/CheckoutOrders";
import OrderDisplay from "./Components/OrderCheckout/index";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/OrdersPage";
import Courses from "./Pages/CoursesPage";
import CourseCheckout from "./Components/CourseCheckout";
import Login from "./Pages/LoginPage/index";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <MainPageWrapper>
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <RouteWrapper isOpen={isSidebarOpen}>
        <Container>
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/orders"} element={<Orders />}>
              <Route path=":id" element={<OrderDisplay />} />
            </Route>
            <Route path="/courses" element={<Courses />}>
              <Route path=":id" element={<CourseCheckout />} />
            </Route>
            <Route path={"/checkout"} element={<CheckoutOrders />} />
            <Route path={"/login"} element={<Login />} />
          </Routes>
        </Container>
      </RouteWrapper>
    </MainPageWrapper>
  );
}

export default App;
