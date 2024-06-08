import React, { useState } from 'react'
import "./addProductForm.css"
import { useDispatch } from 'react-redux';
import { addProduct } from '../Store/Slices/userSlices';
import {useNavigate } from 'react-router';


const AddProductForm = () => {
  
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        product_name: "",
        description: "",
        price: 0,
        category: "",
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const addData = {
            ...inputData,
            [name]: value
        }
        setInputData(addData)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = {
            ...inputData,
            image: inputData.image ? URL.createObjectURL(inputData.image) : inputData.image,
        }
        dispatch(addProduct(newProduct))
        // console.log(newProduct)
        navigate("/viewAllProduct")
    }

    const handleImageFile = (e) => {
        setInputData({ ...inputData, image: e.target.files[0] })
    }

    return (
        <div className='container'>
            <h1>Product Listing</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="product_name">Product Name:</label>
                    <input type="text" id="product_name" name="product_name" value={inputData.product_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" rows="4" value={inputData.description} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price($):</label>
                    <input type="number" id="price" name="price" min="0" value={inputData.price} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" value={inputData.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="clothing">Clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="home_decor">Home Decor</option>

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload Image:</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleImageFile} required />
                </div>
                <div className="form-group">
                    <button type="submit">Upload Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductForm