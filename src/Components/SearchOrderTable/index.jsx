import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllCourses,
    deleteCourse,
  } from "../../Redux/features/courses/coursesAction";
import { ReactComponent as EditSvg } from "../../Assets/assets/main/edit.svg";
import { ReactComponent as DeleteSvg } from "../../Assets/assets/main/udalit.svg";
import moment from "moment";
import {
    Container,
    Table,
    TableWrapper,
    TBody,
    TD,
    TH,
    THead,
    TRow,
    EditBtn,
    DeleteBtn,
    Status,
  } from "../../Components/styles/styles";
 import {NotFound,Btn} from "./style" 

const SearchTable = (data) => {
  const [edit, setEdit] = useState(null);
  const [popUp, setPopUp] = useState({ cancel: false });
  const dispatch = useDispatch()

  return (
    <Container>
      {/* {popUp.cancel ? (
                <PopUp
                    firstTitle={'Name'}
                    secondTitle={'PhoneNumber'}
                    thirdTitle={'Address'}
                    setPopUp={setPopUp}
                    edit={edit}
                />
            ) : ""
            } */}
      {data?.length === 0 ? (
        <NotFound>
          <h1>nothing found</h1>{" "}
        </NotFound>
      ) : (
        <TableWrapper>
          <Table>
            <THead>
              <TRow>
                <TH>#</TH>
                <TH>Фото</TH>
                <TH>Имя</TH>
                <TH>Категория</TH>
                <TH>Описание</TH>
                <TH>Автор</TH>
                <TH>Статус</TH>
                <TH>Даты</TH>
                <TH>
                  <Btn className="edit-svg">
                    <EditSvg />
                  </Btn>
                </TH>
                <TH>
                  <Btn className="edit-svg">
                    <DeleteSvg />
                  </Btn>
                </TH>
              </TRow>
            </THead>
            <TBody>
              {data.data?.map((item, index) => (
                <TRow key={item.id}>
                  <TD>{index + 1}</TD>
                  <TD>
                    <img
                      alt={"img"}
                      src={`http://localhost:3005/courses/${item.image}`}
                    />
                  </TD>
                  <TD>{item.name}</TD>
                  <TD>{item.category}</TD>
                  <TD>{item.description}</TD>
                  <TD>{item.author}</TD>
                  <TD>
                    <Status
                      style={
                        item.status.toLowerCase().trim() === "active"
                          ? { backgroundColor: "#6cb680" }
                          : { backgroundColor: "#ff2020" }
                      }
                      active={item.status}
                    >
                      {item.status}
                    </Status>
                  </TD>
                  <TD>{moment(item.date).format("L")}</TD>
                  <TD>
                    <EditBtn
                      onClick={() => {
                        // setIsOpen(true);
                        setEdit({ ...edit, item: item, toggle: true });
                      }}
                    >
                      <EditSvg />
                    </EditBtn>
                  </TD>
                  <TD>
                    <DeleteBtn onClick={() => dispatch(deleteCourse(item.id))}>
                      <DeleteSvg />
                    </DeleteBtn>
                  </TD>
                </TRow>
              ))}
            </TBody>
          </Table>
        </TableWrapper>
      )}
    </Container>
  );
};

export default SearchTable;
