import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { UpdateProduct } from '../Store/Slices/userSlices';
import { useDispatch } from 'react-redux';

const UpdateProductForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateData, setUpdateData] = useState(location.state.product)
    const handleChange = (e) => {
        const { name, value } = e.target;
        const addData = {
            ...updateData,
            [name]: value
        }
        setUpdateData(addData)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = {
            ...updateData,
            image: updateData.image ? URL.createObjectURL(updateData.image) : updateData.image,
        }
        dispatch(UpdateProduct(newProduct))
        // console.log(newProduct)
        navigate("/viewAllProduct")
    }

    const handleImageFile = (e) => {
        setUpdateData({ ...updateData, image: e.target.files[0] })
    }

    return (
        <div className='container'>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="product_name">Product Name:</label>
                    <input type="text" id="product_name" name="product_name" value={updateData.product_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" rows="4" value={updateData.description} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price($):</label>
                    <input type="number" id="price" name="price" min="0" value={updateData.price} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" value={updateData.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="clothing">Clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="home_decor">Home Decor</option>

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload Image:</label> 
                    <input type="file" id="image" name="image" accept="image/*"  value={updateData.image ? URL.revokeObjectURL(updateData.image ) : updateData.image} onChange={handleImageFile} required/>
                </div>
                <div className="form-group">
                    <button type="submit">Update Product</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProductForm