import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow, Button, NotFound} from "./style";
import { ReactComponent as DeleteSvg } from '../../Assets/assets/main/delete.svg';
import { ReactComponent as EditSvg } from '../../Assets/assets/main/edit.svg';

const SearchTable = (word) => {
    const [edit, setEdit] = useState(null);
    const [popUp, setPopUp] = useState({cancel: false})
    const { data } = useSelector((state) => state.course)

    const foundedItems = data.filter((item) => item.name.toLowerCase().trim().includes(word.word.toLowerCase().trim()))
    const deleteUser = (id) => {

    }

    const EditFormData = (item) => {
       
    }

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
            {foundedItems?.length === 0 ? <NotFound><h1>nothing found</h1> </NotFound>:
            (
                <TableWrapper>
                <Table>
                    <THead bg="#72a6bf">
                        <TRow>
                            <TH>#</TH>
                            <TH>Name</TH>
                            <TH>PhoneNumber</TH>
                            <TH>Address</TH>
                            <TH>Edit</TH>
                            <TH>Delete</TH>
                        </TRow>
                    </THead>
                    <TBody>
                        {foundedItems?.map((item,Index) => (
                            <TRow key={item.id}>
                                <TD>{Index + 1}</TD>
                                <TD>{item.name}</TD>
                                <TD>{item.phoneNumber}</TD>
                                <TD>{item.address}</TD>
                                <TD>
                                    <Button onClick={() => {
                                        setPopUp({cancel: true});
                                        EditFormData(item)
                                    }}>
                                        <EditSvg/>
                                    </Button>
                                </TD>
                                <TD>
                                    <Button onClick={() => deleteUser(item.id)}>
                                        <DeleteSvg/>
                                    </Button>
                                </TD>
                            </TRow>
                        ))}
                    </TBody>
                </Table>
            </TableWrapper>
            )
             }

        </Container>
    );
};

export default SearchTable;


