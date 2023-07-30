import React from "react";
import Button from "../Button";
import { BiUpload, BiDotsHorizontalRounded } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";

type props = {
  PinTypes: "created" | "saved";
};
const PinItems = ({ PinTypes }: props) => {
  return (
    <div className="w-full h-full relative grid">
      <div
        className={
          PinTypes === "created"
            ? `bg-black opacity-20 w-full h-full`
            : ` bg-gray-500 opacity-10 w-full h-full`
        }
      ></div>
      <div
        className={
          PinTypes == "created"
            ? `p-5 w-full h-full absolute flex flex-col justify-between items-end`
            : `p-5 w-full h-full absolute flex flex-col justify-end items-end`
        }
      >
        {PinTypes == "created" ? (
          <>
            <Button
              name="save"
              className="bg-red-600 text-white opacity-100 h-fit w-fit rounded-full"
            />
            <div className="gap-2 flex">
              <Button
                name={
                  <BiDotsHorizontalRounded className=" stroke-[1px] text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
                }
                className=" bg-gray-100 rounded-full hover:bg-white py-5 px-5 relative"
              />
              <Button
                name={
                  <BiUpload className=" stroke-[1px] text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
                }
                className=" bg-gray-200 rounded-full hover:bg-white py-5 px-5 relative"
              />
            </div>
          </>
        ) : (
          <Button
            name={
              <MdModeEdit className=" text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
            }
            className=" bg-gray-100 rounded-full py-5 px-5 relative opacity-90 hover:opacity-100"
          />
        )}
      </div>
    </div>
  );
};

export default PinItems;
