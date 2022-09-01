import React from "react";
import "./Contact.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="contact">
        <p>
          For any type of query write a mail at{" "}
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZlPcTQKpjxRshRxJTXrkKTlWQBNXHPRbVJZhrtxmdhfgszZWgpFmScKlRBVSpRnPPFL">
            rajmail019@email.com
          </a>{" "}
          or you can call on <a href="tel:+918299807983">+918299807983</a>,{" "}
          <a href="tel:+917897327556">+917897327556</a> at any time between
          7:00am to 9pm.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
