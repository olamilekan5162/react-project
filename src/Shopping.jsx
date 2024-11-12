import './styles/Shopping.css'
import { useState } from "react";

const Shopping = () => {

    const [count1, setCount1 ] = useState(1);
    const [count2, setCount2 ] = useState(1);

    const price1 = 200
    const price2 = 300
    
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

    const subTotal1 = count1 * price1
    const subTotal2 = count2 * price2
    const total = subTotal1 + subTotal2
    
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
            
            <div className="cart">
                <div className="details">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" />
                    <p>School Bag</p>
                </div>
                <div className="pricing">
                    <p>${price1}</p>
                    <div className="quantity">
                        <button className="btn1" onClick={() => Increment(1)}>+</button>
                        <p>{count1}</p>
                        <button className="btn2" onClick={() => Decrement(1)}>-</button>
                    </div>

                    <p>${subTotal1}</p>

                </div>

            </div>

            <div className="cart">
                <div className="details">
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="product" />
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