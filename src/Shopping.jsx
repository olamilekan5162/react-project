import './styles/Shopping.css'
import { useState } from "react";

const Shopping = () => {
    const [count, setCount] = useState(0);
    
    const Increment = () => {
        setCount(count + 1)
    };

    const Decrement = () => {
        if (count <= 0){
            alert("Quantity cannot be less than 0")
        }else{
            setCount(count - 1)
        }
    }

    const SubTotal = () => {
        
    }
    
    return (
        <div className="container">
            <h1>Shopping Cart</h1>
            <div className="heading">
                <div>Product</div>
                <div class = "quant">
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Sub Total</div>
                </div>

            </div>
            
            <div className="cart">
                <div className="details">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" />
                    <p>Traveling Bag</p>
                </div>
                <div className="pricing">
                    <p>$300.00</p>

                    <div className="quantity">
                        <button class="btn1" onClick={Increment}>+</button>
                        <p>{count}</p>
                        <button class="btn2" onClick={Decrement}>-</button>
                    </div>

                    <p>$300.00</p>

                </div>

            </div>

            <div className="cart">
                <div className="details">
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="product" />
                    <p>Men round neck</p>
                </div>
                <div className="pricing">
                    <p>$1500.00</p>

                    <div className="quantity">
                        <button class="btn1" onClick={Increment}>+</button>
                        <p>{count}</p>
                        <button class="btn2" onClick={Decrement}>-</button>
                    </div>

                    <p>$150.00</p>

                </div>

            </div>

            <div className="calculate">
                <div className="sub-total">
                    <p class="head">Sub Total</p>
                    <p class="price">$500.00</p>

                </div>

                <div className="total">
                    <p class="head">Total</p>
                    <p class="price">$1000.00</p>

                </div>

            </div>
        </div>
        
        
    )
}

export default Shopping;