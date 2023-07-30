import React from "react";
import { BsPinterest } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import Auth from "./Auth";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className=" px-5 py-4 w-full flex justify-between ">
      <div className="w-fit flex">
        {/* <Link href={"/"}>
          <BsPinterest className=" p-3 rounded-full text-red-600 text-5xl bg-white hover:bg-gray-100 cursor-pointer" />
        </Link> */}
        <Button
          name={
            <BsPinterest className=" text-2xl text-red-600 absolute m-auto -translate-x-1/2 -translate-y-1/2" />
          }
          className="rounded-full hover:bg-gray-100 px-6 relative shrink-0"
          onClicktype="route"
          route="/"
        />
        <Button name="Home" onClicktype="route" route="/" />
        <Button
          name="Explore"
          onClicktype="route"
          route="/ryan.fadhilah.acc@gmail.com"
        />
        <Button name="Create" onClicktype="route" route="/pin-builder" />
      </div>

      <input
        type="text"
        placeholder={`Search`}
        className={` py-3 px-5 mx-2 rounded-full bg-gray-100 flex w-full`}
      />
      <div className=" w-[250px] flex">
        <Button
          name={
            <MdNotifications className=" text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
          }
          className="rounded-full hover:bg-gray-100 px-6 relative shrink-0"
        />
        <Button
          name={
            <AiFillMessage className=" text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
          }
          className="rounded-full hover:bg-gray-100 px-6 relative shrink-0"
        />
        <Auth />
      </div>
    </nav>
  );
};

export default NavBar;
