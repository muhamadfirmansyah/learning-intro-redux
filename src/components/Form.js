import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { add } from '../store/actions/lists';

const Form = () => {

    const [text, setText] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(add(text))

        setText("")
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="enter new task" />
            <button>add</button>
        </form>
    )
}

export default Form;