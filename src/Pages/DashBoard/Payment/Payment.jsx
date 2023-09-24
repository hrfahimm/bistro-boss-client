/** @format */

import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/UseCart";
//todo publish key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
console.log(stripePromise, "payment");
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle
                subHeading='please process'
                heading='Payment'></SectionTitle>
            <h2 className='text-3xl'> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    cart={cart}
                    price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};
export default Payment;
