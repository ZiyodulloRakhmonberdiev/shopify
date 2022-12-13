import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/api";
import axios from "axios";
import {
  Button,
  ButtonWrapper,
  Container,
  Content,
  Input,
  InputWrap,
  Labels,
  LoginPageWrapper,
  Title,
} from "./styles";
import { authorization } from "../../Redux/features/getMe/authAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitLogin = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target;
    console.log(email, password);
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(`${BASE_URL}/auth`, data)
      .then((res) => {
        const token = res.data;
        localStorage.setItem("token", token);
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
    // dispatch(
    //   authorization({
    //     data: {
    //       email,
    //       password,
    //     },
    //   })

    // );
  };
  return (
    <LoginPageWrapper onSubmit={submitLogin} autoComplete="on">
      <Container>
        <Content>
          <Title>Enter the CRM system</Title>
          <InputWrap>
            <Labels>Email</Labels>
            <Input name={"email"} type="email" placeholder={"email"} />
          </InputWrap>
          <InputWrap>
            <Labels>Password</Labels>
            <Input name={"password"} type="password" placeholder={"password"} />
          </InputWrap>
          <ButtonWrapper>
            <Button>Enter</Button>
          </ButtonWrapper>
        </Content>
      </Container>
    </LoginPageWrapper>
  );
};

export default Login;
