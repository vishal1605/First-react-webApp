export const ADD = (singleTask) => {
    return {
        type: "ADD_TASK",
        payload: singleTask
    }
}
export const ToggleBtn = (id) => {
    return {
        type: "TOGGLE_BUTTON",
        payload: id
    }
}
export const DeleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id
    }
}


