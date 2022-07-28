import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Мой первый пост', likesCount: 3 }
            ],
            newPostText: "значение по умолчанию из state",
        },

        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {                  // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);  
    }
}

export default store;
window.store = store;