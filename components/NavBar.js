import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = (props) => {
  let con = props.con;
  let cont = props.cont;
  let allp = false;
  allp = props.allp;
  return (
    <nav className="w-full  flex py-6 justify-between items-center navbar text-white">
      <motion.h1
        className="font-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white "
        animate={{ x: ["-100vh", "50vh", "0vh"] }}
        transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
      >
        <Link href="/">
          {/* BL
          <span className="text-yellow-300">O</span>G */}
          <img
            src="https://solcasino.io/e39a525d1e61bbbe99bc22ad79468207.png"
            alt="sol casino"
            className="  w-64"
            // className="rounded-full h-52 w-52 sm:h-72 sm:w-72"
          />
        </Link>
      </motion.h1>

      {con && (
        <motion.ul
          className="list-none flex justify-end items-center flex-1 z-10"
          animate={{ x: ["100vh", "-50vh", "0vh"] }}
          transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
        >
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] mr-5 sm:mr-10  hover ">
            <Link href="/posts">All Posts</Link>
          </li>
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] hover ">
            <Link href="/contect">Contact</Link>
          </li>
        </motion.ul>
      )}

      {allp && (
        <ul className="list-none flex justify-end items-center flex-1 z-10">
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] mr-5 sm:mr-10  hover ">
            <Link href="/posts">All Posts</Link>
          </li>
        </ul>
      )}

      {cont && (
        <ul className="list-none flex justify-end items-center flex-1 z-10">
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] hover ">
            <Link href="/contect">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
