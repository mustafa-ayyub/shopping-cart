require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");
const PRODUCTS = require("./Products");


const app = express();

app.use(express.json());
app.use(cors());

const findProductById = (id) => PRODUCTS.find((p) => p.id === id);

app.post("/create-checkout-session", async (req, res) => {
    try {
      const { items } = req.body;
  
      if (!items || items.length === 0) {
        return res.status(400).json({ message: "No items in the cart." });
      }
  
      const lineItems = items.map((item) => {
        const product = findProductById(item.id);
  
        if (!product) {
          throw new Error(`Product with ID ${item.id} not found in store.`);
        }
  
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.productName,
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: item.quantity,
        };
      });
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: process.env.STRIPE_SUCCESS_URL || "http://localhost:3000",
        cancel_url: process.env.CANCEL_SUCCESS_URL ||  "http://localhost:3000/cancel",
      });
  
      return res.status(200).json({ sessionId: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error.message);
      return res.status(500).json({ message: error.message });
    }
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server running on port: ", PORT));
