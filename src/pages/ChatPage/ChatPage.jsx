import React, { useEffect, useState } from 'react';
import socket from "../../socketClient";
import PropTypes from 'prop-types';

import ButtonSendMessages from "../../components/ButtonSendMessages";
import Textarea from "../../components/Textarea";
import UserOnline from '../../components/UserOnline';
import MessagesContainer from './MessagesContainer';

import './ChatPage.less';

const ChatPage = ({ form, messages, getMessages, users, setUsers, setMassagesServer, clear, setUsersServer, setUsersSaga }) =>{

    const [error, serError] = useState(false)

    const data = {
        login: form.userName,
        roomId: form.roomId,
    }

    useEffect( () => {
        setUsersSaga(data);
        socket.on('ROOM:SET_USERS', (users)=> { setUsers(users) });
        setUsersServer(data.roomId);
    }, []);

    const onChangeHandlerTextarea = (event) =>{
        const inputTextarea = event.target.value;
        getMessages(inputTextarea);
    }

    const getTime = () => {
        const data = new Date();
        return data.getHours().toString() + ':' + data.getMinutes().toString()
    }

    const timeMessage = getTime()

    const dataMessage = {
        login: form.userName,
        roomId: form.roomId,
        text: messages,
        time: timeMessage,
    }

    const onSendMessage = () =>{
        getTime()
        socket.emit('ROOM:SET_NEW_MESSAGE', dataMessage);
        const { login, text, time } = dataMessage;
        if (text.length <= 0 ){
            serError(true)
            return
        } else {
            serError(false)
            setMassagesServer({login, text, time});
            clear();
        }
    }

    return (
        <div className='chat'>
            <div className='chat__body'>
                <UserOnline users={users}/>
                <MessagesContainer />
            </div>
            <div className='chat__send'>
                <Textarea onChange={onChangeHandlerTextarea} value={messages}  style = { error ? {border: '2px solid red'} : {border: '2px solid #4a87e5'}}/>
                <ButtonSendMessages onClick={onSendMessage}/>
            </div>
        </div>
    )
};

ChatPage.propTypes = {
    form: PropTypes.object,
    messages: PropTypes.string,
    getMessages: PropTypes.func.isRequired,
    users: PropTypes.object,
    setUsers: PropTypes.func.isRequired,
    setMassagesServer: PropTypes.func.isRequired,
    setUsersServer: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
};

export default ChatPage;