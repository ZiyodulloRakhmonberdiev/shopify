import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editOrder} from '../../Redux/features/orders/ordersAction';
import { ActionBtn } from "../styles";
import { ActionButtonWrapper, FileInput } from "../styles/styles";
import UploadImage from "../../Assets/assets/main/upload-file.png"
import {
    FormInner,
    Input, InputGroupWrapper,
    InputWrap,
    Labels,
    Select,
    TitleWrapper,
    Option, CourseWrapper, CourseInner,
} from "./styles";

const EditOrderDrawer = ({ edit, editAction, openAction,setRefreshKey,refreshKey}) => {
    const {item} = edit
    const [state, setState] = useState(item)
    const {data} = useSelector((state) => state.order)
    const dispatch = useDispatch()

    const updateCourse = (e) => {
        e.preventDefault()
        const { image, name, category, description, author, status, price } = state;
        const formData = {
            id:item.id,
            image: image,
            name: name,
            category: category,
            author: author,
            description: description,
            price: price,
            status: status,
            createdAt: Date.now(),
        }
        if (
            name === ""
            | category === "" | description === ""
            | author === "" | status === ""
            | price === null) {
            console.log("something is Empty")
        } else {
            dispatch(editOrder(formData))
            setRefreshKey(Math.floor(Math.random() * 100))

        }
    }
   
    return (
        <CourseWrapper>
            <CourseInner
                onSubmit={updateCourse}
                autoComplete="off" >
                <TitleWrapper>
                Редактировать Заказ
                </TitleWrapper>
                <FormInner>
                    <FileInput>
                        <div className="img">
                            <img alt={'upload image'} src={UploadImage} />
                        </div>
                        <Input type="file"  value={state.image} onChange={(e) => setState({ ...state, image: e.target.files[0] })} />
                        <div className="txt">
                            <h3>Перетащите выберите или файл</h3>
                        </div>
                    </FileInput>
                    <InputGroupWrapper>
                       <InputWrap>
                           <Labels>Имя</Labels>
                           <Input
                               type="text"
                               placeholder={'Имя'}
                               value={state?.name}
                               onChange={(e) => setState({ ...state, name: e.target.value })}
                               required
                           />
                       </InputWrap>
                        <InputWrap>
                            <Labels>Категория</Labels>
                            <Select
                                onChange={(e) => setState({ ...state, category: e.target.value })}
                                value={state?.category}
                                required>
                                <Option value={""}></Option>
                                {data?.map((item)=>(
                                    <Option key={item.id} id={item.id} value={item.category}>{item.category}</Option>
                                ))}
                            </Select>
                        </InputWrap>
                    </InputGroupWrapper>
                    <InputGroupWrapper>
                        <InputWrap>
                            <Labels>Описание</Labels>
                            <Input
                                type="text"
                                placeholder={'Описание'}
                                value={state?.description}
                                onChange={(e) => setState({ ...state, description: e.target.value })}
                                required
                            />
                        </InputWrap>
                        <InputWrap>
                            <Labels>Автор</Labels>
                            <Input
                                type="text"
                                placeholder={'Автор'}
                                value={state?.author}
                                onChange={(e) => setState({ ...state, author: e.target.value })}
                                required
                            />
                        </InputWrap>
                    </InputGroupWrapper>
                    <InputGroupWrapper>
                            <InputWrap>
                                <Labels>Цена</Labels>
                                <Input
                                    type="number"
                                    placeholder={'Цена'}
                                    value={state?.price}
                                    onChange={(e) => setState({ ...state, price: e.target.value })}
                                    required
                                />
                            </InputWrap>
                            <InputWrap>
                                <Labels>Статус</Labels>
                                <Select
                                    name={'Статус'}
                                    value={state?.status}
                                    onChange={(e) => setState({ ...state, status: e.target.value })}
                                    required>
                                    <Option value={""}></Option>
                                    <Option value={'active'}>active</Option>
                                    <Option value={'inActive'}>InActive</Option>
                                </Select>
                            </InputWrap>
                    </InputGroupWrapper>
                </FormInner>
                <ActionButtonWrapper>
                    <ActionBtn
                        type={'button'}
                        bg={'#bd0505'}
                        text={'отменить'}
                        action={() => { editAction({ toggle: false }); openAction(false);}} />
                    <ActionBtn bg={'#173e3c'} text={'Отправить'}/>
                </ActionButtonWrapper>
            </CourseInner>
        </CourseWrapper>
    );
};

export default EditOrderDrawer;