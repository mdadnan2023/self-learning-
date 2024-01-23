import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate("/");
    }
    return (
        <div>
            <h1>404</h1>
            <button onClick={() => goToHomepage()}>Go to homepage</button>
        </div>
    )
}

export default Error
