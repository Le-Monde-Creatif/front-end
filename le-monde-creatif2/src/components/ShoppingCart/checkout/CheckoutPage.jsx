/**
 * This code was generated by Builder.io.
 */
import React from "react";
import CouponSection from "./CouponSection";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";

const CheckoutPage = () => {
  return (
    <div>
      <div
        
      />
      <h1
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          marginTop: "96px",
          font: "500 33px/1.3 DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        Checkout
      </h1>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          marginTop: "64px",
          width: "100%",
          flexDirection: "column",
          alignItems: "start",
          padding: "0 80px",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
            marginTop: "40px",
            padding: "0 20px",
          },
        }}
      >
        <CouponSection />
        <div
          style={{
            display: "flex",
            marginTop: "48px",
            width: "800px",
            maxWidth: "100%",
            gap: "20px",
            color: "var(--Light-Colors-Black---Light, #000)",
            flexWrap: "wrap",
            justifyContent: "space-between",
            font: "400 26px DM Sans, sans-serif",
          }}
        >
          <div style={{ lineHeight: "1" }}>Billing Details</div>
          <div
            style={{
              lineHeight: "1",
              textTransform: "lowercase",
              alignSelf: "start",
            }}
          >
            <span style={{ textTransform: "uppercase" }}>Y</span>OUR{" "}
            <span style={{ textTransform: "uppercase" }}>O</span>RDER
          </div>
        </div>
        <div
          style={{
            alignSelf: "center",
            marginTop: "27px",
            width: "100%",
            maxWidth: "1248px",
          }}
        >
          <div
            style={{
              gap: "20px",
              display: "flex",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "stretch",
                gap: "0px",
              },
            }}
          >
            <BillingDetails />
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;