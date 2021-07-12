// ACTION
export const add = (title) => {
    return {
        type: 'ADD', // huruf besar,
        payload: title, // data yang dikirim ke requesannya
    }
}

export const del = (id) => {
    return {
        type: 'DEL',
        payload: id
    }
}