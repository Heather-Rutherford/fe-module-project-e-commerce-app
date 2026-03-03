import { Form, Button } from "react-bootstrap";
import PageLayout from "./PageLayout";
import "../styles/styles.css";
import { useState } from "react";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import OrderSummary from "../components/OrderSummary";

const Checkout: React.FC = () => {
  // Local form state
  const [success, setSuccess] = useState("");
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <PageLayout>
        <h1 className="h1-responsive font-weight-bold text-center my-4">
          Checkout
        </h1>
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Order Summary
        </h2>
        <div className="h1-responsive font-weight-bold text-center my-4">
          <div>
            <OrderSummary products={cartItems} />
          </div>
        </div>
        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}
        <Form className="text-start position-relative">
          <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Customer Information
            </h2>
            <Form.Label htmlFor="customerName">Customer Name</Form.Label>
            <Form.Control
              type="text"
              id="CustomerName"
              placeholder="Enter your name"
              required
            />
            <Form.Label htmlFor="customerEmail">Customer Email</Form.Label>
            <Form.Control
              type="email"
              id="customerEmail"
              placeholder="Enter your email"
              required
            />
            <Form.Label htmlFor="customerPhone">Customer Phone</Form.Label>
            <Form.Control
              type="tel"
              id="CustomerPhone"
              placeholder="Enter your phone number"
              required
            />
          </section>
          <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Shipping Address
            </h2>
            <Form.Label htmlFor="shippingAddress">Address</Form.Label>
            <Form.Control
              type="text"
              id="shippingAddress"
              placeholder="Enter your shipping address"
              required
            />
            <Form.Label htmlFor="shippingCity">City</Form.Label>
            <Form.Control
              type="text"
              id="shippingCity"
              placeholder="Enter your city"
              required
            />
            <Form.Label htmlFor="shippingState">State</Form.Label>
            <Form.Control as="select" id="shippingState" required>
              <option value="">Select your state</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </Form.Control>
            <Form.Label htmlFor="shippingZip">Zip</Form.Label>
            <Form.Control
              type="text"
              id="shippingZip"
              placeholder="Enter your zip code"
              required
            />
            <Form.Label htmlFor="shippingCountry">Country</Form.Label>
            <Form.Control
              type="text"
              id="shippingCountry"
              value="United States"
              placeholder="Enter your country"
              required
            />
          </section>
          <section className="mb-4">
            <h2>Payment Method</h2>
            <Form.Label htmlFor="paymentMethod">
              Select Payment Method
            </Form.Label>
            <Form.Control as="select" id="paymentMethod" required>
              <option value="PayPal">PayPal</option>
              <option value="CreditCard">Credit Card</option>
              <option value="ApplePay">Apple Pay</option>
              <option value="GooglePay">Google Pay</option>
            </Form.Control>
          </section>
          <Button
            className="btn btn-primary"
            onClick={() => {
              setSuccess("Checkout successful! Your order has been placed.");
              setTimeout(() => setSuccess(""), 3000); // Clear the success message after 3 seconds
            }}
          >
            Place Order
          </Button>
        </Form>
      </PageLayout>
    </>
  );
};
export default Checkout;
