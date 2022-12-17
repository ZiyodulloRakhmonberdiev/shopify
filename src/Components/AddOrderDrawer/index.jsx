import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../Redux/features/courses/coursesAction";
import {
  getAllCategories,
  createCategory,
} from "../../Redux/features/category/categoryAction";
import {
  FormInner,
  Input,
  InputGroupWrapper,
  InputWrap,
  Labels,
  Select,
  TitleWrapper,
  Option,
  CourseWrapper,
  CourseInner,
} from "./styles";
import { ActionBtn } from "../styles";
import { ActionButtonWrapper, FileInput } from "../styles/styles";
import UploadImage from "../../Assets/assets/main/upload-file.png";
import { useEffect } from "react";

const AddCoursePage = ({ action }) => {
  const { data, loading, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const [state, setState] = useState({
    name: "",
    courseTitle: "",
    category: "",
    contact: null,
    payment: null,
    status: "",
    price: null,
  });

  const addCourse = (e) => {
    e.preventDefault();
    const { name, courseTitle, category, contact, payment, status, price } =
      state;
    const formData = {
      name: name,
      courseTitle: courseTitle,
      category: category,
      contact: contact,
      payment: payment,
      price: price,
      status: status,
    };

    if (
      (name === "") |
      (courseTitle === "") |
      (category === "") |
      (payment === null) |
      (contact === null) |
      (status === "") |
      (price === null)
    ) {
      console.log("formData is Empty");
    } else {
      dispatch(createCategory(formData)).unwrap();
      console.log(formData, "success...");
    }
  };

  return (
    <CourseWrapper>
      <CourseInner
        onSubmit={addCourse}
        //  autoComplete="off"
      >
        <TitleWrapper>Добавить Заказ</TitleWrapper>
        <FormInner>
          <InputGroupWrapper>
            <InputWrap>
              <Labels>Имя</Labels>
              <Input
                type="text"
                placeholder={"Имя"}
                onChange={(e) => setState({ ...state, name: e.target.value })}
                required
              />
            </InputWrap>
            <InputWrap>
              <Labels>Категория</Labels>
              <Select
                onChange={(e) =>
                  setState({ ...state, category: e.target.value })
                }
                required
              >
                {data.map((item) => (
                  <option key={item.id} value={`${item.id}`}>
                    {" "}
                    {item.name}
                  </option>
                ))}
              </Select>
            </InputWrap>
          </InputGroupWrapper>
          <InputGroupWrapper>
            <InputWrap>
              <Labels>Название курса</Labels>
              <Select
                onChange={(e) =>
                  setState({ ...state, courseTitle: e.target.value })
                }
                required
              >
                {data.map((item) => (
                  <option key={item.id} value={`${item.name}`}>
                    {" "}
                    {item.name}
                  </option>
                ))}
              </Select>
            </InputWrap>
            <InputWrap>
              <Labels>Оплата</Labels>
              <Input
                type="number"
                placeholder={"Автор"}
                onChange={(e) =>
                  setState({ ...state, payment: e.target.value })
                }
                required
              />
            </InputWrap>
          </InputGroupWrapper>
          <InputGroupWrapper>
            <InputWrap>
              <Labels>Статус</Labels>
              <Select
                name={"Статус"}
                onChange={(e) => setState({ ...state, status: e.target.value })}
                required>
                <Option value={"active"}>active</Option>
                <Option value={"inActive"}>InActive</Option>
              </Select>
            </InputWrap>
          </InputGroupWrapper>
        </FormInner>
        <ActionButtonWrapper>
          <ActionBtn
            type={"button"}
            bg={"#bd0505"}
            text={"отменить"}
            action={action}
          />
          <ActionBtn bg={"#173e3c"} text={"Отправить"} />
        </ActionButtonWrapper>
      </CourseInner>
    </CourseWrapper>
  );
};

export default AddCoursePage;
