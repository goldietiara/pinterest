import React from "react";
import { BsPinterest } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import Auth from "./Auth";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className=" px-5 py-4 w-full flex justify-between">
      <div className="w-fit flex">
        <Link href={"/"}>
          <BsPinterest className=" p-3 rounded-full text-red-600 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
        </Link>
        <Button name="Home" onClicktype="route" route="pin-builder" />
        <Button name="Explore" onClicktype="route" route="pin-builder" />
        <Button
          name="Create"
          onClicktype="route"
          route="ryan.fadhilah.acc@gmail.com"
        />
      </div>

      <input
        type="text"
        placeholder={`Search`}
        className={` py-3 px-5 mx-2 rounded-full bg-gray-100 flex w-full`}
      />
      <div className=" w-[250px] flex">
        <MdNotifications className=" p-3 rounded-full text-gray-800 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
        <AiFillMessage className=" p-3 rounded-full text-gray-800 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
        <Auth />
      </div>
    </nav>
  );
};

export default NavBar;
