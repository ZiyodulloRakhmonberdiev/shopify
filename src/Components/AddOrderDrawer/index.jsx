import React, {useState} from 'react';
import {useDispatch} from "react-redux"
import { createCourse } from '../../Redux/features/courses/coursesAction';
import {
    FormInner,
    Input, InputGroupWrapper,
    InputWrap,
    Labels,
    Select,
    TitleWrapper,
    Option, CourseWrapper, CourseInner,
} from "./styles";
import {ActionBtn} from "../styles";
import {ActionButtonWrapper,FileInput} from "../styles/styles";
import UploadImage from "../../Assets/assets/main/upload-file.png"

const AddCoursePage = ({action}) => {
    const dispatch = useDispatch()
  const [state,setState ] = useState({
        image:'',
        name:'',
        category:'',
        description:'',
        author:'',
        status:'', 
        price:null
    })


  const addCourse = (e) => {
        e.preventDefault()
        const {image, name, category, description,author,status, price } = state;
        const formData = {
            image:image,
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
             | price === null )
        {
           console.log("formData is Empty")

        } else{
            dispatch(createCourse(formData)).unwrap()
            console.log(formData,'success...')

        }
}

    return (
        <CourseWrapper>
            <CourseInner
             onSubmit={addCourse}
            //  autoComplete="off" 
             >
                <TitleWrapper>
                Добавить Заказ
                </TitleWrapper>
                    <FormInner>
                    <FileInput>
                        <div className="img">
                          <img src={UploadImage} />
                        </div>
                        <Input type="file"  onChange={(e) => setState({...state,image:e.target.files[0]}) } />
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
                                        onChange={(e) => setState( {...state,name:e.target.value})}
                                        required
                                    />
                                </InputWrap>
                               <InputWrap>
                               <Labels>Категория</Labels>
                                   <Select
                                    onChange={(e) => setState({...state, category:e.target.value})}
                                    required>
                                    <option value={'Frontend Development'}>Frontend Development</option>
                                    <option value={'Android Development'}>Android Development</option>
                                    <option  value={'IOS Development'}>IOS Development</option>
                                   </Select>
                               </InputWrap>
                           </InputGroupWrapper>
                           <InputGroupWrapper>
                                <InputWrap>
                                    <Labels>Описание</Labels>
                                    <Input
                                        type="text"
                                        placeholder={'Описание'}
                                        onChange={(e) => setState({...state,description:e.target.value})}
                                        required
                                    />
                                </InputWrap>
                                <InputWrap>
                                    <Labels>Автор</Labels>
                                    <Input
                                        type="text"
                                        placeholder={'Автор'}
                                        onChange={(e) => setState({...state,author:e.target.value})}
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
                                        onChange={(e) => setState({...state,price:e.target.value})}
                                        required
                                    />
                                 </InputWrap>
                                 <InputWrap>
                                 <Labels>Статус</Labels>
                                 <Select 
                                 name={'Статус'}
                                 onChange={(e) => setState({...state,status:e.target.value})}
                                 required>
                                    <Option value={'active'}>active</Option>
                                    <Option value={'inActive'}>InActive</Option>
                                 </Select>
                                 </InputWrap>
                            </InputGroupWrapper>
                    </FormInner>
                        <ActionButtonWrapper>
                            <ActionBtn type={'button'} bg={'#bd0505'} text={'отменить'} action={action} />
                            <ActionBtn bg={'#173e3c'} text={'Отправить'} />
                        </ActionButtonWrapper>
            </CourseInner>
        </CourseWrapper>
    );
};

export default AddCoursePage;