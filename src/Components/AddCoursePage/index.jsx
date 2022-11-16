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
             autoComplete="off" >
                <TitleWrapper>
                    Add Course
                </TitleWrapper>
                    <FormInner>
                    <FileInput>
                        <div className="img">
                          <img src={UploadImage} />
                        </div>
                        <Input type="file"  onChange={(e) => setState({...state,image:e.target.files[0]}) } />
                        <div className="txt">
                            <h3>Drop Select Or File</h3>
                        </div>
                    </FileInput>
                           <InputGroupWrapper>
                           <InputWrap>
                                    <Labels>Name</Labels>
                                    <Input
                                        type="text"
                                        placeholder={'Name'}
                                        onChange={(e) => setState( {...state,name:e.target.value})}
                                        required
                                    />
                                </InputWrap>
                               <InputWrap>
                               <Labels>Category</Labels>
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
                                    <Labels>Description</Labels>
                                    <Input
                                        type="text"
                                        placeholder={'Description'}
                                        onChange={(e) => setState({...state,description:e.target.value})}
                                        required
                                    />
                                </InputWrap>
                                <InputWrap>
                                    <Labels>Author</Labels>
                                    <Input
                                        type="text"
                                        placeholder={'Author'}
                                        onChange={(e) => setState({...state,author:e.target.value})}
                                        required
                                    />
                                </InputWrap>
                            </InputGroupWrapper>
                            <InputGroupWrapper>
                                 <InputWrap>
                              <Labels>Price</Labels>
                                    <Input
                                        type="number"
                                        placeholder={'Price'}
                                        onChange={(e) => setState({...state,price:e.target.value})}
                                        required
                                    />
                                 </InputWrap>
                                 <InputWrap>
                                 <Labels>Status</Labels>
                                 <Select 
                                 name={'status'}
                                 onChange={(e) => setState({...state,status:e.target.value})}
                                 required>
                                    <Option value={'active'}>active</Option>
                                    <Option value={'inActive'}>InActive</Option>
                                 </Select>
                                 </InputWrap>
                            </InputGroupWrapper>
                    </FormInner>
                        <ActionButtonWrapper>
                            <ActionBtn type={'button'} bg={'#bd0505'} text={'Cancel'} action={action} />
                            <ActionBtn bg={'#173e3c'} text={'Send'} />
                        </ActionButtonWrapper>
            </CourseInner>
        </CourseWrapper>
    );
};

export default AddCoursePage;