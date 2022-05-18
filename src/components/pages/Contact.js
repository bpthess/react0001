import React from "react";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContactCont from "../includes/ContactCont";
// import Title from "../layout/Title";
// import Touch from "../layout/Touch";

function contact() {
  return (
    <>
      {/* <Header /> */}
      <Contents>
        {/* <Title title={["Contact", "Page"]} /> */}
        <ContactCont />
        {/* <Touch /> */}
      </Contents>
      {/* <Footer /> */}
    </>
  );
}

export default contact;
