import React, { useEffect } from 'react'
import Header from "./Header"
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import Nav from './Nav';

const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    const history = useHistory()

    useEffect(() => {
        const isLoggedIn = window.sessionStorage.getItem("isLoggedIn")
        console.log(isLoggedIn);
        if (isLoggedIn) {
            history.push("/")
            console.log("hello");
        } else {
            history.push("/auth")
        }
    }, [])
    return (
        <div>
            <Nav />
            <Header />
            <div className="container">
                <div className="row">
                    { products.map(product => (
                        <div className="col-3" key={ product.id }>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={ `/details/${product.id}` }><img src={ `/images/${product.image}` } alt="image name" /></Link>
                                </div>
                                <div className="product__name">
                                    { product.name }
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">
                                            <span className="actualPrice">{ currencyFormatter.format(product.price, { code: 'INR' }) }</span>
                                            <span className="discount">{ product.discount }%</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount__price">
                                            { currencyFormatter.format(product.discountPrice, { code: 'INR' }) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Home
