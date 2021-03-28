import {io} from "socket.io-client";
import EventListenerClass from "./eventListenerClass";
import {chat_instance} from "../Storage/chat";

//automatic endpoint selection based on environment variables type
const ENDPOINT = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
    'http://localhost:4001' : 'https://webrtc-chat-api.herokuapp.com/';

class socket extends EventListenerClass {
    constructor() {
        super();
        this.socket = io(ENDPOINT, {
            reconnectionDelayMax: 10000
        });
        /* Tracks connection to the socket by connected state */
        this.socket.on("connect", this.onConnect);
        this.socket.on("disconnect", this.onConnect);
    }

    connect({user, room}) {
        if (!this.socket.connected) {
            return;
        }

        /* Subscribe to events from socket */
        this.socket.on("roomData", this.onRoomData);
        this.socket.on("message", this.onMessage);
        this.socket.on("logged", this.onLogged);
        this.socket.on("error", this.onError);

        /* sending to socket server room join request */
        this.socket.emit("join", {username: user, room: room});
    }

    /* when connected or disconnected from socket calls all methods to handle events */
    onConnect = (data) => {
        // eslint-disable-next-line no-unused-expressions
        this._eventListeners['connectionChange']?.forEach(i => {
            i(this.socket.connected);
        });
    }

    /* when error if arrived from socket calls all methods to handle events */
    onError = (data) =>  {
        // eslint-disable-next-line no-unused-expressions
        this._eventListeners['error']?.forEach(i => {
            i(data);
        });
    }

    /* when successfully logged to socket calls all methods to handle events */
    onLogged = (data) =>  {
        // eslint-disable-next-line no-unused-expressions
        this._eventListeners['logged']?.forEach(i => {
            i(data);
        });
    }

    /* when new user connected or disconnected to socket calls all methods to handle events */
    onRoomData = (data) =>  {
        // eslint-disable-next-line no-unused-expressions
        this._eventListeners['usersChange']?.forEach(i => {
            i(data.users);
        });
    }

    /* before unloaded send to socket disconnect message */
    onBeforeUnload = () =>  {
        this.socket.emit('disconnect');
    }

    /* add new message to chat history */
    onMessage = (data) =>  {
        chat_instance.push(data);
    }

    /* send new text message to socket (it will be sent to other users in the room)*/
    sendNewMessage = (message) =>  {
        socket_instance.socket.emit("sendMessage", {text: message});
    }
}

export const socket_instance = new socket();
