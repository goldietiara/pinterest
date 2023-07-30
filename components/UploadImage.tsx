"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

type props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  selectedFiles?: any;
};

const UploadImage = ({ onChange, selectedFiles }: props) => {
  return (
    <div className="bg-gray-200 w-[50%] h-[450px] rounded-lg p-4 text-gray-500">
      <div className="w-full h-full border-2 border-gray-300 border-dashed relative">
        {!selectedFiles ? (
          <div className="grid grid-cols-1 p-3 w-full h-full">
            <p className=" place-self-end w-full text-center flex flex-col items-center gap-2 text-sm">
              <FaArrowCircleUp className="text-xl " />
              Drag and drop or click to upload
            </p>
            <p className=" place-self-end text-center font-light text-xs">
              We recommend using high quality .jpg files less than 20MB
            </p>
          </div>
        ) : (
          <Image
            src={window.URL.createObjectURL(selectedFiles)}
            // src={selectedFiles}
            alt="selected-image"
            width={500}
            height={800}
            className="object-contain h-[90%]"
          />
        )}
        <input
          id="image"
          type="file"
          accept="image/*"
          className="absolute opacity-0 bg-slate-200 top-0 w-full h-full cursor-pointer file:cursor-pointer"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default UploadImage;
