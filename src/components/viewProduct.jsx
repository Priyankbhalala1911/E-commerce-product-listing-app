import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./viewProduct.css"
import { deleteProduct } from '../Store/Slices/userSlices'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Logout from './authentication/logout'
// import AddProductForm from './addProductForm'


const ViewProduct = () => {
    const data = useSelector((state) => state.product)
    const isAuth = useSelector((state) => state.user.isAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(data)

    const handleUpdate = (product) => {
        navigate("/updateProduct", { state: { product: product } })
    }

    return (
        <>
            <div className="btn">
                <Link to="../addProduct"><button>Add Product</button></Link>
                {
                    isAuth ? <Logout /> : ""
                }
            </div>

            {
                data.length > 0 && isAuth ?
                    (

                        <div className='container-product'>
                            {

                                data.map((val, index) => (

                                    <div className="product-card" key={index}>
                                        <div className="product-image">
                                            <img src={val.image} alt={val.product_name} />
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-title">{val.product_name}</h2>
                                            <p className="product-description">{val.description}</p>
                                            <p className="product-price">${val.price}.00</p>
                                            <div className="btn-product">
                                                <button className="add-to-cart" onClick={() => handleUpdate(val)}>Update</button>
                                                <button className="add-to-cart" onClick={() => dispatch(deleteProduct(index))}>Delete</button>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) :
                    (
                        <p className='noProduct'>No Products</p>
                    )

            }





        </>
    )
}

export default ViewProduct