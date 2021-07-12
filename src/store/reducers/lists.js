// Buat Initial State
const initialState = {
    todos: [
        {
            id: 1,
            title: 'Learning React with Redux'
        }
    ]
}

// REDUCER
const listReducer = (state = initialState, action) => {

    // distructure
    const { type, payload } = action

    switch (type) {
        case "ADD":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }

            return {
                ...state,
                todos: [...state.todos, newItem]
            }
        
        case "DEL":
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== payload)
            }

        default:
            return state
    }
}

export default listReducer;