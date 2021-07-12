import React from 'react'

// use selector
import { useSelector, useDispatch } from 'react-redux';
import { del } from '../store/actions/lists';

const Todos = () => {

    const todos = useSelector(state => state.lists.todos)

    const dispatch = useDispatch()

    const deleteData = (id) => {
        dispatch(del(id))
    }

    return (
        <div>
            <ul>
                { todos.map(item => (
                    <li key={ item.id }>
                        { item.title }
                        <button onClick={() => deleteData(item.id)}>x</button>
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default Todos;