import React, { useState } from "react";
import { useSession } from "next-auth/react";

import { GrClose } from "react-icons/gr";
import UserTag from "@/components/UserTag";
import Button from "@/components/Button";
import Image from "next/image";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "@/app/Shared/firebaseConfig";
import { BiDotsHorizontalRounded, BiUpload, BiLink } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";

type params = {
  params: { id: string };
};

const Form = async ({ params }: params) => {
  const db = getFirestore(app);
  const docRef = doc(db, "pinterest-post", params.id);
  const docSnap = await getDoc(docRef);
  const pins = docSnap.data();

  return (
    <div className="bg-white w-full h-full py-9 flex items-center justify-center relative">
      <div className=" absolute top-4 left-6">
        <Button
          name={
            <FaArrowLeft className=" stroke-[1px] text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
          }
          onClicktype="route"
          route="/"
          className=" rounded-full hover:bg-gray-100 py-5 px-5 relative shrink-0"
        />
      </div>
      <div className="bg-white w-[65%] overflow-hidden rounded-3xl grid grid-cols-2 mb-5 gap-10 shadow-xl shadow-gray-100">
        <Image src={`${pins?.image}`} height={1000} width={1000} alt="" />
        <div className="flex flex-col gap-10 h-[100%] w-full p-5">
          <div className="flex flex-row justify-between">
            <div className=" flex">
              <Button
                name={
                  <BiDotsHorizontalRounded className=" stroke-[1px] text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
                }
                className=" rounded-full hover:bg-gray-100 py-5 px-6 relative shrink-0"
              />
              <Button
                name={
                  <BiUpload className=" stroke-[1px] text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
                }
                className=" rounded-full hover:bg-gray-100 py-5 px-6 relative shrink-0"
              />
              <Button
                name={
                  <BiLink className=" stroke-[1px] text-2xl absolute m-auto -translate-x-1/2 -translate-y-1/2" />
                }
                className=" rounded-full hover:bg-gray-100 py-5 px-6 relative shrink-0"
              />
            </div>
            <Button
              name="Save"
              type="submit"
              className="bg-red-600 text-white text-base rounded-full w-fit py-2 place-self-end"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className="text-3xl font-semibold ">{pins?.title}</h1>
            <p className=" font-light">{pins?.desc}</p>
          </div>
          <p>user tag</p>
          {/* <UserTag
            srcPath={session?.user?.image}
            username={session?.user?.name}
          /> */}
          <div className="mt-10 place-self-end">
            <p className=" font-semibold text-lg">Comments~</p>
            <p className=" font-light text-md mt-3">
              No comments yet! Add one to start the conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
