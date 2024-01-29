import React from 'react'
import { useParams } from "react-router-dom"
import productDetails from '../data/productDetails'

export default function ProdoctDescription() {

    const { productId } = useParams()
    const clickProduct = productDetails.find((prod) => prod.id == productId);

    return (
        <div className="tc ma0 pa4 min-vh-100">
            <h1 className='w-50'>{clickProduct.name}</h1>
        </div>
    )
}
