import Form from "@/components/Form";
import React from "react";

const CreatePinForm = () => {
  return (
    <div className="bg-gray-200 w-full h-full py-10 flex items-center justify-center">
      <div className="bg-white w-[60%] px-12 py-7 rounded-2xl flex flex-col ">
        <Form />
      </div>
    </div>
  );
};

export default CreatePinForm;
