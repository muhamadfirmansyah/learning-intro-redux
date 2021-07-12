const initialState = {
    items: [
        {
            id: 1,
            name: 'SmartTV',
            price: '$2000'
        },
        {
            id: 2,
            name: 'Android 11',
            price: '$1099'
        }
    ]
}

const productReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case "ADDPRODUCT":
            const newItem = {
                id: state.items.length + 1,
                name: payload.name,
                price: payload.price
            }

            return {
                ...state,
                items: [...state.items, newItem]
            }

        case "DELPRODUCT":
            return {
                ...state,
                items: state.items.filter(item => item.id !== payload)
            }
    
        default:
            return state
    }
}

export default productReducer;