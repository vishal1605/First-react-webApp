const taskReducer = (state=[], {type, payload})=>{
    switch (type) {
        case "ADD_TASK":
            return [...state,payload];
        case "TOGGLE_BUTTON":
            console.log(typeof payload);
            const task = state.find(obj=> obj.id===payload);
            const index = state.indexOf(task);
            state.splice(index, 1,{...task,taskStatus:true});
            return [...state];
        case "DELETE_TASK":
            console.log(typeof payload);
            const myTask = state.find(obj=> obj.id===payload);
            const id = state.indexOf(myTask);
            state.splice(id, 1);
            return [...state];
            
        default:
            return state;
    }
}

export default taskReducer;