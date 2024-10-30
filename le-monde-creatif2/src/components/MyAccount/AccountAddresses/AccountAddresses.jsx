/**
 * This code was generated by Builder.io.
 */
import React from "react";
import NavigationMenu from "./NavigationMenu";
import AddressForm from "./AddressForm";

const accountAddressesStyle = {
  background: "var(--Light-Colors-White---Light, #fff)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  alignItems: "start",
  padding: "85px 80px",
};

const horizontalLineStyle = {
  backgroundColor: "#d8d8d8",
  alignSelf: "center",
  width: "1248px",
  maxWidth: "100%",
};

const AccountAddresses = ({setChangeVue}) => {
  return (
    <div>
      
      <div style={horizontalLineStyle} />
      <NavigationMenu setChangeVue={setChangeVue}/>
      
      <AddressForm />
     
    </div>
  );
};

export default AccountAddresses;