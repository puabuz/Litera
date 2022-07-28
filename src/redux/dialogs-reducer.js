const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: "Дай откусить" },
        { id: 2, message: "Yo" },
        { id: 3, message: "Шельберебе" },
        { id: 4, message: "Вынеси попить" },
        { id: 5, message: "Дон" },
    ],
    dialogs: [
        { id: 1, name: "Васген Гагович" },
        { id: 2, name: "Евгений Петросян" },
        { id: 3, name: "Мсье Пердонсье" },
        { id: 4, name: "Рулон Обоев" },
        { id: 5, name: "Африкан Африканыч" },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state= initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;

        default:
            return state;
    }
}

//------------------------ACTION CREATOR----------------------------//
export const sendMessageCreator = () => ({                          //
    type: SEND_MESSAGE                                              //
})                                                                  //
//                                                                  //
export const updateNewMessageBodyCreator = (body) => ({             //
    type: UPDATE_NEW_MESSAGE_BODY, body: body                       //
})                                                                  //
//-------------------------ACTION CREATOR---------------------------//

export default dialogsReducer;