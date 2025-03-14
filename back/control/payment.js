const stripe = require("stripe");

const secretkey =
  "sk_test_51QsOrbG8fbSG6lKbRum6WkBUnKQVHoiMQww12fSSYnzbDbskIUqYLXJcYgEXv4X0Lkm2cEz9sDyW8Eb5LKffASWa00wg1Fq34A";
const Stripe = stripe(secretkey);

const payment = async (req, res) => {
  try {
    const cart = req.body.panier;
    const lineItems = cart.map((el) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: el.product.title,
            description: el.product.description,
            images: el.product.images,
            metadata: { id: el.product._id },
          },
          unit_amount: el.product.price * 100,
        },
        quantity: el.quantity,
      };
    });
    const session = await Stripe.checkout.sessions.create({
      line_items: lineItems,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      mode: "payment",
    });
    res.status(200).send({ msg: "session created", url: session.url });
  } catch (error) {
    res.status(500).send({ msg: "transaction failed", error });
  }
};

module.exports = { payment };
