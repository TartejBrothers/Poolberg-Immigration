import React from "react";
import "../styles/service.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import twitter from "../images/icons/twittercontact.svg";
import linkedin from "../images/icons/linkedincontact.svg";
import ServicePoints from "../components/elements/servicepoints";
import IndustriesServed from "../components/industriesserved";
import ContactFormRight from "../components/contactformright";
import { useNavigate } from "react-router-dom";
export default function ServicesIndividual() {
  const navigateTo = useNavigate();
  return (
    <div className="servicemain">
      <Navbar />
      <div className="servicemainform">
        <div className="contactform serviceform">
          <div className="contactformleft serviceformleft">
            <p>
              <u>For Individuals</u>
            </p>
            <h2>Speak to us about your personal Immigration needs</h2>
            <p>
              Poolbeg Immigration provides assistance to private clients on
              various applications, such as General Employment Permits, Critical
              Skill Employment Permit, Stamp 1G Extension, Visa Extension, Entry
              Visa, Citizenship, Family Reunification, Stamp 4, Stamp 0, and
              more.
            </p>
            <div className="contactsocials">
              <ul>
                <li>
                  <img src={twitter} alt="Twitter" />
                </li>
                <li>
                  <img src={linkedin} alt="LinkedIn" />
                </li>
              </ul>
            </div>
            <button
              className="talktousbutton"
              onClick={() => {
                navigateTo("/contact-us");
              }}
            >
              Talk To Us <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
          <div className="contactformright serviceformright">
            <ContactFormRight />
          </div>
        </div>
      </div>
      <div className="servicemainbody">
        <h1>Let us help with your application</h1>
        <p>
          We focus on delivering positive results to our clients and dedicate to
          offering quality services.
        </p>
        <div className="servicepoints">
          <ServicePoints
            header="Fast turnaround time"
            content="Full-time focus to operate efficiently and effectively to deliver
          results on time."
          />
          {/* <ServicePoints
            header="Dedicated account manager"
            content="Access to the consultant on the phone for quick support without the barrier of a receptionist."
          /> */}
          <ServicePoints
            header="Seamless application supports"
            content="Prepare files and manage immigration-related applications from start to finish for you."
          />
          <ServicePoints
            header="Fast-track your application"
            content="Follow up closely with the Irish department to track your application and liaise on your behalf."
          />
        </div>
      </div>
      <IndustriesServed />
      <Footer />
    </div>
  );
}
