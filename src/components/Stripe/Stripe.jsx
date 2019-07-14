import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PaymentRequestButtonElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";

import withStyle from "./withStyle.jsx";


const handleBlur = () => {
  console.log("[blur]");
};
const handleChange = change => {
  console.log("[change]", change);
};
const handleClick = () => {
  console.log("[click]");
};
const handleFocus = () => {
  console.log("[focus]");
};
const handleReady = () => {
  console.log("[ready]");
};

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        },
        padding
      },
      invalid: {
        color: "#9e2146"
      }
    }
  };
};

class _SplitForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log("[token]", payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label>
          CVC
          <CardCVCElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <button>Pay</button>
      </form>
    );
  }
}
const SplitForm = injectStripe(_SplitForm);

class _PaymentRequestForm extends React.Component {
  constructor(props) {
    super(props);

    const paymentRequest = props.stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Demo total",
        amount: 1000
      }
    });

    paymentRequest.on("token", ({ complete, token, ...data }) => {
      console.log("Received Stripe token: ", token);
      console.log("Received customer information: ", data);
      complete("success");
    });

    paymentRequest.canMakePayment().then(result => {
      this.setState({ canMakePayment: !!result });
    });

    this.state = {
      canMakePayment: false,
      paymentRequest
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        className="PaymentRequestButton"
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        onReady={handleReady}
        paymentRequest={this.state.paymentRequest}
        style={{
          paymentRequestButton: {
            theme: "dark",
            height: "64px",
            type: "donate"
          }
        }}
      />
    ) : null;
  }
}
const PaymentRequestForm = injectStripe(_PaymentRequestForm);

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? "14px" : "18px"
    };
    window.addEventListener("resize", () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== "14px") {
        this.setState({ elementFontSize: "14px" });
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== "18px"
      ) {
        this.setState({ elementFontSize: "18px" });
      }
    });
  }

  render() {
    const { elementFontSize } = this.state;
    return (
      <div className="Checkout">
        <Elements>
          <SplitForm fontSize={elementFontSize} />
        </Elements>
        <Elements>
          <PaymentRequestForm />
        </Elements>
      </div>
    );
  }
}
const Stripe = ({ className }) => {
  return (
      <div className={`${className}`}>
    <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
      <Checkout />
    </StripeProvider>
    </div>
  );
};

export default withStyle(Stripe);