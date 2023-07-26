"use client";
import React from "react";
import { BsPinterest } from "react-icons/bs";
import { MdKeyboardArrowDown, MdNotifications } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  console.log(session?.user?.email);
  console.log(session?.user?.name);
  console.log(session?.user?.image);

  return (
    <nav className=" px-5 py-4 w-full flex">
      <BsPinterest className=" p-3 rounded-full text-red-600 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
      <button className={`font-semibold p-3 rounded-full bg-white`}>
        Home
      </button>
      <button className={`font-semibold p-3 rounded-full bg-white`}>
        Explore
      </button>
      <button
        className={` flex items-center font-semibold p-3 rounded-full bg-white`}
      >
        Create <MdKeyboardArrowDown className=" text-2xl " />
      </button>
      <input
        type="text"
        placeholder={`Search`}
        className={` py-3 px-5 mx-2 rounded-full bg-gray-100 flex min-w-min w-6/12`}
      />
      <MdNotifications className=" p-3 rounded-full text-gray-800 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
      <AiFillMessage className=" p-3 rounded-full text-gray-800 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
      <button
        className={`font-semibold p-3 rounded-full bg-white`}
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </nav>
  );
};

export default NavBar;
