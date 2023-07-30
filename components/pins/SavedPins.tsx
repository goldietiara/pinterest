import React from "react";
import PinItems from "./PinItems";
import Image from "next/image";

const SavedPins = () => {
  return (
    <>
      <div className=" container mx-auto pb-10 columns-4xs w-full h-full">
        <div className="w-[235px] h-[156px] flex rounded-3xl relative overflow-hidden">
          <div className=" grid grid-cols-6 grid-rows-2 gap-[1px] w-[235px] h-full">
            <Image
              src={"/1.jpg"}
              height={1000}
              width={1000}
              alt=""
              className="col-span-4 row-span-2 w-full h-full object-none"
            />
            <Image
              src={"/2.jpg"}
              height={1000}
              width={1000}
              alt=""
              className=" col-span-2"
            />
            <Image
              src={"/3.jpg"}
              height={1000}
              width={1000}
              alt=""
              className=" col-span-2"
            />
          </div>
          <div className=" group/edit opacity-0 hover:opacity-100 absolute w-full h-full">
            <PinItems PinTypes="saved" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedPins;
