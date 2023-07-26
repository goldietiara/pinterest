"use client";
import React from "react";
import { BsPinterest } from "react-icons/bs";
import { MdKeyboardArrowDown, MdNotifications } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

// belum responsif

const NavBar = () => {
  const { data: session } = useSession();
  console.log(session?.user?.email);
  const router = useRouter();
  return (
    <nav className=" px-5 py-4 w-full flex justify-between">
      <div className="w-fit flex">
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
      </div>

      <input
        type="text"
        placeholder={`Search`}
        className={` py-3 px-5 mx-2 rounded-full bg-gray-100 flex w-full`}
      />
      <div className=" w-[250px] flex">
        <MdNotifications className=" p-3 rounded-full text-gray-800 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
        <AiFillMessage className=" p-3 rounded-full text-gray-800 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
        {session?.user ? (
          <Image
            src={`${session?.user?.image}`}
            onClick={() => signOut()}
            // onClick={() => router.push(`/${session?.user?.email}`)}
            alt="user-image"
            width={50}
            height={50}
            className={`font-semibold p-3 rounded-full bg-white cursor-pointer hover:bg-gray-100`}
          />
        ) : (
          <button
            className={`font-semibold p-3 rounded-full bg-white`}
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
