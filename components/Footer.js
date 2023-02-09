import React from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
const Footer = (props) => {
  return (
    <section id="contect" className="mt-auto ">
      <div className="flex flex-row justify-around border-t-2 border-yellow-300 sm:px-32 px-6 py-6 sm:py-10 sm:mx-10 mx-5 bottom-0 right-0 left-0 align-bottom">
        <Link
          href="https://www.instagram.com/sunil.eth/"
          className="text-3xl text-yellow-300 hover:text-yellow-700"
        >
          <BsInstagram />
        </Link>
        <Link
          href="https://twitter.com/0xSunilReddy"
          className="text-3xl  text-yellow-300 hover:text-yellow-700"
        >
          <BsTwitter />
        </Link>
        <Link
          href="mailto:sunday7637@gmail.com"
          className="text-3xl   text-yellow-300 hover:text-yellow-700"
        >
          <AiTwotoneMail />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
