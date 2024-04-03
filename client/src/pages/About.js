import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - food order"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Hello! Food Order App is for online food orders.Developed by Venkata Gowtham Reddy Muthukuru.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
