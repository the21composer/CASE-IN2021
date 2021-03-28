const socket_io = require("socket.io");
const {newMessage, newServerMessage} = require("./message");
const {addUser, removeUser, getUser, hasUser, getUsersInRoom} = require("./users");

module.exports = function (server) {
    const io = socket_io(server, {
        cors: '*'
    });

    /* Calls on each new connection to socket */
    io.on("connection", function (socket) {
        /*
        * Receives data from new user check it and store
        * Broadcast to all users in room about new connection
        */
        const onJoin = ({username, room}) => {
            try {
                /* Trying to add new user to users array */
                const {error, user} = addUser({id: socket.id, name: username, room});

                /* If error appears on user adding send error back to user */
                if (error) {
                    socket.emit('error',
                        {type: 'addUser', error: error});
                    return console.error(error);
                }

                /* If everything ok add user to the room */
                socket.join(user.room);

                /* If everything ok send to user info about him {name, id, room} */
                socket.emit('logged', {user: 'SERVER', data: user});

                /* Broadcast to other users in room message and data about new connection */
                socket.emit('message',
                    newServerMessage({
                        message: `${user.name}, Welcome to ${user.room} room.`
                    }));
                socket.broadcast.to(user.room).emit('message',
                    newServerMessage({message: `${user.name} has joined!`}));

                /* Send to all users in room info about room */
                io.to(user.room).emit('roomData', {
                    room: user.room,
                    users: getUsersInRoom(user.room) // get user data based on user's room
                });
            } catch (e) {
                console.error(e);
            }
        }

        /* receives message from one user and forward it to others in room */
        const onSendMessage = ({text}) => {
            try {
                const user = getUser(socket.id);
                io.to(user.room).emit('message', newMessage({user, message: text}));
            } catch (e) {
                console.error(e);
            }
        }


        /*
        * Broadcast message about user disconnect to other users in room
        * Removes user from users array
        */
        const onDisconnect = () => {
            try {
                const user = removeUser(socket.id);

                if (user) {
                    io.to(user.room).emit('message',
                        newServerMessage({message: `${user.name.toUpperCase()} has left.`}));
                    io.to(user.room).emit('roomData', {
                        room: user.room,
                        users: getUsersInRoom(user.room)
                    });

                    console.log(`Disconnected`);
                    console.log(user);
                }
            } catch (e) {
                console.error(e);
            }
        }

        /* Subscribe to events from socket */
        socket.on('join', onJoin)
        socket.on('disconnect', onDisconnect);
        socket.on('sendMessage', onSendMessage);
    });
};
