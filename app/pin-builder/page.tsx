import Button from "@/components/Button";
import Form from "@/components/Form";
import React from "react";
import { GrClose } from "react-icons/Gr";

const CreatePinForm = () => {
  return (
    <div className="bg-gray-200 w-full h-full py-10 flex items-center justify-center">
      <div className="bg-white w-[60%] px-12 py-7 rounded-2xl flex flex-col ">
        <div className="grid grid-cols-2 mb-5">
          <GrClose className=" self-center text-xl cursor-pointer" />
          <Button
            name="Save"
            className="bg-red-600 text-white text-base rounded-md w-fit py-2 place-self-end"
            onClicktype="route"
            route="/"
          />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default CreatePinForm;
