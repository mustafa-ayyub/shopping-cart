import axios from "axios";

export const handleCheckout = async ({ cartItems, stripe, setLoading, setErrorMessage, PRODUCTS }) => {
  try {
    setLoading(true);
    setErrorMessage("");

    const itemsForCheckout = PRODUCTS.filter((product) => cartItems[product.id] > 0).map((product) => ({
      id: product.id,
      quantity: cartItems[product.id],
    }));

    const { data } = await axios.post("http://localhost:4000/create-checkout-session", {
      items: itemsForCheckout,
    });

    const { sessionId } = data;
    if (!sessionId) {
      throw new Error("Invalid session ID received from the server.");
    }

    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) throw error;

  } catch (error) {
    handleCheckoutError(error, setErrorMessage);
  } finally {
    setLoading(false);
  }
};

const handleCheckoutError = (error, setErrorMessage) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      setErrorMessage(`Server Error: ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
      setErrorMessage("No response received from the server. Please check your network.");
    } else {
      setErrorMessage(`Client Error: ${error.message}`);
    }
  } else {
    setErrorMessage(`Unexpected Error: ${error.message}`);
  }
};
