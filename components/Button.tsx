"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type props = {
  name: string | React.JSX.Element;
  onClicktype?: string;
  route?: string;
  onClickFunction?: () => void;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
  type?: "button" | "submit";
};

const Button = ({
  name,
  onClicktype,
  route,
  className,
  onClickFunction,
  type,
}: props) => {
  // const [routes, setRoutes] = useState();
  const router = useRouter();

  return (
    <button
      className={
        className != null
          ? `font-semibold py-3 px-4 ${className}`
          : // jgn lupa nanti flexnya di hapus
            `font-semibold py-3 px-4 rounded-full hover:bg-slate-100 flex`
      }
      onClick={
        onClicktype === "route"
          ? () => router.push(`${route}`)
          : () => onClickFunction
      }
      type={type || "button"}
    >
      {name}{" "}
      {name === "Create" ? <MdKeyboardArrowDown className=" text-2xl " /> : ""}
    </button>
  );
};

export default Button;
