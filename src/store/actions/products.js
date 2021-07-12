export const addProduct = (name, price) => {
    return {
        type: 'ADDPRODUCT',
        payload: {
            name: name,
            price: price
        }
    }
}

export const delProduct = (id) => {
    return {
        type: 'DELPRODUCT',
        payload: id
    }
}