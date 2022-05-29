
import axios from 'axios';
import { FORM_TYPES } from './../type';
import { APP_URL } from './../../utils/constants/URLS';
import { openOverlay } from './ui-actions';

export const createNewForm = () => dispatch => {
    dispatch({
        type: FORM_TYPES.NEW_FORM,
    })
}

export const updateNewForm = (id) => dispatch => {
    axios.get(`${APP_URL}/all-dashboard-users/${id}`).then((res)=>{
        dispatch({
            type: FORM_TYPES.UPDATE_FORM,
            payload: res.data,
        })
        dispatch(openOverlay());
    })
}