const users = [];

/* creates new user instance */
const addUser = ({ id, name, room }) => {
    const rawName = name.trim();
    name = rawName.toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find(
        user => user.room === room && user.name === name
    );

    if (!name || !room) return { error: `Username and room are required.` };
    if (existingUser) return { error: `Username already exists.` };
    if (rawName === 'SERVER') return { error: `Username already exists.` };

    const user = { id, name, room };

    /* add new user to users array */
    users.push(user);

    return { user };
};

/* Removes user from users array */
const removeUser = id => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = id => users.find(user => user.id === id);
const hasUser = id => getUser !== undefined;
const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, hasUser, getUsersInRoom };