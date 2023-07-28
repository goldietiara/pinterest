"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiLoader2Fill } from "react-icons/ri";

type props = {
  name: string;
  onClicktype?: string;
  route?: string;
  onClickFunction?: () => void;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
};

const Button = ({
  name,
  onClicktype,
  route,
  className,
  onClickFunction,
}: props) => {
  // const [routes, setRoutes] = useState();
  const router = useRouter();

  return (
    <button
      className={
        className != null
          ? `font-semibold py-3 px-4 ${className}`
          : // jgn lupa nanti flexnya di hapus
            `font-semibold py-3 px-4 rounded-full hover:bg-slate-200 flex`
      }
      onClick={
        onClicktype === "route"
          ? () => router.push(`${route}`)
          : () => onClickFunction
      }
    >
      {name}{" "}
      {name === "Create" ? <MdKeyboardArrowDown className=" text-2xl " /> : ""}
    </button>
  );
};

export default Button;
