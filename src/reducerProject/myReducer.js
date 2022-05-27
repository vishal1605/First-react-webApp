export const crudReducer = (state, action)=>{
    switch (action.type) {
        case 'add_user':
            console.log("User added");
            return [...state, action.payload.input];

        case 'delete_user':
            console.log("deleteUser");
            let index = state.indexOf(action.payload.user);
            state.splice(index,1);
            return [...state];
    
        default:
            return state;
    }
}
