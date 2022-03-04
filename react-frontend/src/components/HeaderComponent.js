import React from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'

export const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className='header text-decoration-none'>
                        <Link to={"/"} className='header text-decoration-none'>
                            <h1>Address Management App</h1>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent