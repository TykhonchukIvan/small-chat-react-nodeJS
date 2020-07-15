import { loginActionTypes, messagesActionTypes, usersActionTypes} from "../type/type";

export const InitialState = {
    form: {
        userName: '',
        roomId: '',
    },
    messageText: '',
    isAuthentication: false,
    users: [],
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

export const userReducer = (state = InitialState, action) =>{
    switch (action.type) {

        case usersActionTypes.SET_USERS:{
            return {
                ...state,
                users: action.payload,
            }
        }
        default: return state
    }
}

const getLogInForm = state => state.form;
const getIsAuthentication = state => state.isAuthentication;
const getMessages = state =>state.messageText;
const getUsers = state => state.users;

export const getReducer = {
    getLogInForm,
    getIsAuthentication,
    getMessages,
    getUsers,
};