import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../State/Store";
import { useEffect } from "react";
import { paymentSuccess } from "../../State/customer/orderSlice";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { orderId } = useParams();
  const getQueryParam = (key: string) => {
    const query = new URLSearchParams(location.search);
    return query.get(key);
  };

  useEffect(() => {
    // Get payment parameters from URL
    const paypalToken = getQueryParam("token");
    const paypalPayerId = getQueryParam("PayerID");
    const stripeSessionId = getQueryParam("session_id");

    const jwt = localStorage.getItem("jwt") || "";

    if (paypalToken && paypalPayerId) {
      // PayPal payment
      dispatch(
        paymentSuccess({
          jwt,
          paymentId: paypalPayerId,
          paymentLinkId: paypalToken,
          paymentMethod: "PAYPAL",
        })
      );
    } else if (stripeSessionId) {
      // Stripe payment
      dispatch(
        paymentSuccess({
          jwt,
          paymentId: stripeSessionId,
          paymentLinkId: orderId || "",
          paymentMethod: "STRIPE",
        })
      );
    } else {
      console.error("No payment parameters found in URL");
    }
  }, [orderId, dispatch, location]);

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-gradient-to-r from-orange-500 to-purple-600">
      <div className="bg-white text-gray-800 p-10 w-[90%] lg:w-[30%] border rounded-lg shadow-2xl h-[50vh] flex flex-col gap-7 items-center justify-center">
        <h1 className="text-4xl font-bold">Congratulations!</h1>
        <p className="text-xl font-medium text-center">
          Your order has been placed successfully. Thank you for shopping with
          us!
        </p>

        <div>
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => navigate("/")}
            style={{ backgroundColor: "#1a73e8", color: "#fff" }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
