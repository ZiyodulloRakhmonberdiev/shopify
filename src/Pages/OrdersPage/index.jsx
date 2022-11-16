import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses, deleteCourse } from "../../Redux/features/courses/coursesAction"
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ReactComponent as EditSvg } from '../../Assets/assets/main/edit.svg';
import { ReactComponent as DeleteSvg } from '../../Assets/assets/main/udalit.svg';
import {ReactComponent as ArrowRight} from "../../Assets/assets/main/Arrow - Right.svg"
import { PageTitle } from '../../Components/styles/styles'
import { Container, Table, TableWrapper, TBody, TD, TH, THead, TRow, EditBtn, DeleteBtn, Status } from "../../Components/styles/styles";
import AddCoursePage from "../../Components/AddCoursePage";
import EditCoursePage from "../../Components/EditCoursePopUp";
import { ActionBtn, SidePage } from '../../Components/styles';
import { OrdersTitle, OrdersPageWrapper, Title, Btn } from './styles'


const Orders = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [edit, setEdit] = useState({ item: {}, toggle: false });
    const { data, loading, error } = useSelector((state) => state.course)
    const {width} = useWindowDimensions()

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCourses())
    }, [])
  return (
    <OrdersPageWrapper>
        <OrdersTitle>
        <div className="starter">
            Заказы <ArrowRight />{" "}
          </div>
          измениты заказ
        </OrdersTitle>
        <PageTitle> измениты заказ</PageTitle>

        <SidePage
                isOpen={isOpen}
                width={ width > "900px" ? '100%' : "500px"}
                close={() => {setIsOpen(false); setEdit({toggle:false})}}>
                {edit.toggle !== false ?
                    <EditCoursePage
                        edit={edit}
                        editAction={setEdit}
                        openAction={setIsOpen} />
                    : <AddCoursePage />
                }
            </SidePage>
            <ActionBtn
                    bg={'rgb(0, 32, 53)'}
                    text={'добавить заказ'}
                    action={() => setIsOpen(true)} />
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
                                <TH >
                                {/* Редактировать */}
                                <Btn className='edit-svg'><EditSvg /></Btn>
                                </TH>
                                <TH>
                                {/* Удалить */}
                                <Btn className='edit-svg'><DeleteSvg /></Btn>
                                </TH>
                            </TRow>
                        </THead>
                        <TBody>
                            {data?.map((item, index) => (
                                <TRow key={item.id}>
                                    <TD>{index + 1}</TD>
                                    <TD>
                                        <img alt={'img'} src={`http://localhost:3005/courses/${item.image}`} />
                                    </TD>
                                    <TD>{item.name}</TD>
                                    <TD>{item.category}</TD>
                                    <TD>{item.description}</TD>
                                    <TD>{item.author}</TD>
                                    <TD>
                                        <Status style={
                                            item.status.toLowerCase().trim() === 'active' ? { backgroundColor: "#6cb680" }
                                                : { backgroundColor: "#ff2020" }} active={item.status}>
                                            {item.status}
                                        </Status>
                                    </TD>
                                    <TD>{item.date}</TD>
                                    <TD>
                                        <EditBtn
                                            onClick={() => {
                                                setIsOpen(true);
                                                setEdit({ ...edit, item: item, toggle: true })
                                            }}
                                        >
                                            <EditSvg />
                                        </EditBtn>
                                    </TD>
                                    <TD>
                                        <DeleteBtn
                                            onClick={() => dispatch(deleteCourse(item.id))}
                                        >
                                            <DeleteSvg />
                                        </DeleteBtn>
                                    </TD>
                                </TRow>
                            ))}
                        </TBody>

                    </Table>
                </TableWrapper>
    </OrdersPageWrapper>
  )
}

export default Orders