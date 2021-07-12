import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { delProduct, addProduct } from '../store/actions/products';

const Product = () => {

    const items = useSelector(state => state.products.items)

    const dispatch = useDispatch()

    const deleteProduct = (id) => {
        dispatch(delProduct(id))
    }

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addProduct(name, price))

        setName("")
        setPrice(0)
    }


    return (
        <React.Fragment>
            <div>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={ submitHandler }>Save</button>
                    </div>
                </form>
            </div>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { items.map(item => (
                            <tr key={ item.id }>
                                <td>{ item.name }</td>
                                <td>{ item.price }</td>
                                <td>
                                    <button onClick={ () => deleteProduct(item.id) }>delete</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default Product;