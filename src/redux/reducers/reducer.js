import { loginActionTypes} from "../type/type";
import { messagesActionTypes } from '../type/type';

export const InitialState = {
    form: {
        userName: '',
        roomId: '',
    },
    messageText: '',
    isAuthentication: false,
}

export const loginReducer = (state = InitialState, action) =>{
    switch (action.type) {

        case loginActionTypes.SET_FORM: {
            const { name, value } = action.payload
            return {
                ...state,
               form: {
                    ...state.form,
                   [name]:value,
               }
            }
        }

        case loginActionTypes.IS_AUTHENTICATION:{
            return {
                ...state,
                isAuthentication: action.payload,
            }
        }

        default: return state
    }
}

export const messagesReducer = (state = InitialState, action) =>{
    switch (action.type) {

        case messagesActionTypes.SET_MESSAGES:{
            return {
                ...state,
                messageText: action.payload,
            }
        }
        default: return state
    }
}

export const getLogInForm = state => state.form;
export const getIsAuthentication = state => state.isAuthentication;
export const getMessages = state =>state.messageText;

export const getReducer = {
    getLogInForm,
    getIsAuthentication,
    getMessages,
};