# Shopping Cart Application

This is a fully functional shopping cart application built with React and Node.js, utilizing Stripe for payment processing. The application allows users to browse products, add items to their cart, and securely checkout.

## Table of Contents
- [Live Demo](#https://shopping-cart-ten-red-21.vercel.app/)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

## Features

- Browse a variety of products.
- Add products to a shopping cart.
- Secure checkout using Stripe.
- Responsive design for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, Stripe
- **Deployment**: Vercel (Frontend), Node.js (Backend)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shopping-cart.git
   cd shopping-cart
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   npm install
   ```

3. Set up environment variables for the backend in a `.env` file:

   ```plaintext
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_SUCCESS_URL=http://localhost:3000
   STRIPE_CANCEL_URL=http://localhost:3000/cancel
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs both the frontend and backend applications concurrently in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the frontend application for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!** This command will remove the single build dependency from your project.

## Environment Variables

To run this application, you need to set up the following environment variables:

- `STRIPE_SECRET_KEY`: Your Stripe secret key for processing payments.
- `STRIPE_SUCCESS_URL`: The URL to redirect to after a successful checkout.
- `STRIPE_CANCEL_URL`: The URL to redirect to if the checkout is canceled.

## Deployment

- The frontend is deployed on Vercel. 
- The backend needs to be hosted on a server that supports Node.js, such as Heroku or AWS. Ensure you configure the correct environment variables on your server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.