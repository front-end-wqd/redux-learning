import { HANDLE_CHANGE, HANDLE_ADD, HANDLE_DELETE, GET_LIST } from './action';
import axios from 'axios';

export const handleChangeAction = (value) => ({
    type: HANDLE_CHANGE,
    value,
});

export const handleAddAction = (value) => ({
    type: HANDLE_ADD,
    value,
});

export const handleDeleteAction = (value) => ({
    type: HANDLE_DELETE,
    value,
});

export const getListAction = (value) => ({
    type: GET_LIST,
    value,
});

export const getListActionThunk = (value) => {
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/0d18c7006c6dfdd1f3b1eb52a396f8a3/wqd/getList').then(res => {
            if (res.status === 200) {
                dispatch(getListAction(res.data.data.list));
            }
        });
    }
};