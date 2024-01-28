import React from 'react'
import { useParams } from "react-router-dom"
import productDetails from '../data/productDetails'

export default function ProductDetail() {

    const { productId } = useParams()
    const clickProduct = productDetails.find((prod) => prod.id == productId);

    return (
        <div>
            <h1>{clickProduct.name}</h1>
        </div>
    )
}
