"use client";
import React, { useState } from "react";

type props = {};

function CreatedSaved() {
  const [option, setOption] = useState("saved");

  return (
    <div className="flex justify-center items-center w-full h-full mt-12 gap-5 font-medium">
      <button
        onClick={() => {
          setOption("created");
        }}
        className={
          option === "created"
            ? "border-b-[3px] border-black py-1 px-2 "
            : "py-1 px-2 hover:bg-gray-200 rounded-lg border-b-[3px] border-transparent"
        }
      >
        Created
      </button>
      <button
        onClick={() => {
          setOption("saved");
        }}
        className={
          option === "saved"
            ? "border-b-[3px] border-black py-1 px-2 "
            : "py-1 px-2 hover:bg-gray-200 rounded-lg border-b-[3px] border-transparent"
        }
      >
        Saved
      </button>
    </div>
  );
}

export default CreatedSaved;
