import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCourses,
  deleteCourse,
} from "../../Redux/features/courses/coursesAction";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import moment from "moment";
import { ReactComponent as EditSvg } from "../../Assets/assets/main/edit.svg";
import { ReactComponent as DeleteSvg } from "../../Assets/assets/main/udalit.svg";
import { ReactComponent as SearchSvg } from "../../Assets/assets/main/Search.svg";
import { ReactComponent as ArrowRight } from "../../Assets/assets/main/Arrow - Right.svg";
import { PageTitle } from "../../Components/styles/styles";
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
import AddOrderDrawer from "../../Components/AddOrderDrawer";
import EditOrderDrawer from "../../Components/EditOrderDrawer";
import { ActionBtn, SidePage } from "../../Components/styles";
import Loading from "../../Components/Loader";
import ErrorBox from "../../Components/errorBox";
import EmptyBox from "../../Components/emptyBox";
import {
  OrdersTitle,
  OrdersPageWrapper,
  Btn,
  SearchButton,
  SearchWrapper,
  Input,
  Header,
  Title
} from "./styles";
import Pagination from "../../Components/Pagination";
import SearchTable from "../../Components/SearchOrderTable";

const Orders = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState({ item: {}, toggle: false });
  const { data, loading, error } = useSelector((state) => state.course);
  const posts = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [state, setState] = useState({ word: ``});
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  return (
    <OrdersPageWrapper>
      <OrdersTitle>
        <div className="starter">
          Заказы <ArrowRight />{" "}
        </div>
        измениты заказ
      </OrdersTitle>
      <Header>
        <Title> измениты заказ</Title>
        <ActionBtn
          bg={"rgb(0, 32, 53)"}
          text={"добавить заказ"}
          action={() => setIsOpen(true)}
        />
      </Header>
      <SidePage
        isOpen={isOpen}
        width={width > "900px" ? "100%" : "600px"}
        close={() => {
          setIsOpen(false);
          setEdit({ toggle: false });
        }}
      >
        {edit.toggle !== false ? (
          <EditOrderDrawer
            edit={edit}
            editAction={setEdit}
            openAction={setIsOpen}
          />
        ) : (
          <AddOrderDrawer />
        )}
      </SidePage>
      <SearchWrapper>
        <Input
          onChange={(e) => setState({ ...state, word: e.target.value })}
          type={"search"}
          placeholder={"Поиск по називанию товара"}
        />
        <SearchButton>
          <SearchSvg />
        </SearchButton>
      </SearchWrapper>
    {
    state.word ? <SearchTable word={state.word}/>
    :
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
            {/* Редактировать */}
            <Btn className="edit-svg">
              <EditSvg />
            </Btn>
          </TH>
          <TH>
            {/* Удалить */}
            <Btn className="edit-svg">
              <DeleteSvg/>
            </Btn>
          </TH>
        </TRow>
      </THead>
      <TBody>
        {currentPosts?.map((item, index) => (
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
                  setIsOpen(true);
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
    }

      
      {loading && <Loading />}
      {error === false && loading === false && data.length === 0 && (
        <EmptyBox item="Courses" />
      )}
      {error && <ErrorBox />}
      <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
    </OrdersPageWrapper>
  );
};

export default Orders;
