import './styles/Shopping.css'
import { useState } from "react";

const Shopping = () => {

    const [count, setCount ] = useState(1);
    const [subTotal, setSubTotal] = useState(0)

    const products = [
        {
            "id": 1,
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "name": "School Bag",
            "price": 200 
        },
        {
            "id": 2,
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "name": "Men round Neck",
            "price": 200 
        }
    ]

    const increment = (id) => {
        setCount (count + 1)
    }

    const decrement = (id) => {
        if (count <= 0){
            alert("quantity can not be less than 0")
        }else {
            setCount(count - 1)
        }
    }


    
    return (
        <div className="container">
            <h1>Oracle Shopping Cart</h1>
            <div className="heading">
                <div>Product</div>
                <div className = "quant">
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Sub Total</div>
                </div>

            </div>

            {products.map((product) => {
                return (
                    <div className="cart" key={product.id}>
                        <div className="details">
                            <img src={product.image} alt="product" />
                            <p>{product.name}</p>
                        </div>
                        <div className="pricing">
                            <p>${product.price}</p>
                            <div className="quantity">
                                <button className="btn1" onClick={() => decrement(product.id)}>-</button>
                                <p>{count}</p>
                                <button className="btn2" onClick={() => increment(product.id)}>+</button>
                            </div>
                            <p>${subTotal}</p>
                        </div>

                </div>

                )
                
                })}

            <div className="calculate">
                <div className="sub-total">
                    <p className="head">Sub Total</p>
                    <p className="price">$200</p>

                </div>

                <div className="total">
                    <p className="head">Total</p>
                    <p className="price">$200s</p>

                </div>

            </div>
        </div>
        
        
    )
}

export default Shopping;