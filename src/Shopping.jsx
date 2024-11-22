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

    
    const Increment = (id) => {
        if (id === 1){setCount1(count1 + 1)}
        else if (id === 2){setCount2(count2 + 1)}
    };

    const Decrement = (id) => {
        if (count1 <= 0 | count2 <= 0 ){
            alert("Quantity cannot be less than 0")
        }else{
            if (id === 1){setCount1(count1 - 1)}
            else if (id === 2){setCount2(count2 - 1)}
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
                <div className="cart">
                    <div className="details">
                        <img src={product.image} alt="product" />
                        <p>{product.name}</p>
                    </div>
                    <div className="pricing">
                        <p>${product.price}</p>
                        <div className="quantity">
                            <button className="btn1">+</button>
                            <p>{count}</p>
                            <button className="btn2">-</button>
                        </div>

                        <p>${subTotal}</p>

                    </div>

                </div>
            })}
            

            <div className="cart">
                <div className="details">
                    <img src="" alt="product" />
                    <p>Men round neck</p>
                </div>
                <div className="pricing">
                    <p>${price2}</p>

                    <div className="quantity">
                        <button className="btn1" onClick={() => Increment(2)}>+</button>
                        <p>{count2}</p>
                        <button className="btn2" onClick={() => Decrement(2)}>-</button>
                    </div>

                    <p>${subTotal2}</p>

                </div>

            </div>

            <div className="calculate">
                <div className="sub-total">
                    <p class="head">Sub Total</p>
                    <p class="price">${total}</p>

                </div>

                <div className="total">
                    <p class="head">Total</p>
                    <p class="price">${total}</p>

                </div>

            </div>
        </div>
        
        
    )
}

export default Shopping;