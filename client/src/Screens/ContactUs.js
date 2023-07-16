import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
import { FaVoicemail } from "react-icons/fa";
import { FiMapPin, FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  const ContactData = [
    {
      id: 1,
      title: "Email us",
      info: "Interactively grow backend for backend ideas for cross-platform models.",
      icon: FaVoicemail,
      contact: "info@cineverse.com",
    },
    {
      id: 2,
      title: "Call us",
      info: "Distinctively exploit optimùal alignments for intuitive bandwith",
      icon: FiPhoneCall,
      contact: "123456789",
    },
    {
      id: 3,
      title: "Location",
      info: "Pennsylvania, USA. Fort Washington, 2295 Spring Avenue",
      icon: FiMapPin,
      contact: "",
    },
  ];

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid mg:grid-cols-2 gap-6 lg:mt-20 my-10 lg:grid-cols-3 xl:gap-8 ">
          {ContactData.map((item) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-10 bg-dry rounded-lg text-center "
            >
              <span className="flex-colo w-20 h-20 rounded-full bg-main  text-subMain mb-4 text-2xl">
                <item.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="'mb-0 text-sm text-text leading-7 ">
                <a href={`mailto:${item.contact}`} className="text-blue-600">
                  {item.contact}
                </a>
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
