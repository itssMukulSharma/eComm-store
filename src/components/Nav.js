import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { logout } from '../store/reducers/userSlice';

const Nav = () => {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    const isLoggedIn = window.sessionStorage.getItem("isLoggedIn")

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()

        sessionStorage.clear()
        window.location.reload(false);

        dispatch(logout())
    }
    console.log("hello0000000", isLoggedIn);

    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="nav__container">
                        <div className="nav__left">
                            <Link to="/"><img src="/images/15.jpg" alt="logo" /></Link>
                        </div>
                        <div>
                            <h1>Welcome....
                         { isLoggedIn ?
                                    <button className="logout__btn" onClick={ (e) => handleLogout(e) }>Logout</button>
                                    : null }

                            </h1>
                        </div>
                        <div className="nav__right">
                            <Link to="/cart">
                                <div className="basket">
                                    <FaCartPlus className="cart-icon" />
                                    <span>{ totalQuantities }</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
