"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm("service_g139qhy", "template_xkjl22j", formRef.current, {
        publicKey: "N4VmfQTqSvoL9ehui",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="pb-20">
      <div className="flex flex-col items-center w-full gap-20">
        <div className="flex flex-col gap-16 items-center">
          <div className="text-6xl font-semibold px-6 py-4 rounded-md text-myBlue">
            Lets Get In Touch
          </div>
          <div className="h-1.5 w-1/2 rounded-md bg-gradient-to-r from-myBlue to-[#ff00ae]"></div>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="form w-[40%] flex flex-col gap-6 p-6 rounded-xl bg-white w-full"
          style={{ boxShadow: "0px 4px 12px 2px rgba(0,0,0,0.1)" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="border-0 border-b-2 py-5 pl-1 pr-5 text-xl focus:outline-none focus:border-myBlue hover:border-myBlue"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border-0 border-b-2 py-5 pl-1 pr-5 text-xl focus:outline-none focus:border-myBlue hover:border-myBlue"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border-0 border-b-2 py-5 pl-1 pr-5 text-xl focus:outline-none focus:border-myBlue hover:border-myBlue"
          />
          <button
            type="submit"
            className="bg-myBlue text-2xl text-white px-6 py-3 rounded-lg hover:bg-[#003ec6] transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
