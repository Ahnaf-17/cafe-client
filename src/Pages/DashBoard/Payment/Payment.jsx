import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Payment'
            subHeading='please pay to eat'
            ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm> </CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;