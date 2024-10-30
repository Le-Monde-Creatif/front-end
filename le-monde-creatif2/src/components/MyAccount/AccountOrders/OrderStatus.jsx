/**
 * This code was generated by Builder.io.
 */
import React from "react";

const orderStatusStyle = {
  border: "0 solid var(--Light-Colors-Black---Light, #000)",
  background: "var(--Light-Colors-Light-gray---Light, #efefef)",
  display: "flex",
  width: "100%",
  maxWidth: "1248px",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "21px 40px",
  font: "16px DM Sans, sans-serif",
};

const orderStatusTextStyle = {
  color: "var(--Light-Colors-Black---Light, #000)",
  fontWeight: "400",
  lineHeight: "2",
};

const browseProductLinkStyle = {
  color: "var(--Light-Colors-Accent---Light, #a18a68)",
  fontWeight: "700",
  margin: "auto 0",
  textDecoration: "none",
};

const OrderStatus = () => {
  return (
    <section style={orderStatusStyle}>
      <p style={orderStatusTextStyle}>No order has been made yet.</p>
      <a href="#" style={browseProductLinkStyle}>
        BROWSE PRODUCT
      </a>
    </section>
  );
};

export default OrderStatus;
