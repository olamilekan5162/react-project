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
            
            <div className="cart">
                <div className="details">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" />
                    <p>Foil cake</p>
                </div>
                <div className="pricing">
                    <p>$300.00</p>

                    <div className="quantity">
                        <button onClick={Increment}>+</button>
                        <input type="number" value={count}/>
                        <button onClick={Decrement}>-</button>
                    </div>

                    <p>$300.00</p>

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