"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);
    setSent(false);

    if (!formRef.current) return;

    if (!serviceID || !templateID || !publicKey) {
      setError(true);
      throw new Error("Missing environment variables for EmailJS");
    }

    setIsLoading(true);
    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(() => {
        console.log("SUCCESS!");
        setSent(true);
        formRef.current?.reset();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        setError(true);
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="flex flex-col items-center w-[90vw] gap-16">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center gap-3">
            <div className="text-5xl font-semibold rounded-md text-myBlue">
              CONTACT
            </div>
            <div className="text-3xl font-semibold rounded-md text-myBlue">
              Let's Get In Touch
            </div>
          </div>

          <div className="h-1.5 w-1/2 rounded-md bg-gradient-to-r from-myBlue to-[#ff00ae]"></div>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="form flex flex-col gap-6 p-6 rounded-xl bg-white w-[40%]"
          style={{ boxShadow: "0px 4px 12px 2px rgba(0,0,0,0.1)" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="border-0 border-b-2 py-5 pl-1 pr-5 text-md focus:outline-none focus:border-myBlue hover:border-myBlue"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border-0 border-b-2 py-5 pl-1 pr-5 text-md focus:outline-none focus:border-myBlue hover:border-myBlue"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border-0 border-b-2 py-5 pl-1 pr-5 text-md focus:outline-none focus:border-myBlue hover:border-myBlue"
          />
          <button
            type="submit"
            className="bg-myBlue text-lg text-white px-6 py-3 rounded-lg hover:bg-[#003ec6] transition cursor-pointer"
          >
            {isLoading ? <CircularProgress /> : "Send"}
          </button>
          {sent && (
            <p className="text-center text-green-500 text-xl">Message sent!</p>
          )}
          {error && (
            <p className="text-center text-red-500 text-xl">
              An error occured. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
