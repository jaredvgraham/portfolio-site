import ContactForm from "@/components/ContactForm";
import SocialMediaLinks from "@/components/SMLinks";
import { Contact } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <section className="mt-8 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-gray-300 text-center">
          Let&apos;s Connect
        </h2>
        <p className="text-lg mt-4 text-gray-400 ">
          Let&apos;s create something amazing together!
        </p>

        <p className="text-gray-400">Email: jaredvgraham@gmail.com</p>
        <a href="tel:7813367247">
          <p className="text-gray-400">Phone: 781-336-7247</p>
        </a>

        <SocialMediaLinks />
      </section>
      <ContactForm />
    </>
  );
};

export default page;
