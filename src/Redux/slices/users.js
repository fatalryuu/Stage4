import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [
            {
                id: 1,
                username: "admin",
                password: "1234"
            }
        ]
    },
    reducers: {
        addUser: (state, action) => {
            const { username, password } = action.payload;
            state.users.push({
                id: state.users.length + 1,
                username,
                password
            });
        }
    }
})

export const {addUser} = usersSlice.actions
export default usersSlice.reducer;
